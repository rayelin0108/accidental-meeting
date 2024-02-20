import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../Pages/Login.scss';
import loginImg from '../assets/login/logo-login.png';

const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const MySwal = withReactContent(Swal);
    const handleSubmit = () => {
        const Account = localStorage.getItem('account');
        const Password = localStorage.getItem('password');

        if (account != 'test@gmail.com' || password != 'aaa12345') {

            MySwal.fire({
                text: '帳號或密碼錯誤',
                icon: 'error',
            });

            return;
        }

        MySwal.fire({
            text: '登入成功',
            icon: 'success',
        }).then((result) => {
            // 勾選記住帳號
            if (Account) {
                localStorage.setItem('account', account);
            }

            //組後端來的資料當登入憑證
            let userInfo = { name: 'test', token: 'abcdefg', expiredTime: new Date().setDate(new Date().getDate() + 1) };
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            window.location.href = '/'
        });

    };

    const loginBtnRef = useRef(null);


    return (
        <section id="login">
            <div className='loginBox'>
                <div className="loginImg">
                    <img src={loginImg} alt="logo" />
                </div>
                <div className="member_login">
                    <h3>會員登入</h3>
                    <div className="login-account">
                        <Form
                            name="basic"
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 20,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={handleSubmit}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    loginBtnRef.current.click(); // 模擬點擊登入按鈕
                                }
                            }}                        >
                            <Form.Item
                                label="帳號"
                                name="帳號"
                                rules={[
                                    {
                                        required: true,
                                        message: '請輸入帳號',
                                    },
                                ]}
                            >
                                <Input
                                    type="email"
                                    placeholder='請輸入E-mail作為會員帳號'
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                label="密碼"
                                name="密碼"
                                rules={[
                                    {
                                        required: true,
                                        message: '請輸入密碼',
                                    },
                                    {
                                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/,
                                        message: '密碼為8-12位的英數混合',
                                    },
                                ]}
                            >
                                <Input.Password
                                    size="large"
                                    placeholder='請輸入8-12位英數混合密碼'
                                    value={password}
                                    minLength={8}
                                    maxLength={12}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Item>

                            <Form.Item
                                name="記住帳號"
                                valuePropName="checked"
                                wrapperCol={{

                                    xl: {
                                        span: 22,
                                        offset: 2
                                    },
                                    xs: {
                                        span: 22,
                                        offset: 2
                                    },
                                }}

                            >
                                <div className='check_pw'>
                                    <div className='member-id'>
                                        <Checkbox>記住帳號</Checkbox>
                                    </div>
                                    <div>
                                        <Link to="/forgot-pw">
                                            <p>忘記密碼</p>
                                        </Link>
                                    </div>
                                </div>
                            </Form.Item>

                            <div className="login-btn">
                                <Link to="/register">
                                    <button htmlType="button" className='form-btn' name="member_submit" >註&nbsp;&nbsp;冊</button>
                                </Link>
                                <button ref={loginBtnRef} className='form-btn' name="member_submit" id="member_submit">登&nbsp;&nbsp;入</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Login;