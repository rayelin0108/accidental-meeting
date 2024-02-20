import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Checkbox, Modal, DatePicker } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Description from '../Components/Description';
import './register.scss';

const Register = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const onChange = (e) => {
        setChecked(e.target.checked);
        showModal(); // 顯示彈窗
    };

    //檢查密碼是否相同
    const handleSubmit = (values) => {
        const { account, password, birthday } = values;
        localStorage.setItem('account', account);
        localStorage.setItem('password', password);
        localStorage.setItem('birthday', birthday);

        MySwal.fire({
            title: '註冊成功！',
            icon: 'success',
        });
        navigate('/login');
    };

    return (
        <>
            <Description title="註冊會員" />

            <section id="memberBox">
                <div className="register-box1">
                    <div className="register-h4">
                        <h4>會員註冊</h4>
                    </div>

                    <div className="register-contain">
                        {/* <small>「*」為必填</small> */}
                        <div className="member">
                            <Form
                                className="member_list"
                                labelCol={{
                                    xl: { span: 2 },
                                    md: { span: 4 },
                                }}
                                wrapperCol={{
                                    xl: { span: 10 },
                                    md: { span: 14 },
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                scrollToFirstError
                                size="large"
                                autoComplete="off"
                                onFinish={handleSubmit}

                            >
                                <Form.Item
                                    label="會員帳號"
                                    name="account"
                                    rules={[
                                        {
                                            required: true,
                                            message: '請填寫E-mail作為會員帳號',
                                        },
                                    ]}
                                >
                                    <Input type="email"
                                        placeholder='請填寫E-mail作為會員帳號' />
                                </Form.Item>

                                <Form.Item
                                    label="密　　碼"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '請設定密碼!',
                                        },
                                        {
                                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/,
                                            message: '密碼為8-12位的英數混合',
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        placeholder='請輸入8-12位英數混合密碼'
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
                                            message: '請再一次輸入密碼!',
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
                                        minLength={8}
                                        maxLength={12}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="生　　日"
                                    name="birthday"
                                    rules={[
                                        {
                                            required: true,
                                            message: '請選擇生日',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        placeholder="請選擇生日"
                                        style={{ width: '200px', }}
                                        onFinish={handleSubmit}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label=""
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) => value ? Promise.resolve() : Promise.reject('請同意會員及隱私條款'),
                                        },
                                    ]}

                                >
                                    <div id="test">
                                        <Checkbox checked={checked} onChange={onChange}>
                                            同意會員及隱私條款
                                        </Checkbox>
                                    </div>

                                </Form.Item>
                                <Modal
                                    title="偶遇人偶娃娃 會員及隱私權條款"
                                    open={modalVisible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                >
                                    <p>歡迎您成為偶遇人偶娃娃有限公司的會員。為了保護您的權益，請仔細閱讀以下的會員及隱私權條款。</p>
                                    <p>當您註冊成為我們的會員，即表示您同意遵守這些條款。</p>
                                    <br />
                                    <h4>會員條款</h4>
                                    <p>1.　會員註冊： 您必須提供真實、準確且完整的個人資訊進行註冊，並負責隨時更新您的會員資料以確保其正確性。</p>
                                    <p>2.　會員帳戶安全： 您需對自己的帳戶和密碼負責。請不要將帳戶信息透露給他人，並定期修改密碼以確保帳戶安全。</p>
                                    <p>3.　會員權益： 成為偶遇的會員，您將享有專屬優惠、促銷資訊、以及定期更新的商品消息等會員權益。</p>
                                    <p>4.　會員責任： 會員應善盡對其帳戶的監督和管理責任，如有任何異常情況應立即通知我們。</p>
                                    <br />
                                    <h4>隱私權條款</h4>
                                    <p>1.　個人資訊收集： 我們會收集您的一些個人資訊，包括但不限於姓名、地址、電子郵件地址、電話號碼等，用於處理訂單、提供客戶服務等。</p>
                                    <p>2.　資訊保密： 我們承諾保護您的個人資訊安全，不會將其提供給第三方，除非經過您的明確同意或法律要求。</p>
                                    <p>3.　Cookie 使用： 我們可能使用Cookie技術，以提高網站的功能性，並收集有關訪問者的信息。您可以隨時通過瀏覽器設置選擇拒絕Cookie。</p>
                                    <p>4.　隱私權選擇： 您有權選擇是否提供個人資訊。如果您選擇不提供某些信息，可能無法使用網站的某些功能。</p>
                                    <p>5.　安全措施： 我們將採取合理的技術和組織措施，以確保您的個人資訊的安全性。</p>
                                    <p>6.　隱私權政策的修改： 我們保留修改隱私權政策的權利，任何修改將在網站上公布，請您定期查看。</p>
                                    <br />
                                    <p>透過註冊成為我們的會員，您表示您已閱讀、了解並同意遵守上述條款。</p>
                                    <p>如果您有任何疑問或疑慮，請隨時與我們聯繫。感謝您對偶遇人偶娃娃有限公司的支持！</p>
                                    <br />

                                </Modal>
                                <div className="btn">
                                    <input type="reset" className='form-btn' name="member_reset" value="重&nbsp;&nbsp;填" />
                                    <button htmlType="submit" className='form-btn' name="member_submit" id="member_submit">送&nbsp;&nbsp;出</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
