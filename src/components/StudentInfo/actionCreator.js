
import * as action from './action-type';
import axios from 'axios';

export const getStudent = (id) => {
    return (dispatch) => {
        axios.get(`/score/persons/${id}`).then(res => {
            console.log(res.data.data);
            dispatch({
                type: action.STUDENT_INFO,
                data: res.data.data
            })
        })
    }
}