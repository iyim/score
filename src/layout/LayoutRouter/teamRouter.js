import React from 'react';
import {Route} from 'react-router-dom';
import TeamsList from '../../components/Teams/index';
import TeamInfo from '../../components/TeamInfo/index';

const TeamRouter = ({match}) => {
    return(
        <div>
            <Route path={`${match.path}/:id`} component={TeamInfo}/>
            <Route path={match.url} exact component={TeamsList}/>
        </div>
    )
}

export default TeamRouter;
