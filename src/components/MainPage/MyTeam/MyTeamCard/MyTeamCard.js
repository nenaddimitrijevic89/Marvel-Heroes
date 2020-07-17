import React from 'react';
import style from './MyTeamCard.module.css';
import { Row, Col } from 'react-bootstrap';

const MyTeamCard = ({ hero }) => {
    return (
        <Row>
            <Col className={style.teamFlex}>
                <img src={hero.teamImage} />
                <p className={style.teamName}>{hero.name}</p>
            </Col>
        </Row>
    )
}

export { MyTeamCard };