import React from 'react';
import { Col } from 'react-bootstrap';
import style from './ComicCard.module.css';

const ComicCard = ({ image }) => {
    return (
        <Col lg={2} md={3} sm={4} xs={6} className={style.margin}>
            <img src={image} alt='comicImg' className={style.shadow} />
        </Col>
    )
}

export { ComicCard }