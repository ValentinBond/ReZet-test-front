import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

import './search.css';


const Search = ({ onChangeFilter }) => {
    return (
        <div className="search_wrap">
            <AiOutlineSearch className="search_icon"/>
            <input
              type="text"
              className="search_input"
              onChange={(e) => onChangeFilter(e.target.value)}
              placeholder="Search..."
            />
        </div>
    );
};

Search.propTypes = {
    onChangeFilter: PropTypes.func
};

export default Search;