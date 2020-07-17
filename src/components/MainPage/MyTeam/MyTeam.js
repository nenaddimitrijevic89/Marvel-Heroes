import React from 'react';
import { MyTeamCard } from './MyTeamCard/MyTeamCard';

const MyTeam = ({ myTeam }) => {
    return (
        <>
            {myTeam.map(hero => <MyTeamCard hero={hero} key={hero.id} />)}
        </>
    )
}

export { MyTeam }