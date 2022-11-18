import React from "react";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import axios from "axios";
import "./SearchTextFilter.css";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const SearchTextFilter = () => {
  const [searchText, setSearchText] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const { token } = useSelector((store) => store.authReducer);
  const ref = React.useRef(null);

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

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (searchText.length > 0) getSuggestions(searchText);
  }, [searchText]);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="search-icon-container form-group col-md-12">
      <div className="search-suggestion-wrapper">
        <div className="search-suggestion-input">
          <Form.Control
            ref={ref}
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchText}
            onClick={() => setIsOpen(true)}
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
        {isOpen && (
          <div className="search-suggestion-list">
            <div className="search-suggestion-items">
              <div className="search-suggestion-item">
                <div className="suggestion-text">BP</div>
                <div className="suggestion-type">Description</div>
              </div>
              <div className="search-suggestion-item">
                <div className="suggestion-text">Auto Lease</div>
                <div className="suggestion-type">Category</div>
              </div>
              <div className="search-suggestion-item">
                <div className="suggestion-text">Bars, Pubs & Nightclubs</div>
                <div className="suggestion-type">Category</div>
              </div>
              <div className="search-suggestion-item">
                <div className="suggestion-text">Fast Food Restaurants</div>
                <div className="suggestion-type">Category</div>
              </div>
              <div className="search-suggestion-item">
                <div className="suggestion-text">Candy, Ice Cream & Kiosks</div>
                <div className="suggestion-type">Category</div>
              </div>
              <div className="search-suggestion-item">
                <div className="suggestion-text">Restaurants & Cafes</div>
                <div className="suggestion-type">Category</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchTextFilter;
