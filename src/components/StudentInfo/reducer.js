import * as studentAction from './action-type';

const initState = {
    student: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case studentAction.STUDENT_INFO:
            const newState = JSON.parse(JSON.stringify(state));
            newState.student = action.data;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}