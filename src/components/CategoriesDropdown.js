import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { setCategoryFilterData } from "../store/actions/component-action";
import { connect } from "react-redux";
import { Dropdown, Accordion, DropdownButton } from "react-bootstrap";
import "./CategoriesDropdown.css";

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
    this.setState(
      (prevstate) => ({
        selectedCategories: [...prevstate.selectedCategories, ...childIds],
      }),
      () => {
        this.props.onChange(this.state.selectedCategories);
      }
    );
  }

  childCatClick(event, parentCatId, childCatId) {
    event.stopPropagation();
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

  render() {
    const categoryFilterData = this.props.categoryFilterData;
    return (
      <>
        <label htmlFor="inputEmail4">Category</label>
        {/* <Form.Select aria-label="Default select">
          <option>Select categories</option>
          {categoryFilterData &&
            categoryFilterData.map((cat, i) => (
              <>
                <option key={i} value={cat.name}>{cat.name}</option>
              </>
            ))}
        </Form.Select> */}

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
                    <input type="text" placeholder="search" />
                  </div>
                  <div className="select-options">
                    <Dropdown>
                      {categoryFilterData &&
                        categoryFilterData.map((categ) => {
                          return categ.children && categ.children.length > 0 ? (
                            <Accordion>
                              <Accordion.Item
                                key={categ.id}
                                eventKey={categ.id}
                              >
                                <Accordion.Header
                                  onClick={(event) =>
                                    this.parentCatClick(event, categ.id)
                                  }
                                >
                                  {categ.name}
                                </Accordion.Header>
                                <Accordion.Body>
                                  {categ.children.map((children) => (
                                    <Dropdown.Item
                                      key={children.id}
                                      eventKey={children.name}
                                      onClick={(event) =>
                                        this.childCatClick(
                                          event,
                                          categ.id,
                                          children.id
                                        )
                                      }
                                    >
                                      {children.name}
                                    </Dropdown.Item>
                                  ))}
                                </Accordion.Body>
                              </Accordion.Item>
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
