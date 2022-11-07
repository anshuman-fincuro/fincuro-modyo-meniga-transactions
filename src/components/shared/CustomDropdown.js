import React, {useState} from 'react';
import { Dropdown, Accordion } from 'react-bootstrap';
import './CustomDropdown.css';

const CustomDropdown = (props) => {
    const {items, handleSelection} = props;
    console.log('items', items);
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelect = (value) => {
        setSelectedValue(value);
        handleSelection(value);
    }
    return (
        <div className="custom-dropdown-wrapper">
            <Dropdown onClick={(event) => event.stopPropagation()} onSelect={handleSelect}>
                <Dropdown.Toggle id="dropdown-basic">
                    {selectedValue}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="dropdown-menu-wrapper">
                        {/* <div className="search-filter">
                            <input id="search" placeholder="Search Categories" type="search" autocomplete="no" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" fill="#566B76" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
                        </div>
                        <div className="single-values">
                            <Dropdown.Item href="#/action-1">Rent Paid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Categories</Dropdown.Item>
                        </div> */}
                        
                        
                            <Accordion>
                        {
                            items.map(item=>(
                                <Accordion.Item eventKey={item.id}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        {item.children.map(children => (                                            
                                         <Dropdown.Item key={children.id} eventKey={children.name}>{children.name}</Dropdown.Item>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                                
                            </Accordion>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CustomDropdown;