import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Radio, Select, Space } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Description from '../Components/Description';
import AvatarUpload from '../Components/AvatarUpload';
import './myAccount.scss';


const account = localStorage.getItem('account');
let birthdayString = new Date(localStorage.getItem('birthday'))
let birthday = `${birthdayString.getFullYear()}/${birthdayString.getMonth() + 1}/${birthdayString.getDay()}`;



const MyAccount = () => {

    const { Option } = Select;
    const TaiwanCounties = [
        "基隆市", "臺北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "臺中市", "彰化縣", "南投縣",
        "雲林縣", "嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣"
    ];

    const MySwal = withReactContent(Swal);

    const [userInfo, setUserInfo] = useState(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        return storedUserInfo ? JSON.parse(storedUserInfo) : null;
    });
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, [userInfo, form]);

    const onFinish = (values) => {
        setUserInfo(values);
        localStorage.setItem('userInfo', JSON.stringify(values));
        MySwal.fire({
            title: '資料修改成功！',
            icon: 'success',
        });
    };


    //登出
    useEffect(() => {
        let userInfoJson = localStorage.getItem('userInfo');
        if (userInfoJson) {
            setUserInfo(JSON.parse(userInfoJson))
            form.setFieldsValue(JSON.parse(userInfoJson));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('userInfo');
        window.location.href = '/'
    }


    return (
        <>
            <Description title="會員專區" />

            <section className='accountBox'>

                {/* 電腦版 */}
                <div className="account-box1">
                    <div className="account-box1-photo">
                        <AvatarUpload />
                    </div>
                    <div className="account-box1-list_bar">
                        <Link to="/my-collection">
                            <div className="collection_btn">
                                追蹤收藏
                            </div>
                        </Link>
                        <Link to="/my-orders">
                            <div className="orders_btn">
                                購買清單
                            </div>
                        </Link>
                        <Link to="/my-account">
                            <div className="account_btn">
                                會員專區
                            </div>
                        </Link>
                        <div className="logOut_btn" onClick={() => logout()}>登出</div>
                    </div>
                </div>


                {/* 手機板 */}
                <div className="account-box1-phone">
                    <div className="account-box1-photo">
                        <AvatarUpload />
                        <div className="logOut_btn" onClick={() => logout()}>登出
                        </div>
                    </div>

                    <div className="account-box1-list_bar">
                        <Link to="/my-collection">
                            <div className="collection_btn">
                                追蹤收藏
                            </div>
                        </Link>
                        <Link to="/my-orders">
                            <div className="orders_btn">
                                購買清單
                            </div>
                        </Link>
                        <Link to="/my-account">
                            <div className="account_btn">
                                會員專區
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="account-box2">
                    <div className="member_title">
                        <h3>會員基本資料</h3>
                    </div>
                    <div className="member_list">
                        <Form
                            form={form}
                            className='member_form'
                            initialValues={userInfo}
                            onFinish={onFinish}>

                            <Form.Item
                                label="會員帳號"
                                name="account"
                            >
                                <Input
                                    disabled
                                />
                            </Form.Item>

                            <Form.Item
                                label="生　　日"
                                name="birthday"
                            >
                                <Input
                                    disabled
                                />
                            </Form.Item>

                            <Form.Item
                                name="userName"
                                label="姓　　名"
                                rules={[
                                    {
                                        message: '請填寫姓名',
                                        whitespace: false, //禁止空白
                                    },
                                ]}
                            >
                                <Input placeholder='請填寫姓名'
                                />
                            </Form.Item>

                            <Form.Item
                                name="phoneNumber"
                                label="手　　機"
                                rules={[
                                    {
                                        message: '請輸入手機號碼',
                                        whitespace: false, //禁止空白
                                    },
                                ]}
                            >
                                <Input
                                    placeholder='請填寫手機號碼'
                                    maxLength={10}
                                />
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                label="性　　別">
                                <Radio.Group>
                                    <Radio value={'male'}>男</Radio>
                                    <Radio value={'female'}>女</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                className='address'
                                label="地　　址"
                                labelAlign="left">
                                <Space.Compact
                                >
                                    <Form.Item
                                        name="city"
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: '請選擇收件縣市',
                                                whitespace: false, //禁止空白
                                            },
                                        ]}
                                    >
                                        <Select style={{
                                            width: '100px',
                                            margin: '0 8px 0 0',
                                        }} placeholder="城市"
                                            options={TaiwanCounties.map(county => ({ value: county, label: county }))}
                                        >
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="address">
                                        <Input
                                            placeholder="地址"
                                        />
                                    </Form.Item>
                                </Space.Compact>
                                <span className='addText'>
                                    (預設為發票收件地址)
                                </span>
                            </Form.Item>

                            <Form.Item
                                name="e-invoice"
                                label="手機載具"
                                rules={[
                                    {
                                        message: '電子發票載具',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder='請填寫手機載具'
                                />
                            </Form.Item>

                            <Form.Item
                                name="resetPw"
                                label="重設密碼"
                                type="resetPw"
                            >
                                <Link to="/forgot_pw" target="_blank">設定新密碼</Link>
                            </Form.Item>

                            <div className="btn">
                                <button type="submit" name="member_submit" id="member_submit">修改完成</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section >
        </>
    );
};

export default MyAccount;