import * as action from './action-type';
import axios from 'axios';

export const initStudentData = (data) => ({
    type: action.INIT_STUDENT_DATA,
    data
})

export const getInitStudents = () => {
    return (dispatch) => {
        axios.get('/score/persons/').then((res) => {
            console.log(res.data.data);
            dispatch(initStudentData(res.data.data));
        }).catch(err => {

        })
    }
}