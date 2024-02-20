import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Space, Radio, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './cart-checkout.scss';
import dollsImg1 from '../assets/dolls/p-1-popo.jpg';


const Cart_checkout = () => {
    const navigate = useNavigate();

    // 小計&運費&總額
    const [amount, setAmount] = useState(0);
    const [fee, setFee] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [recipientInfo, setRecipientInfo] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);


    // 第二步，從 localStorage 加載購物車資料
    useEffect(() => {
        const prodsJson = localStorage.getItem('prods');
        const prods = JSON.parse(prodsJson);
        if (prods) {
            setCartItems(prods);
            recalculateCart(prods); // 確保加載購物車資料後立即重新計算金額
        }
    }, []);

    // 計算小計和總金額
    const recalculateCart = (updatedCart) => {
        let subtotal = 0;
        updatedCart.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        setAmount(subtotal);
        let fee = subtotal > 10000 ? 0 : 120;
        setFee(fee);
        setTotalAmount(subtotal + fee);
        console.log(recalculateCart);
    };

    // 付款方式
    const [radiovalue, setRadiovalue] = useState('');
    const onChange = (e) => {
        const selectedValue = e.target.value;
        setRadiovalue(selectedValue);
        localStorage.setItem('paymentMethod', selectedValue);
    };

    // 地址
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    // // 發票
    // const [value, setValue] = useState(1);
    // const onChange2 = (e) => {
    //     setValue(e.target.value);
    // };

    // 下拉式選單
    const { Option } = Select;

    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    // 表單提交
    const onFinish = (values) => {
        localStorage.setItem('prods', JSON.stringify(cartItems));
        localStorage.setItem('recipientInfo', JSON.stringify(values));
        navigate('/order-confirmation');
    };

    const invoiceTypeChange = (e) => {
        setRecipientInfo(info => ({
            ...info,
            invoiceType: e.target.value
        }));
    }

    const TaiwanCounties = [
        "基隆市", "臺北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "臺中市", "彰化縣", "南投縣",
        "雲林縣", "嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣"
    ];

    return (
        <>
            <div className="shopping-chkBox">
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
                            <li><div className="no2"> <span className='text'>2</span></div>
                                <div className="step-name">填寫資料</div></li>
                            <li><div className="no"> <span className='text'>3</span></div>
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
                                        <div className="Quantity">
                                            {item.quantity}
                                        </div>
                                    </td>
                                    <td>
                                        {/* 小計 */}
                                        <div className="content-linePrice">{(item.price * item.quantity).toLocaleString()}</div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={8} className="feeBox">
                                    <div className='feeTitle'>
                                        運費說明
                                    </div>
                                    <div className='feeText'>
                                        <span>未滿 NT$10,000 運費 NT$120 </span>
                                        <span className='logistics'>*因商品特殊性僅供"宅配"服務</span>
                                    </div>
                                </td>
                            </tr>

                            <tr className='totals2'>
                                <td colSpan={8} className='td-bg1'>
                                    <div className='totals-div'>
                                        <div className="totals-value2">
                                            {amount.toLocaleString()}
                                        </div>
                                        <div className='fee'>{fee.toLocaleString()}</div>
                                        <div className='totals-chk' style={{ color: 'var(--red)' }}>
                                            {totalAmount.toLocaleString()}
                                        </div>
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
                        <ul>
                            <li colSpan={8} className="feeBox">
                                <div className='feeTitle'>
                                    運費說明
                                </div>
                                <div className='feeText'>
                                    <span>未滿 NT$10,000 運費 NT$120 </span>
                                    <span className='logistics'>*因商品特殊性僅供"宅配"服務</span>
                                </div>
                            </li>
                        </ul>

                        <ul className='totals2-phone'>
                            <li colSpan={8} className='td-bg1'>
                                <div className='totals-div'>
                                    <div className="totals-value2">
                                        {amount.toLocaleString()}
                                    </div>
                                    <div className='fee'>{fee.toLocaleString()}</div>
                                    <div className='totals-chk' style={{ color: 'var(--red)' }}>
                                        {totalAmount.toLocaleString()}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </table>
                </div>

                <div className="pay-list">
                    <div className='pay-list-title'>選擇付款方式</div>

                    <div className="pay-list-box">
                        <Form
                            form={form}
                            initialValues={recipientInfo}
                        >
                            <Form.Item
                                label="付款方式"
                                name="intro"
                                rules={[
                                    {
                                        required: true,
                                        message: '請選擇付款方式',
                                    },
                                ]}
                            >
                                <Radio.Group
                                    defaultValue={"card"}
                                    value={radiovalue}
                                    onFinish={onFinish}
                                >
                                    <Radio value="card">信用卡</Radio>
                                    <Radio value="ATM">ATM/銀行轉帳</Radio>
                                    <Radio value="LinePay">LINE Pay付款</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                    </div>
                </div >

                <div className="addressee-list">
                    <div className="addressee-list-title">
                        填寫收件資料
                    </div>
                    <div className='addressee-list-box'>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={recipientInfo}
                            style={{
                                maxWidth: '500px',
                            }}
                            scrollToFirstError
                            labelAlign="left"
                            labelCol={{
                                span: 5,
                            }}
                            wrapperCol={{ span: 24 }}
                            size="large"
                            block="true"
                        >

                            <Form.Item
                                name="buyer"
                                label="訂購者"
                                rules={[
                                    {
                                        required: true,
                                        message: '請填寫訂購者姓名',
                                        whitespace: false, //禁止空白
                                    },
                                ]}
                            >
                                <Input placeholder='請填寫訂購人姓名'
                                />
                            </Form.Item>

                            <Form.Item
                                name="recipientName"
                                label="收件者"
                                rules={[
                                    {
                                        required: true,
                                        message: '請填寫收件人姓名',
                                        whitespace: false, //禁止空白
                                    },
                                ]}
                            >
                                <Input placeholder='請填寫收件者姓名'
                                />
                            </Form.Item>


                            <Form.Item
                                name="phone"
                                label="手機號碼"
                                rules={[
                                    {
                                        required: true,
                                        message: '請輸入手機號碼',
                                        whitespace: false, //禁止空白
                                    },
                                ]}
                            >
                                <Input
                                    placeholder='0912345678'
                                    maxLength={10}
                                />
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
                                            placeholder="地址"
                                        />
                                    </Form.Item>
                                </Space.Compact>
                            </Form.Item>

                            <Form.Item>
                                <Checkbox >
                                    記住收件資料
                                </Checkbox>
                            </Form.Item>

                            <Form.Item
                                name="note"
                                label="備註"
                            >
                                <Input.TextArea
                                    placeholder="需要注意的地方請於備註留言~ (例如：公司、宿舍、管理員簽收...等)"
                                    showCount maxLength={200}
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
                                    <Radio.Group
                                        defaultValue={1}
                                        onChange={invoiceTypeChange}
                                        direction="vertical"
                                    >
                                        <Radio value={1}>紙本發票</Radio>
                                        <Radio value={2}>手機載具</Radio>
                                        <Radio value={3}>公司統編</Radio>
                                        <Radio value={4}>捐贈發票</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                    name="invoiceValue"
                                    hidden={(recipientInfo.invoiceType === 1 || recipientInfo.invoiceType === 4)}
                                    rules={[
                                        {
                                            required: (recipientInfo.invoiceType != 1 && recipientInfo.invoiceType != 4),
                                            message: '請填寫',
                                            whitespace: false, //禁止空白
                                        }
                                    ]}
                                >
                                    <Input
                                        style={{
                                            marginLeft: 10,
                                        }}
                                        hidden={recipientInfo.invoiceType === 1 || recipientInfo.invoiceType === 4} placeholder={`請輸入${recipientInfo.invoiceType == 2 ? '手機載具' : '公司統編'}`}
                                    />
                                </Form.Item>
                            </Form.Item>

                            {/* 按鈕 */}
                            <div className="cart-btn">
                                <Link to="/Cart">
                                    <button type="button" name="Previous" id="Previous">上一步</button>
                                </Link>
                                <div>
                                    <button type="submit" name="next" id="next">下一步</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Cart_checkout;