import React from "react";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const SearchTextFilter = () => {
  const [searchText, setSearchText] = React.useState("");
  const { token } = useSelector((store) => store.authReducer);

  const debounceHandler = debounce(() => {});

  const getSuggestions = (searchText) => {
    console.log(searchText);

    axios
      .get(
        `${API_URL}/transactions/suggestions?token=Bearer ${token}&text=${searchText}&orderBy=ByText&ascendingOrder=true&suggestionTypes=Category,Tag,Description&onlyShowResultsWithTransactions=true`
      )
      .then((response) => {
        if (response.status === 200) {
          //this.setState( { merchantDetails: response.data.data})
          console.log(response);
        }
      });
  };

  React.useEffect(() => {
    if(searchText.length > 0)
        getSuggestions(searchText);
  }, [searchText]);

  return (
    <div className="search-icon-container form-group col-md-12">
      <Form.Control
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <span className="search-icon">
        <Icon
          path={mdiMagnify}
          size={1.5}
          horizontal
          vertical
          rotate={180}
          color="#dddddd"
        />
      </span>
    </div>
  );
};
export default SearchTextFilter;
