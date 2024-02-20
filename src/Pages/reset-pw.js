import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../Pages/reset-pw.scss';
import loginImg from '../assets/login/logo-login.png';


const ResetPw = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (e) => {
        if (password !== password2) {
            MySwal.fire({
                title: '錯誤',
                text: '兩次輸入的密碼不一致，請重新輸入',
                icon: 'error',
            });
        } else {
            MySwal.fire({
                title: '密碼更改成功！',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    };


    return (
        <section id="reset_pw">
            <div className='reset_pwBox'>
                <div className="loginImg">
                    <img src={loginImg} alt="logo" className='loginImg' />
                </div>
                <div className="member_reset_pw">
                    <h3>重設密碼</h3>
                    <div className="pwBox">
                        <Form
                            className="member_list"
                            onFinish={handleSubmit}
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            scrollToFirstError
                            labelAlign="left"
                            size="large"
                            block="true"
                            autoComplete="off"
                        >
                            <Form.Item
                                label="密&nbsp;&nbsp;碼"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '請輸入8-12位英數混合密碼!',
                                    },
                                    {
                                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/,
                                        message: '密碼須8-12位的英數混合',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder='請輸入8-12位英數混合密碼!'
                                    value={password}
                                    minLength={8}
                                    maxLength={12}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Item>

                            <Form.Item
                                label="確認密碼"
                                name="password2"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: '請再次輸入8-12位英數混合密碼!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('輸入密碼不一致!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder='請再次輸入8-12位英數混合密碼'
                                    value={password2}
                                    minLength={8}
                                    maxLength={12}
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                            </Form.Item>
                            <div className="register-btn">
                                <button htmlType="submit" name="register" id="register">
                                    重設密碼
                                </button>
                            </div>
                        </Form>
                    </div>


                </div>
            </div>
        </section>
    );
};


export default ResetPw;
