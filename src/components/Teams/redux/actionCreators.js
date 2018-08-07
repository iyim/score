import * as action from './action-type';
import axios from 'axios';

export const initTeamData = (data) => ({
    type: action.INIT_TEAM_DATA,
    data
})

export const addTeam = (data) => ({
    type: action.ADD_TEAM,
    data
})

export const addScore = (data) => ({
    type: action.ADD_SCORE,
    data
})

export const getInitTeamData = () => {
    console.log("getInitTeamData");
    return (dispatch) => {
        axios.get('/score/teams').then((res) => {
            console.log(res.data);
            dispatch(initTeamData(res.data.data));
        })
    }
}

export const addTeamAction = (value) => {
    return (dispatch) => {
        axios({
            url: '/score/teams',
            method: 'post',
            data: value,

        }).then((res) => {
            console.log("addTeamAction");
            console.log(res.data);
            dispatch(addTeam(res.data.data))
        })
    }
}


export const addTeamScoreAction = (value) => {
    console.log(JSON.stringify(value));
    let params = new URLSearchParams();
    params.append('name', value.name);
    params.append('score', value.score);
    params.append('team', value.team);
    return (dispatch) => {
        axios.post(`/score/teams/${value.team}/scores`, params).then((res) => {
            console.log("addTeamScoreAction");
            console.log(res.data);
            dispatch(addScore(res.data.data))
        })
    }
}