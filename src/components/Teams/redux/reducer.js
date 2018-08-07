import * as teamAction from './action-type';

const initState = {
    teamData: []
}

export default (state = initState, action) => {
    console.log("reducer");
    switch (action.type) {
        case teamAction.INIT_TEAM_DATA:
            const newState = JSON.parse(JSON.stringify(state));
            newState.teamData = action.data;
            return newState;
        case teamAction.ADD_TEAM:
            const newState1 = JSON.parse(JSON.stringify(state));
            newState1.teamData.push(action.data);
            return newState1;
        case teamAction.ADD_SCORE:
            const newState2 = JSON.parse(JSON.stringify(state));

            for (let i = 0; i < newState2.teamData.length; i++){
                let item = newState2.teamData[i];
                if (item.key === action.data.key){
                    newState2.teamData[i] = action.data;
                    break;
                }
            }
            return newState2;
        default:
            return state;
    }
}