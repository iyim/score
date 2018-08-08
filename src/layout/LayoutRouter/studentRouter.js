import React from 'react';
import {Route} from 'react-router-dom';
import StudentsList from '../../components/Students/index';
import StudentInfo from '../../components/StudentInfo/index';


const StudentRouter = ({match}) => {
    return(
        <div>
            <Route path={`${match.url}/:id`} component={StudentInfo}/>
            <Route path={match.url} exact component={StudentsList}/>
        </div>
    )
}

export default StudentRouter;