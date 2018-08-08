import * as teamAction from './action-type';

const initState = {
    team: {},
    students: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case teamAction.TEAM_INFO:
            const newState = JSON.parse(JSON.stringify(state));
            newState.team = action.data;
            console.log(newState);
            return newState;
        case teamAction.TEAM_STUDENTS:
            const newState1 = JSON.parse(JSON.stringify(state));
            newState1.students = action.data;
            console.log(newState1);
            return newState1;
        default:
            return state;
    }
}