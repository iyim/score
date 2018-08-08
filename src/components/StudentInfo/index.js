import React, {Component} from 'react';
import {connect} from "react-redux";
import {getStudent} from './actionCreator';
import {Card} from 'antd';


class StudentInfo extends Component {

    componentDidMount() {
        this.props.getStudentInfo(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Card title={this.props.data.name} bordered={false}>
                    <p>姓名：{this.props.data.name}</p>
                    <p>年龄：{this.props.data.age}</p>
                    <p>所在队伍：{this.props.data.team}</p>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.studentInfo.student
    }
};
const mapDisPatchToProps = (dispatch) => {
    return {
        getStudentInfo(id) {
            const action = getStudent(id);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(StudentInfo);