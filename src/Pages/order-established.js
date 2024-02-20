import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './order-established.scss';
import icon_check from '../assets/icon/icon-check-green.svg';

function OrderEstablished() {
    const [orderInfo, setOrderInfo] = useState({
        orderTime: '',
        storeName: '偶遇人偶娃娃有限公司',
        recipient: '',
        price: '',
        paymentMethod: ''
    });

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate =
            `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

        const prodsJson = localStorage.getItem('prods');
        const recipientInfoJson = localStorage.getItem('recipientInfo');
        const savedPaymentMethod = localStorage.getItem('paymentMethod');
        if (prodsJson && recipientInfoJson && savedPaymentMethod) {
            const prods = JSON.parse(prodsJson);
            const recipientInfo = JSON.parse(recipientInfoJson);
            const totalPrice = prods.reduce((total, item) => total + item.price * item.quantity, 0);
            setOrderInfo({
                ...orderInfo,
                orderTime: formattedDate,
                recipient: recipientInfo.recipientName,
                price: totalPrice.toLocaleString(),
                paymentMethod: savedPaymentMethod
            });
        }
    }, []);

    return (
        <section id='orderEstablished'>
            <div className="orderEstablished-img">
                <img src={icon_check} alt="訂單成立" />
            </div>
            <div className="orderEstablished-title">
                <h1>訂單已成立</h1>
            </div>
            <div className="orderEstablished-number">
                訂單編號：0001234567
            </div>
            <div className="orderEstablished-content">
                <div className="title">訂單資訊</div>
                <table className="order">
                    <tbody>
                        <tr>
                            <td className='order-data'>訂單時間</td>
                            <td className='order-data-text'>{orderInfo.orderTime}</td>
                        </tr>
                        <tr>
                            <td className='order-storeName'>商店名稱</td>
                            <td className='order-storeName-text'>{orderInfo.storeName}</td>
                        </tr>
                        <tr>
                            <td className='order-recipient'>收件人</td>
                            <td className='order-recipient-text'>{orderInfo.recipient}</td>
                        </tr>
                        <tr>
                            <td className='order-price'>購買金額</td>
                            <td className='order-price-text'>NT${orderInfo.price}</td>
                        </tr>
                        <tr>
                            <td className='order-payment'>付款方式</td>
                            <td className='order-payment-text'>{orderInfo.paymentMethod}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="cart-btn">
                <Link to="/dolls">
                    <button type="button" name="Previous" id="Previous">繼續購物</button>
                </Link>
                <Link to="/my-orders">
                    <button type="submit" name="next" id="next">
                        訂單詳情
                    </button>
                </Link>
            </div>
        </section>

    );
}

export default OrderEstablished;
