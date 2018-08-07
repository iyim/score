import React, {Component} from 'react';
import {connect} from "react-redux";
import {getStudent} from './actionCreator';


class StudentInfo extends Component {

    componentDidMount() {
        this.props.getStudentInfo(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.data)}
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