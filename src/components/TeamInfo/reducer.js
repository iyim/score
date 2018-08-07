import * as teamAction from './action-type';

const initState = {
    team: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case teamAction.TEAM_INFO:
            const newState = JSON.parse(JSON.stringify(state));
            newState.team = action.data;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}