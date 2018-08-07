
import * as action from './action-type';
import axios from 'axios';

export const getTeam = (id) => {
    return (dispatch) => {
        axios.get(`/score/teams/${id}`).then(res => {
            console.log(res.data.data);
            dispatch({
                type: action.TEAM_INFO,
                data: res.data.data
            })
        })
    }
}