import React from 'react'
import {Button, Form, Icon, Input, TreeSelect} from 'antd';
import './index.css';
import axios from 'axios';

const FormItem = Form.Item;
const TreeNode = TreeSelect.TreeNode;

class NormalLoginForm extends React.Component {

    state = {
        value: undefined,
        teams: []
    }
    onChange = (value) => {
        console.log(value);
        this.setState({value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.offModal();
                this.props.addStudent(values);
            }
        });
    }

    componentDidMount() {
        axios.get('/score/teams').then((res) => {
            this.setState({
                teams: res.data.data
            })
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: '请输入学生姓名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="学生姓名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('age', {
                        rules: [{required: true, message: '请输入学生年龄'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} type='number'
                               placeholder="学生年龄"/>
                    )}
                </FormItem>
                {/* <FormItem>
                    {getFieldDecorator('score', {
                        // rules: [{ required: true, message: '请输入队伍初始分数' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type='number' placeholder="队伍初始分数" />
                    )}
                </FormItem> */}

                {/*<FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>*/}
                {/*<FormItem>
                    {getFieldDecorator('team', {
                            rules: [{required: true}],
                            initialValue: this.state.value
                        }
                    )(
                        <Input type="hidden"/>
                    )}
                </FormItem>*/}
                <FormItem>
                    {getFieldDecorator('team', {
                            rules: [{required: true}],
                            initialValue: this.state.value
                        }
                    )(
                        <TreeSelect
                            showSearch
                            style={{width: 300}}
                            value={this.state.value}
                            dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                            placeholder="选择队伍"
                            allowClear
                            treeDefaultExpandAll
                            onChange={this.onChange}
                        >
                            {this.state.teams.map((item) => {
                                return <TreeNode value={item.key} title={item.name} key={item.key}/>
                            })}

                        </TreeSelect>
                    )}
                </FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    提交
                </Button>
            </Form>
        );
    }
}

const AddStudentForm = Form.create()(NormalLoginForm);
export default AddStudentForm;