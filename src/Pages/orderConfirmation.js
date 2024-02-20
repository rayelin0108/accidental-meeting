import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Space, Radio } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './orderConfirmation.scss';
import dollsImg1 from '../assets/dolls/p-1-popo.jpg';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: { xs: { span: 24 }, sm: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
    };

    const TaiwanCounties = [
        "基隆市", "臺北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "臺中市", "彰化縣", "南投縣",
        "雲林縣", "嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣",
    ];


    // 小計&運費&總額
    const [amount, setAmount] = useState(0);
    const [fee, setFee] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    // 計算小計
    const recalculateCart = (updatedCart) => {
        let subtotal = 0;
        updatedCart.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        setAmount(subtotal);

        // 運費判斷
        let fee = subtotal > 10000 ? 0 : 120;
        setFee(fee);
        setTotalAmount(subtotal + fee)
    };

    // 格式化數字
    const formatNumberWithCommas = (number) => {
        const numString = number.toString();
        return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 獲取本地存儲的資料
    let prodsJson = localStorage.getItem('prods');
    let prods = JSON.parse(prodsJson);
    const [cartItems, setCartItems] = useState([...prods]);
    const [recipientInfo, setRecipientInfo] = useState({
    });

    useEffect(() => {
        // 初始計算購物車
        recalculateCart(cartItems);
    }, [cartItems]); // 當 cartItems 發生變化時執行 useEffect

    // 付款方式
    const [radiovalue, setRadiovalue] = useState(() => {
        const storedPaymentMethod = localStorage.getItem('paymentMethod');
        return storedPaymentMethod || '';
    });

    useEffect(() => {
        const prodsJson = localStorage.getItem('prods');
        const recipientInfoJson = localStorage.getItem('recipientInfo');
        const prods = JSON.parse(prodsJson);
        const savedPaymentMethod = localStorage.getItem('paymentMethod');
        if (prods) {
            setCartItems(prods);
        }
        if (recipientInfoJson) {
            const recipientInfo = JSON.parse(recipientInfoJson);
            form.setFieldsValue(recipientInfo)
        }
        if (savedPaymentMethod) {
            setRadiovalue(savedPaymentMethod);
        }
    }, []);

    const invoiceTypeChange = (e) => {
        setRecipientInfo(info => ({
            ...info,
            invoiceType: e.target.value
        }));
    }

    // 儲存收件人資訊到本地存儲
    const saveRecipientInfoToLocalStorage = (values) => {
        localStorage.setItem('recipientInfo', JSON.stringify(values));
    };

    // 更新付款方式到本地存儲
    const handlePaymentMethodChange = (e) => {
        const value = e.target.value;
        setRadiovalue(value);
        localStorage.setItem('paymentMethod', value);
    };

    // 儲存商品並轉向結帳頁面
    const saveProdsAndRedirect = () => {
        localStorage.setItem('prods', JSON.stringify(cartItems));
        navigate('/order-established');
    };

    return (
        <>
            <div className="confirmationBox">
                <div>
                    {/* <!-- 流程表 --> */}
                    <div id="progressBar">
                        <ul>
                            <li className="active">
                                <div className="no">
                                    <span className='text'>1</span>
                                </div>
                                <div className="step-name">購物車</div>
                            </li>
                            <li><div className="no"> <span className='text'>2</span></div>
                                <div className="step-name">填寫資料</div></li>
                            <li><div className="no3"> <span className='text'>3</span></div>
                                <div className="step-name">確認訂單</div></li>
                            <li><div className="no"> <span className='text'>4</span></div>
                                <div className="step-name">完成</div></li>
                        </ul>
                        <div className="process-line"></div>
                    </div>
                </div>
                {/* 商品清單列 */}
                <div className="shopping-list">
                    <div className="cat-quantity">
                        購物車 ( {cartItems.length} 件商品)
                    </div>

                    {/* 電腦版 */}
                    <table id="prod-table">
                        <thead>
                            <tr className='head'>
                                <th className="head-img"></th>
                                <th className="head-title">商品名稱</th>
                                <th className="head-specifications">規格</th>
                                <th className="head-Makeup">妝面</th>
                                <th className="head-price">單價</th>
                                <th className="head-quantity">數量</th>
                                <th className="head-line-price">小計</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems.map(item => (
                                <tr className='content'>
                                    <td className="content-img">
                                        <div className="prod-img">
                                            <img src={dollsImg1} alt={item.name} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="content-name">
                                            {item.name}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="content-specifications">
                                            {item.specifications}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="content-Makeup">
                                            {item.productMakeup}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="content-price">{item.price.toLocaleString()}</div>
                                    </td>
                                    <td>
                                        {/* 數量 */}
                                        <div className="Quantity">{item.quantity}</div>
                                    </td>
                                    <td>
                                        {/* 小計 */}
                                        <div className="content-linePrice">{(item.price * item.quantity).toLocaleString()}</div>
                                    </td>
                                </tr>
                            ))}

                            <tr className='totals2'>
                                <td colSpan={8} className='td-bg1'>
                                    <div className='totals-div'>
                                        <div className="totals-value2">
                                            {formatNumberWithCommas(amount)}
                                        </div>
                                        <div className='fee'> {fee}</div>
                                        <div className='totals-chk' style={{ color: 'var(--red)' }}>{formatNumberWithCommas(totalAmount)}</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    {/* 手機板 */}
                    <table id="prod-phone">
                        <ul className='head'>
                            <li></li>
                            <li className="head-title">商品名稱</li>
                            <li></li>
                            <li className="head-price">單價</li>
                            <li className="head-quantity">數量</li>
                            <li className="head-line-price">小計</li>
                        </ul>

                        {cartItems.map(item => (
                            <ul className='content'>
                                <li className="content-img">
                                    <div className="prod-img">
                                        <img src={dollsImg1} alt={item.name} />
                                    </div>
                                </li>
                                <li className='content-name'>
                                    <div className="prod-name">
                                        {item.name}
                                        <div className="content-specifications">
                                            {item.specifications}
                                        </div>
                                        <div className="content-Makeup">
                                            <span>妝面：</span>
                                            {item.productMakeup}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    {/* 單價 */}
                                    <div className="content-price">
                                        {item.price.toLocaleString()}
                                    </div>
                                </li>
                                <li>
                                    {/* 數量 */}
                                    <div className="content-quantity">
                                        {item.quantity}
                                    </div>
                                </li>
                                <li>
                                    {/* 小計 */}
                                    <div className="content-linePrice">
                                        {(item.price * item.quantity).toLocaleString()}
                                    </div>
                                </li>
                            </ul>
                        ))}
                        <ul className='totals2-phone'>
                            <li colSpan={8} className='td-bg1'>
                                <div className='totals-div'>
                                    <div className="totals-value2">
                                        {formatNumberWithCommas(amount)}
                                    </div>
                                    <div className='fee'> {fee}</div>
                                    <div className='totals-chk' style={{ color: 'var(--red)' }}>
                                        {formatNumberWithCommas(totalAmount)}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </table>
                </div>

                <div className="pay-list">
                    <div className='pay-list-title'>付款方式</div>
                    <div className="pay-list-box">
                        <Form
                            form={form}
                            initialValues={recipientInfo}
                        >
                            <Form.Item
                                label="付款方式"
                                name="intro"
                            >
                                <Radio.Group
                                    disabled defaultValue={"card"} value={radiovalue} onChange={handlePaymentMethodChange}
                                >
                                    <Radio value="card">信用卡</Radio>
                                    <Radio value="ATM">ATM/銀行轉帳</Radio>
                                    <Radio value="LinePay">LINE Pay付款</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

                <div className="addressee-list">
                    <div className="addressee-list-title">
                        收件資料
                    </div>
                    <div className='addressee-list-box'>

                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            style={{
                                maxWidth: '500px',
                            }}
                            scrollToFirstError
                            labelAlign="left"
                            labelCol={{
                                span: 5,
                            }}
                            initialValues={recipientInfo}
                            wrapperCol={{ span: 24 }}
                            size="large"
                            block="true"
                        >

                            <Form.Item
                                name="buyer"
                                label="訂購者"
                            >
                                <Input
                                    disabled />
                            </Form.Item>

                            <Form.Item
                                name="recipientName"
                                label="收件者"
                            >
                                <Input
                                    disabled
                                    onChange={saveRecipientInfoToLocalStorage} />

                            </Form.Item>


                            <Form.Item
                                name="phone"
                                label="手機號碼"
                            >
                                <Input
                                    style={{
                                    }}
                                    disabled />
                            </Form.Item>

                            <Form.Item label="地址" labelAlign="left" >
                                <Space.Compact>
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
                                            width: '180px',
                                            margin: '0 10px 0 0',
                                        }} placeholder="城市"
                                            defaultValue={recipientInfo.city}
                                            value={recipientInfo.city}
                                            disabled
                                            options={TaiwanCounties.map(county => ({ value: county, label: county }))}
                                        >
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name="address"
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: '請填寫收件地址',
                                                whitespace: false, //禁止空白
                                            },
                                        ]}
                                    >
                                        <Input
                                            disabled
                                            defaultValue={recipientInfo.address}
                                            value={recipientInfo.address}
                                            placeholder="地址"
                                        />
                                    </Form.Item>
                                </Space.Compact>
                            </Form.Item>


                            <Form.Item
                                name="note"
                                label="備註"
                            >
                                <Input.TextArea
                                    disabled
                                    showCount maxLength={200}
                                    value={recipientInfo.note}
                                    style={{
                                        height: '200px',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="invoiceType"
                                label="發票"
                            >
                                <Form.Item
                                    name="invoiceType"
                                >
                                    <Radio.Group disabled onChange={invoiceTypeChange}>
                                        <Radio value={1}>紙本發票</Radio>
                                        <Radio value={2}>手機載具</Radio>
                                        <Radio value={3}>公司統編</Radio>
                                        <Radio value={4}>捐贈發票</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                    name="invoiceValue"
                                    hidden={form.getFieldValue('invoiceType') === 1 || form.getFieldValue('invoiceType') === 4}
                                    rules={[
                                        {
                                            required: true,
                                            message: '請填寫',
                                            whitespace: false, //禁止空白
                                        },
                                    ]}
                                >
                                    <Input
                                        defaultValue={recipientInfo.invoiceValue}
                                        value={recipientInfo.invoiceValue}
                                        style={{
                                            marginLeft: 10,
                                        }}
                                        disabled
                                        placeholder={`請輸入${recipientInfo.invoiceType == 2 ? '手機載具' : '公司統編'}`}
                                    />
                                </Form.Item>

                            </Form.Item>
                            {/* 按鈕 */}
                            <div className="cart-btn">
                                <Link to="/cart-checkout">
                                    <button type="button" name="Previous" id="Previous">上一步</button>
                                </Link>

                                <Link to="/order-established">
                                    <button type="submit" name="next" id="next" onClick={saveProdsAndRedirect}>
                                        確認結帳
                                    </button>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </>
    );
};
export default OrderConfirmation;
