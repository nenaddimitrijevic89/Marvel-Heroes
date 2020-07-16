import React from 'react';
import { Col } from 'react-bootstrap';
import style from './MyTeamCard.module.css';

const MyTeamCard = ({ hero }) => {
    return (
        <Col>
            <div className={style.teamFlex}>
                <img src={hero.teamImage} />
                <p>{hero.name}</p>
            </div>
        </Col>
    )
}

export { MyTeamCard };