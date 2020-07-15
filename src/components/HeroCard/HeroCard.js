import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import style from './HeroCard.module.css';

const HeroCard = ({ avatar, name }) => {
    return (
        <Col lg={4} className={style.crdMargin}>
            <Card className={style.cardAbs}>
                <Card.Img variant="top" src={avatar} />
                <Card.Title className={`text-center ${style.abs}`}>{name}</Card.Title>
                <Card.Body className={style.back}>

                    <Col className="text-center">
                        <Button variant="danger" className={style.btnMargin}>Info</Button>
                        <Button variant="danger">Add</Button>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { HeroCard };