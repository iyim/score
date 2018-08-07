import React, {Component} from "react";
import {Table, Button, Modal} from 'antd';
import {connect} from 'react-redux';
import './index.css';
import {getInitStudents, addStudentAction} from "./redux/actionCreators";
import AddStudentForm from '../AddStudentForm/index';

class StudentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedInfo: null,
            visible:false
        };
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            sortedInfo: sorter,
        });
    }

    clearAll = () => {
        this.setState({
            sortedInfo: null,
        });
    }

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    }

    componentDidMount(){
        this.props.getStudentList();
    }

    showModal = () => {
        this.setState({
            visible: true,
        });

    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });

    }

    render() {
        console.log("render");
        let {sortedInfo} = this.state;
        sortedInfo = sortedInfo || {};
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
            title: '所在队伍',
            dataIndex: 'team',
            key: 'team',
        }];
        return (
            <div>
                <div className="table-operations">
                    <Button onClick={this.setAgeSort}>排序</Button>
                    <Button onClick={this.clearAll}>清除排序</Button>
                    <Button onClick={this.showModal} type="primary" style={{float: "right"}}>添加学生</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.props.data}
                    onChange={this.handleChange}
                    onRow={
                        (record) => {
                            return{
                                onClick: ()=>{
                                    console.log(record.key);
                                    this.props.history.push(`/score/students/${record.key}`)
                                }
                            }
                        }
                    }
                />

                <Modal
                    title="添加学生"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <AddStudentForm offModal={this.handleOk} addStudent={this.props.addStudent}/>
                </Modal>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.student.students
    }
};

const mapDisPatchToProps = (dispatch) => {
    console.log("mapDisPatchToProps");
    return {
        getStudentList() {
            console.log("getStudentList");
            const action = getInitStudents();
            dispatch(action);
        },
        addStudent(value){
            const action = addStudentAction(value);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(StudentsList);
