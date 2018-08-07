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
        case studentAction.ADD_STUDENT:
            const newState1 = JSON.parse(JSON.stringify(state));
            newState1.students.push(action.data);
            return newState1;
        default:
            return state;
    }
}