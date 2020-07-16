import React from 'react';
import { Row } from 'react-bootstrap';
import { MyTeamCard } from './MyTeamCard/MyTeamCard';

const MyTeam = ({ myTeam }) => {
    return (
        <>
            {myTeam.map(hero => <MyTeamCard hero={hero} />)}
        </>
    )
}

export { MyTeam }