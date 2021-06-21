import { Form, Input, Button, Checkbox, Alert, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../Context/MyContext';
import Icon from '../Media/myIcon.png';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginForm = () => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [context, setContext] = useContext(UserContext);

    console.log({ context })
    const history = useHistory();
    const onFinish = (values) => {
        setIsLoading(true);
        console.log('Success:', values);
        axios.post('http://devjs01.shifa.com.pk:3000/api/login', values)
            .then((res) => {
                if (res.status === 200) {
                    console.log({ res });
                    localStorage.setItem('token', res?.data?.token?.accessToken);
                    setContext(res?.data?.token?.accessToken);
                    history.push('/patient-table');
                    setIsLoading(false);
                } else {
                    setError(true);
                    setIsLoading(false);
                }
            }).catch(error => { setError(true); setIsLoading(false) })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card style={{ width: 400, display: 'flex !important', padding: 10, margin: 'auto', marginTop: 100, justifyContent: 'center', alignItems: 'center', boxShadow: '10px 10px 5px grey', borderRadius: '5%' }}>
            <div style={{ marginTop: '-100px', marginLeft: '30%', marginBottom: 20 }}>
                <Avatar src={Icon} size={128}></Avatar>
            </div>
            <h3 style={{ margin: '20px' }}><strong>Shifa</strong> International Hospital Ltd.</h3>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >

                <Form.Item
                    // label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input suffix={<UserOutlined className="site-form-item-icon" />} style={{borderRadius: 15}} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    // label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        suffix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        style={{borderRadius: 15}}
                    />
                </Form.Item>
                {/* <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>


                </Form.Item> */}

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', borderRadius: '15px' }} className="login-form-button">
                        {isLoading ? 'Loading...' : 'Log in'}
                    </Button>
                </Form.Item>

                <div>
                    <a className="login-form-forgot" href="">
                        Forgot password
        </a>
                </div>

                {error && <div><span style={{ color: 'red' }}>Email or Password is Incorrect</span></div>}
            </Form>
        </Card>
    );
};

export default LoginForm;