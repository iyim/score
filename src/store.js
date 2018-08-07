import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import team from './components/Teams/redux/reducer';
import student from './components/Students/redux/reducer';
import studentInfo from './components/StudentInfo/reducer';
import teamInfo from './components/TeamInfo/reducer';

const store = createStore(
    combineReducers(
        {team, student, studentInfo, teamInfo}
    ),
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store;