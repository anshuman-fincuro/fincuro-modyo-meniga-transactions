import React from "react";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiMagnify, mdiLoading } from "@mdi/js";
import { useSelector } from "react-redux";
import axios from "axios";
import "./SearchTextFilter.css";
import useDebounce from "./../../../hooks/useDebounce";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const SearchTextFilter = ({ onSearchChange }) => {
  const [searchText, setSearchText] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const { token } = useSelector((store) => store.authReducer);
  const ref = React.useRef(null);
  const [loading, setLoading] = React.useState(false);

  const getSuggestions = (searchText) => {
    setLoading(true);
    axios
      .get(
        `${API_URL}/transactions/suggestions?token=Bearer ${token}&text=${searchText}&orderBy=ByText`
      )
      .then((response) => {
        if (response.status === 200 && response.data) {
          setSuggestions(response.data.data);
        } else {
          setSuggestions([]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  function onSuggestionClick(item) {
    setIsOpen(false);
    onSearchChange(item.text);
  }

  const highLight = (val) =>
    val.replace(new RegExp(searchText, "gi"), (str) => `<u>${str}</u>`);

  const debouncedSearchTerm = useDebounce(searchText, 1000);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      getSuggestions(debouncedSearchTerm);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="search-icon-container form-group col-md-12">
      <div className="search-suggestion-wrapper" ref={ref}>
        <div className="search-suggestion-input">
          <Form.Control
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchText}
            onClick={() => setIsOpen(true)}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <span className="search-icon">
            {loading ? (
              <Icon
                path={mdiLoading}
                size={1.5}
                horizontal
                vertical
                rotate={180}
                color="#dddddd"
                spin
              />
            ) : (
              <Icon
                path={mdiMagnify}
                size={1.5}
                horizontal
                vertical
                rotate={180}
                color="#dddddd"
              />
            )}
          </span>
        </div>
        {isOpen && suggestions.length > 0 && (
          <div className="search-suggestion-list">
            <div className="search-suggestion-items">
              {suggestions.map((item, index) => (
                <div key={index}>
                  <div
                    className="search-suggestion-item"
                    onClick={() => onSuggestionClick(item)}
                  >
                    <div
                      className="suggestion-text"
                      dangerouslySetInnerHTML={{ __html: highLight(item.text) }}
                    ></div>
                    <div className="suggestion-type">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchTextFilter;
