import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import './index.less'
const FormItem = Form.Item;
class NormalLoginForm extends Component {
    // 表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              const { dispatch } = this.props;
              dispatch({
                  type:'login/submit',
                  payload:{
                      formData:values,
                  }
              });
          }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='app-container'>
                <div className='app-content'>
                    <div className="app-logo">
                        <img src={require('../../static/logo.png')} alt='千羚'/>
                    </div>
                    <div className='app-name'>
                       欢迎回到千羚
                    </div>
                    <div className='app-form'>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: '请输入账号!'}]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号"/>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <span className="login-form-forgot">忘记密码？</span>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <Link to='/register'>立即注册</Link>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default connect((state)=>(state))(WrappedNormalLoginForm);
