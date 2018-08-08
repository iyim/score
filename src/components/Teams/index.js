import React, {Component} from "react";

import {Table, Button, Modal} from 'antd';
import {getInitTeamData, addTeamAction, addTeamScoreAction} from './redux/actionCreators'
import {connect} from 'react-redux';
import AddTeamForm from '../AddTeamForm/index';
import AddScoreForm from '../AddScoreForm/index';
import './index.css'


class TeamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedInfo: null,
            teamModalVisible: false,
            scoreModalVisible: false
        };
        this.currentRecord = null;
    }


    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    clearFilters = () => {
        // this.setState({filteredInfo: null});
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
                columnKey: 'score',
            },
        });
    }

    showModal = (e) => {
        console.log(e);
        this.setState({
            teamModalVisible: true,
        });

    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            teamModalVisible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            teamModalVisible: false,
        });

    }

    showScoreModal = (record) => {
        this.setState({
            scoreModalVisible: true,
        });
        this.currentRecord = record;
        console.log(this.currentRecord);
    }

    handleScoreOk = (e) => {
        console.log(e);
        this.setState({
            scoreModalVisible: false,
        });
    }


    handleScoreModalCancel = (e) => {
        console.log("handleScoreModalCancel");
        this.setState({
            scoreModalVisible: false,
        });
        // this.currentRecord = null;
    }


    componentDidMount() {
        this.props.getTeamData();
    }

    render() {
        console.log("render");
        let {sortedInfo} = this.state;
        sortedInfo = sortedInfo || {};
        const columns = [{
            title: '队名',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
            title: '口号',
            dataIndex: 'slogan',
            key: 'slogan',
        }, {
            title: '得分',
            dataIndex: 'score',
            key: 'score',

            sorter: (a, b) => a.score - b.score,
            sortOrder: sortedInfo.columnKey === 'score' && sortedInfo.order,
        }, {
            title: '加分',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button onClick={() => {
                this.showScoreModal(record)
            }} type="primary" shape="circle" icon="plus"/>
        }];
        return (
            <div>
                <div className="table-operations">
                    <Button onClick={this.setAgeSort}>排序</Button>
                    <Button onClick={this.clearAll}>清除排序</Button>
                    <Button onClick={this.showModal} type="primary" style={{float: "right"}}>添加队伍</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.props.data}
                    onChange={this.handleChange}
                    onRow={
                        (record) => {
                            return{
                                onClick: (e)=>{
                                    e.preventDefault();
                                    console.log(e.target);
                                    if (!(e.target.localName === 'button')){
                                        this.props.history.push(`/score/teams/${record.key}`)
                                    }
                                }
                            }
                        }
                    }
                />
                <Modal
                    title="添加队伍"
                    visible={this.state.teamModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <AddTeamForm offModal={this.handleOk} addTeam={this.props.addTeam}/>
                </Modal>

                <Modal
                    title="加分"
                    visible={this.state.scoreModalVisible}
                    onCancel={this.handleScoreModalCancel}
                    footer={null}
                >
                    <AddScoreForm offModal={this.handleScoreOk} record={this.currentRecord}
                                  addScore={this.props.addScore}/>
                </Modal>

            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        data: state.team.teamData
    }
};

const mapDisPatchToProps = (dispatch) => {
    console.log("mapDisPatchToProps");
    return {
        getTeamData() {
            console.log("getTeamData");
            const action = getInitTeamData();
            dispatch(action);
        },

        addTeam(value) {
            const action = addTeamAction(value);
            dispatch(action);
        },

        addScore(value) {
            const action = addTeamScoreAction(value);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TeamsList);