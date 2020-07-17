import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HeroInfoCard = ({ heroInfo }) => {
    const { fullImage, description, image } = heroInfo;
    return (
        <Row>
            <Col>
                <img src={image} alt="heroImage" />
            </Col>
            <Col>
                <p>{description
                    ? description
                    : "Lorem Ipsum dolor sit amet"
                }</p>

            </Col>
        </Row>
    )
}

export { HeroInfoCard };