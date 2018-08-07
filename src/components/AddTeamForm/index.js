import React from 'react'
import {Button, Form, Icon, Input} from 'antd';
import './index.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.offModal();
                this.props.addTeam(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入队伍名称!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="队伍名称" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('slogan', {
                        rules: [{ required: true, message: '请输入队伍口号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="队伍口号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('score', {
                        // rules: [{ required: true, message: '请输入队伍初始分数' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type='number' placeholder="队伍初始分数" />
                    )}
                </FormItem>
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
                <Button type="primary" htmlType="submit" className="login-form-button">
                    提交
                </Button>
            </Form>
        );
    }
}

const AddTeamForm = Form.create()(NormalLoginForm);
export default AddTeamForm;