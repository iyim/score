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
                this.props.addScore(values);
                console.log(values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log(this.props.record.name);
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                {/*<FormItem>*/}
                    {/*{getFieldDecorator('name', {*/}
                    {/*rules: [{required: true, message: '队伍名称!'}],*/}
                    {/*initialValue: this.props.record.name*/}
                    {/*}*/}
                    {/*)(*/}
                    <Input value={this.props.record.name} readOnly prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="队伍名称"/>
                    {/*)}*/}
                {/*</FormItem>*/}
                <FormItem>
                    {getFieldDecorator('team', {
                            rules: [{required: true}],
                            initialValue: this.props.record.key
                        }
                    )(
                        <Input type="hidden"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: '请输入活动名称'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="活动名称"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('score', {
                        rules: [{required: true, message: '请输入得分分数'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} type='number'
                               placeholder="队伍得分分数"/>
                    )}
                </FormItem>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    提交
                </Button>
            </Form>
        );
    }
}

const AddScoreForm = Form.create()(NormalLoginForm);
export default AddScoreForm;