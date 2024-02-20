import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../Pages/forgot-pw.scss';
import loginImg from '../assets/login/logo-login.png';

const Forgot_pw = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const onFinish = (values) => {
        MySwal.fire({
            icon: 'info',
            html: `<a href="#">請至E-mail收取重設密碼連結</a>`,
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/reset-pw');
            }
        });
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className="forgot_pw">
            <div className='forgot_pwBox'>
                <div className="loginImg">
                    <img src={loginImg} alt="logo" className='loginImg' />
                </div>

                <div className="member_forgot_pw">
                    <h3>忘記密碼</h3>
                    <div className="emailBox">
                        <Form
                            name="basic"
                            wrapperCol={{
                                // offset: 4,
                                span: 24,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="帳號"
                                rules={[
                                    {
                                        required: true,
                                        message: '請輸入註冊的E-mail',
                                    },
                                ]}
                            >
                                <Input
                                    type="email"
                                    placeholder='請輸入註冊的E-mail'
                                />
                            </Form.Item>

                            <div className="forgot_pw-btn">
                                <button htmlType="submit" name="submit" id="forgotPw-submit">送&nbsp;&nbsp;出</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Forgot_pw;