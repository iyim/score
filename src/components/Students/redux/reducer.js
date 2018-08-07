import * as studentAction from './action-type';

const initState = {
    students: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case studentAction.INIT_STUDENT_DATA:
            const newState = JSON.parse(JSON.stringify(state));
            newState.students = action.data;
            return newState;
        default:
            return state;
    }
}