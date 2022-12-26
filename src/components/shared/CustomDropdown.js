import React, { useEffect, useState } from 'react';
import { Dropdown, Accordion } from 'react-bootstrap';
import './CustomDropdown.css';

const CustomDropdown = (props) => {
    const { items, handleSelection, detectedCategories, defaultSelect, rowId } = props;
    const [selectedValue, setSelectedValue] = useState('');
    const [showAllCategorie, setShowAllCategories] = useState('');
    const [show, setShow] = useState();
    const [search, setSearch] = useState('');

    const handleSelect = (categoryName, categoryId, rowId) => {
        handleSelection(categoryName, categoryId, rowId);
        setSelectedValue(categoryName);
    }
    const showAllCategories = (val) => {
        setShowAllCategories(val);
        console.log('showAllCategorie', val);
    }
    useEffect(() => {
        if (!show) {
            setShowAllCategories('');            
            setSearch('');
        }

        console.log('items', props.items);
    }, [show]);
    useEffect(() => {
        setSelectedValue(defaultSelect);
    }, [defaultSelect])
    return (
        <div className="custom-dropdown-wrapper">
            <Dropdown show={show}
                onToggle={(isOpen, event, metadata) => {
                    setShow(isOpen);
                }} onClick={(event) => event.stopPropagation()}>
                <Dropdown.Toggle>
                    {selectedValue}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="dropdown-menu-wrapper">
                        <div className="search-filter">
                            <input id="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Categories" type="search" value={search} autoComplete="no" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" fill="#566B76" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
                        </div>
                        {search == "" ?
                            <div>
                                {showAllCategorie !== "Show All Categories" ? (<div className="single-values">
                                    {detectedCategories && detectedCategories.map((categId) =>
                                        props.categorydata.filter(
                                            (detectid) =>
                                                detectid.id === categId.categoryId
                                        )
                                    )
                                        .map((categ) => (
                                            <Dropdown.Item key={categ[0].name} eventKey={categ[0].name} onClick={()=>handleSelect(categ[0].name,categ[0].id,rowId)}><i className={`Icon Icon--info CategoryIcon Icon--line CategoryIcon--${categ[0].id}`}></i>  {categ[0].name}</Dropdown.Item>
                                        ))}
                                </div>) : (
                                    <Accordion>
                                        {
                                            items && items.map(item => (
                                                <Accordion.Item eventKey={item.id}>
                                                    <Accordion.Header><i className={`Icon Icon--info CategoryIcon Icon--line Icon--primaryAction Icon--light Icon--round CategoryIcon--${item.id}`}></i> {item.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {item.children.map(children => (
                                                            <Dropdown.Item key={children.id} eventKey={children.name} onClick={()=>handleSelect(children.name,children.id,rowId)}><i className={`Icon Icon--info CategoryIcon Icon--line Icon--primaryAction Icon--light CategoryIcon--${children.id}`}></i> {children.name}</Dropdown.Item>
                                                        ))}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))
                                        }

                                    </Accordion>)}
                            </div>
                            : <div className='sear-list-wrapper'>
                                {items && items.map(item => (
                                    <>
                                        {item.children.filter((item) =>{
                                            console.log('item.children',item.length)
                                            return search.toLowerCase() === ''
                                            ? item
                                            : item.name.toLowerCase().includes(search.toLowerCase());
                                        }).map(children => (
                                            <Dropdown.Item key={children.id} eventKey={children.name} onClick={()=>handleSelect(children.name,children.id,rowId)}><i className={`Icon Icon--info CategoryIcon Icon--line Icon--primaryAction Icon--light CategoryIcon--${children.id}`}></i> {children.name}</Dropdown.Item>
                                        ))}
                                    </>
                                ))}
                            </div>
                        }
                        {showAllCategorie !== "Show All Categories" && <Dropdown.ItemText onClick={() => { showAllCategories("Show All Categories") }}>Show All Categories</Dropdown.ItemText>}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CustomDropdown;