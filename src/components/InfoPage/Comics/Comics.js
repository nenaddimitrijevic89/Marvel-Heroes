import React from 'react';
import { Row } from 'react-bootstrap';
import { ComicCard } from './ComicCard/ComicCard';

const Comics = ({ comics }) => {
    return (
        <Row>
            {comics.map(comic => <ComicCard image={comic.image} key={comic.id} />)}
        </Row>
    )
}

export { Comics }