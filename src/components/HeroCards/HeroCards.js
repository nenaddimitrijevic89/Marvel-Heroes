import React from 'react';
import { Row } from 'react-bootstrap';
import { HeroCard } from '../HeroCard/HeroCard';

const HeroCards = ({ heroes }) => {
    return (
        <Row>
            {heroes.map(hero => <HeroCard avatar={hero.avatar} name={hero.name} />)}
        </Row>
    )
}

export { HeroCards }