import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ searchHeroes }) => {
    const search = (event) => {
        if (event.charCode === 13) {
            const text = event.target.value;
            searchHeroes(text)
        }
    }
    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={search} />
            <Button variant="outline-danger">Search</Button>
        </Form>
    )
}

export { SearchBar };