import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import useInputValue from "../hooks/useInputValue";
import { setAccessToken, setRefreshToken } from "../utilits/localStorage";
import axios from "axios";
function SignIn() {
    const [username, handlNameChange] = useInputValue("");
    const [password, handlePassword] = useInputValue("");
    const navigate = useNavigate();
    const onFinish = (values) => {
        axios.post("http://188.225.31.249:8000/api/v1/login/",{
         username,
         password
        }).then((res)=>{
            console.log(res,"login",res.data.refresh,res.data.access);
            document.querySelector(".answer").innerText="";
            setAccessToken(res.data.access);
            setRefreshToken(res.data.refresh);
            navigate('/')
        }).catch(()=>{
            console.log("Bunday loginli foydalanuvchi mavjud emas");
            document.querySelector(".answer").innerText="Bunday loginli foydalanuvchi mavjud emas";
        })
        console.log('Received values of form: ', values);
    };
    return <div className="register-page">
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}>
                <Form.Item><p className="answer"></p></Form.Item>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!'
                    }
                ]}
            >
 <Input prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username" onChange={handlNameChange}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password" onChange={handlePassword}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or   <Link to='/sign-up'>register now!</Link>
            </Form.Item>
        </Form>
    </div>

}
export default SignIn