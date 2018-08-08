import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTeam,getTeamStudent} from './actionCreator';
import {Card, List} from 'antd';


class TeamInfo extends Component {

    componentDidMount() {
        this.props.getTeamInfo(this.props.match.params.id);
        this.props.getTeamStudents(this.props.match.params.id);
    }
    render() {
        console.log(this.props.data);
        return (
            <div>
                <Card title={this.props.data.team.name} bordered={false}>
                    <p>队名：{this.props.data.team.name}</p>
                    <p>口号：{this.props.data.team.slogan}</p>
                    <p>得分：{this.props.data.team.score}</p>
                </Card>
                <Card title="队员" bordered={false}>
                    <List
                        dataSource={this.props.data.students}
                        renderItem={item => (<List.Item>{item.name}</List.Item>)}
                    />
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.teamInfo
    }
};
const mapDisPatchToProps = (dispatch) => {
    return {
        getTeamInfo(id) {
            const action = getTeam(id);
            dispatch(action);
        },
        getTeamStudents(id){
            const action = getTeamStudent(id);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TeamInfo);