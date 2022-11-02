import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { setCategoryFilterData } from "../store/actions/component-action";
import { connect } from "react-redux";

class CategoriesDropdown extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.setCategoryFilter(this.props.token);
  }

  render() {
    const categoryFilterData = this.props.categoryFilterData;
    return (
      <>
        <label htmlFor="inputEmail4">Category</label>
        <Form.Select aria-label="Default select">
          <option>Select categories</option>
          {categoryFilterData &&
            categoryFilterData.map((cat, i) => (
              <>
                <option key={i} value={cat.name}>{cat.name}</option>
              </>
            ))}
        </Form.Select>
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
