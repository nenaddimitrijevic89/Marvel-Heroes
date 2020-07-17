import React from 'react';

const SearchBar = ({ searchHeroes }) => {

    const search = (event) => {
        if (event.charCode === 13) {
            const text = event.target.value;
            searchHeroes(text)
        }
    }
    return (
        <input className="form-control mr-sm-2" type="search" placeholder="Type and press enter" aria-label="Search" onKeyPress={search} />
    )
}

export { SearchBar };