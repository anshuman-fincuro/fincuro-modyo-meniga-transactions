import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { setCategoryFilterData } from "../store/actions/component-action";
import { connect } from "react-redux";
import { Dropdown, Accordion, useAccordionButton } from "react-bootstrap";
import "./CategoriesDropdown.css";
import { mdiChevronDown, mdiChevronUp, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "react-bootstrap/Button";

function CustomToggle({eventKey }) {
  const [open, setOpen] = React.useState(false);
  const decoratedOnClick = useAccordionButton(eventKey, (e) => {
    setOpen(!open);
  });

  return (
    <>
      {open ? (
        <Icon
          path={mdiChevronUp}
          size={1.5}
          color="#000000"
          onClick={decoratedOnClick}
        />
      ) : (
        <Icon
          path={mdiChevronDown}
          size={1.5}
          color="#000000"
          onClick={decoratedOnClick}
        />
      )}
    </>
  );
}

class CategoriesDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedCategories: [],
      allChildCategories: [],
      searchText: "",
      search:  false
    };
    this.wrapper = React.createRef();
    this.selectClick = this.selectClick.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
    this.parentCatClick = this.parentCatClick.bind(this);
    this.childCatClick = this.childCatClick.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.onInputchange = this.onInputchange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.outsideClick);
    await this.props.setCategoryFilter(this.props.token);
    let categories = this.props.categoryFilterData;
    if (categories.length > 0) {
      const allChildCats = categories.reduce((acc, item) => {
        if (item.children && item.children.length > 0) {
          acc = [...acc, ...item.children];
        }
        return acc;
      }, []);
      this.setState({ allChildCategories: allChildCats });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.outsideClick);
  }

  selectClick() {
    this.setState((prevstate) => ({ isOpen: !prevstate.isOpen }));
  }

  outsideClick(event) {
    if (
      this.wrapper &&
      this.wrapper.current &&
      !this.wrapper.current.contains(event.target)
    ) {
      this.setState({ isOpen: false });
    }
  }

  parentCatClick(event, catId) {
    event.stopPropagation();
    const cat = this.props.categoryFilterData.find((item) => item.id == catId);
    const childIds = cat.children.map((child) => child.id);
    if (!event.target.checked) {
      let newArr = this.state.selectedCategories.filter(
        (id) => !childIds.includes(id)
      );
      this.setState({ selectedCategories: [...newArr] }, () => {
        this.props.onChange(this.state.selectedCategories);
      });
    } else {
      const categories = this.state.selectedCategories;
      let arr = [];
      if (childIds.some((id) => categories.includes(id))) {
        let newArr = categories.filter((id) => !childIds.includes(id));
        arr = [...newArr, ...childIds];
      } else {
        arr = [...categories, ...childIds];
      }
      this.setState({ selectedCategories: [...arr] }, () => {
        this.props.onChange(this.state.selectedCategories);
      });
    }
  }

 
  childCatClick(event, parentCatId, childCatId) {
    event.stopPropagation();
    if (!event.target.checked) {
      // let array = [...this.state.selectedCategories];
      // let index = array.indexOf(childCatId);
      // if (index > -1) {
      //   array.splice(index, 1);
      //   this.setState({ selectedCategories: [...array] }, () => {
      //     this.props.onChange(this.state.selectedCategories);
      //   });
      // }
      this.removeCategory(childCatId);
    } else {
      const cat = this.props.categoryFilterData.find(
        (item) => item.id == parentCatId
      );
      if (cat && cat.children && cat.children.length > 0) {
        const childCat = cat.children.find((item) => item.id == childCatId);
        if (childCat) {
          if (!this.state.selectedCategories.includes(childCat.id)) {
            this.setState(
              (prevstate) => ({
                selectedCategories: [
                  ...prevstate.selectedCategories,
                  childCat.id,
                ],
              }),
              () => {
                this.props.onChange(this.state.selectedCategories);
              }
            );
          }
        }
      }
    }
  }

  removeCategory(id) {
    let array = [...this.state.selectedCategories];
    let index = array.indexOf(id);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({ selectedCategories: [...array] }, () => {
        this.props.onChange(this.state.selectedCategories);
      });
    }
  }

  getCategoryName(id) {
    const { allChildCategories } = this.state;
    const findObj = allChildCategories.find((item) => item.id === id);
    if (findObj && findObj.name) {
      return findObj.name;
    }
  }

  checkParent(category) {
    if (category && category.children && category.children.length > 0) {
      return category.children.every((item) =>
        this.state.selectedCategories.includes(item.id)
      );
    }
    return false;
  }

  checkParentIndeterminate(category) {
    if (
      category.children.every((item) =>
        this.state.selectedCategories.includes(item.id)
      )
    ) {
      return false;
    } else if (
      category.children.some((item) =>
        this.state.selectedCategories.includes(item.id)
      )
    ) {
      return true;
    } else return false;
  }

  onInputchange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (this.state.searchText.length > 0) this.setState({ search: true });
        else this.setState({ search: false });
      }
    );
  }

  categoryChange(event,id){
      if(event.target.checked){
        this.setState( (prevState) => ({ selectedCategories: [...prevState.selectedCategories, id] }), ()=>{
          this.props.onChange(this.state.selectedCategories);
        })
      }else{
        this.removeCategory(id);
      }
  }

  render() {
    const categoryFilterData = this.props.categoryFilterData;
    const {
      selectedCategories,
      allChildCategories,
      isOpen,
      search,
      searchText,
    } = this.state;
    return (
      <>
        <label htmlFor="inputEmail4">Category</label>
        <div className="custom-select-dropdown">
          <div className="select-wrapper" ref={this.wrapper}>
            <div className="select-placeholder" onClick={this.selectClick}>
              <span className="placeholder-text">
                {this.props.placeholder ? this.props.placeholder : ""}
              </span>
              <div className="selectCloseIcon">
                {isOpen ? (
                  <Icon path={mdiChevronUp} size={1.5} />
                ) : (
                  <Icon path={mdiChevronDown} size={1.5} />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="select-list">
                <div className="select-container">
                  <div className="search">
                    <input
                      type="text"
                      name="searchText"
                      placeholder="Search"
                      value={this.state.searchText}
                      onChange={this.onInputchange}
                    />
                  </div>
                  {!search ? (
                    <div className="select-options">
                      {categoryFilterData &&
                        categoryFilterData.map((categ, index) => {
                          return categ.children && categ.children.length > 0 ? (
                            <Accordion key={index}>
                              <div className="accordianHeader">
                                <div className="accordianHeaderCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    id={`default-${categ.name}`}
                                    label={categ.name}
                                    className={
                                      "Checkbox-text " +
                                      (this.checkParentIndeterminate(categ)
                                        ? "indeterminate"
                                        : "")
                                    }
                                    onChange={(event) =>
                                      this.parentCatClick(event, categ.id)
                                    }
                                    checked={this.checkParent(categ)}
                                  />
                                </div>
                                <div className="accordianToggle">
                                  <CustomToggle eventKey={index}></CustomToggle>
                                </div>
                              </div>
                              <Accordion.Collapse eventKey={index}>
                                <div className="collapsableContent">
                                  {categ.children.map((children) => (
                                    <div
                                      eventKey={`${categ.id}`}
                                      className="checkboxWrapper"
                                      key={children.id}
                                    >
                                      <Form.Check
                                        onChange={(event) =>
                                          this.childCatClick(
                                            event,
                                            categ.id,
                                            children.id
                                          )
                                        }
                                        className="Checkbox-text"
                                        type="checkbox"
                                        id={`default-${children.name}`}
                                        label={children.name}
                                        checked={selectedCategories.includes(
                                          children.id
                                        )}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </Accordion.Collapse>
                            </Accordion>
                          ) : (
                            <Dropdown>
                              <Dropdown.Item
                                key={categ.id}
                                eventKey={categ.name}
                              >
                                {categ.name}
                              </Dropdown.Item>
                            </Dropdown>
                          );
                        })}
                    </div>
                  ) : (
                    <div className="select-options">
                      {allChildCategories
                        .filter(({ name }) =>
                          name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        .map((cat, index) => (
                          <div className="checkboxWrapper" key={index}>
                            <Form.Check
                              onChange={(event)=> this.categoryChange(event, cat.id)}
                              className="Checkbox-text"
                              type="checkbox"
                              id={`default-${cat.name}`}
                              label={cat.name}
                              checked={selectedCategories.includes(cat.id)}
                            />
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="selected__category__list">
          {selectedCategories &&
            selectedCategories.length > 0 &&
            selectedCategories.map((id, index) => (
              <div className="selected__category__name" key={index}>
                <Button
                  variant="secondary"
                  className="category__remove_button"
                  onClick={() => this.removeCategory(id)}
                >
                  <span className="button-label">
                    {this.getCategoryName(id)}
                  </span>
                  <Icon path={mdiClose} size={1} />
                </Button>
              </div>
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  categoryFilterData: state.componentReducer.categoryFilterData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCategoryFilter: (token) => dispatch(setCategoryFilterData(token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesDropdown);
