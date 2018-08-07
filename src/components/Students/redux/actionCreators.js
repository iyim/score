import * as action from './action-type';
import axios from 'axios';

export const initStudentData = (data) => ({
    type: action.INIT_STUDENT_DATA,
    data
})
export const addStudent = (data) => ({
    type: action.ADD_STUDENT,
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

export const addStudentAction = (value) => {
    return (dispatch) => {
        axios({
            url: '/score/persons',
            method: 'post',
            data: value,

        }).then((res) => {
            console.log("addStudentAction");
            console.log(res.data);
            dispatch(addStudent(res.data.data))
        })
    }
}