import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { setCategoryFilterData } from "../store/actions/component-action";
import { connect } from "react-redux";
import { Dropdown, Accordion, useAccordionButton } from "react-bootstrap";
import "./CategoriesDropdown.css";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";

function CustomToggle({ children, eventKey }) {
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
    };
    this.wrapper = React.createRef();
    this.selectClick = this.selectClick.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
    this.parentCatClick = this.parentCatClick.bind(this);
    this.childCatClick = this.childCatClick.bind(this);
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.outsideClick);
    await this.props.setCategoryFilter(this.props.token);
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
      let array = [...this.state.selectedCategories];
      let index = array.indexOf(childCatId);
      if (index > -1) {
        array.splice(index, 1);
        this.setState({ selectedCategories: [...array] }, () => {
          this.props.onChange(this.state.selectedCategories);
        });
      }
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

  render() {
    const categoryFilterData = this.props.categoryFilterData;
    return (
      <>
        <label htmlFor="inputEmail4">Category</label>
        <div className="custom-select-dropdown">
          <div className="select-wrapper" ref={this.wrapper}>
            <div className="select-placeholder" onClick={this.selectClick}>
              <span className="placeholder-text">
                {this.props.placeholder ? this.props.placeholder : ""}
              </span>
            </div>
            {this.state.isOpen && (
              <div className="select-list">
                <div className="select-container">
                  <div className="search">
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className="select-options">
                    <Dropdown>
                      {categoryFilterData &&
                        categoryFilterData.map((categ, index) => {
                          return categ.children && categ.children.length > 0 ? (
                            <Accordion>
                              <div className="accordianHeader">
                                <div className="accordianHeaderCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    id={`default-${categ.name}`}
                                    label={categ.name}
                                    className="Checkbox-text"
                                    onChange={(event) =>
                                      this.parentCatClick(event, categ.id)
                                    }
                                    checked={categ.children.every((item) =>
                                      this.state.selectedCategories.includes(
                                        item.id
                                      )
                                    )}
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
                                        checked={this.state.selectedCategories.includes(
                                          children.id
                                        )}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </Accordion.Collapse>
                            </Accordion>
                          ) : (
                            <Dropdown.Item key={categ.id} eventKey={categ.name}>
                              {categ.name}
                            </Dropdown.Item>
                          );
                        })}
                    </Dropdown>
                  </div>
                </div>
              </div>
            )}
          </div>
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
