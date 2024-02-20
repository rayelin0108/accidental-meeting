import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Description from "../Components/Description";
import AvatarUpload from '../Components/AvatarUpload';
import "./myOrders.scss";
import dollsImg2 from '../assets/dolls/p-2-chch.jpg';


const MyOrders = () => {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        let userInfoJson = localStorage.getItem('userInfo');
        if (userInfoJson) {
            setUserInfo(JSON.parse(userInfoJson))
        }
    }, []);

    //登出
    const logout = () => {
        localStorage.removeItem('userInfo');
        window.location.href = '/'
    }

    const [cartItems, setCartItems] = useState([
        {
            isShowProds: false,
            orderNo: '#0001234567',
            createDate: '2023/10/10',
            status: '運送中',
            price: '$7200',
            prods: [
                {
                    id: 1,
                    imageUrl: dollsImg2,
                    name: '酒心可可-COCO',
                    specifications: '粉肌 男體 大全套',
                    productMakeup: '有',
                    price: 2700,
                    quantity: 1,
                },
                {
                    id: 2,
                    imageUrl: dollsImg2,
                    name: '酒心可可-酒保服飾',
                    specifications: '-',
                    productMakeup: '-',
                    price: 2580,
                    quantity: 1,
                }
            ],
            shippingInfo: {
                phone: '0933333333',
                name: 'pipi',
                address: '台北市信義區花花鹿草草區123號6樓'
            }
        },
        {
            isShowProds: false,
            orderNo: '#0001234564',
            createDate: '2023/09/19',
            status: '運送完成',
            price: '$10200',
            prods: [
                {
                    id: 1,
                    imageUrl: dollsImg2,
                    name: '酒心可可-COCO',
                    specifications: '粉肌 男體 大全套',
                    productMakeup: '有',
                    price: 2700,
                    quantity: 1,
                },
                {
                    id: 2,
                    imageUrl: dollsImg2,
                    name: '酒心可可-酒保服飾',
                    specifications: '-',
                    productMakeup: '-',
                    price: 2580,
                    quantity: 1,
                }
            ],
            shippingInfo: {
                phone: '0933333333',
                name: 'pipi',
                address: '台北市信義區花花鹿草草區123號6樓'
            }
        },
        {
            isShowProds: false,
            orderNo: '#0001234559 ',
            createDate: '2023/08/10',
            status: '運送完成',
            price: '$9800',
            prods: [
                {
                    id: 1,
                    imageUrl: dollsImg2,
                    name: '酒心可可-COCO',
                    specifications: '粉肌 男體 大全套',
                    productMakeup: '有',
                    price: 2700,
                    quantity: 1,
                },
                {
                    id: 2,
                    imageUrl: dollsImg2,
                    name: '酒心可可-酒保服飾',
                    specifications: '-',
                    productMakeup: '-',
                    price: 2580,
                    quantity: 1,
                }
            ],
            shippingInfo: {
                phone: '0933333333',
                name: 'pipi',
                address: '台北市信義區花花鹿草草區123號7樓'
            }
        },
    ]);

    const toggleProdList = (index) => {
        let newCartItems = [...cartItems];
        //點選按鈕可開關
        if (newCartItems[index].isShowProds) {
            newCartItems[index].isShowProds = false;
            setCartItems(newCartItems);

            return;
        }
        newCartItems.map(item => item.isShowProds = false);
        newCartItems[index].isShowProds = !newCartItems[index].isShowProds;

        setCartItems(newCartItems);
    }



    return (
        <>
            <Description title="購買清單" />
            <section className="ordersBox">

                {/* 電腦版-左側選單欄 */}
                <div className="orders-box1">
                    <div className="orders-box1-photo">
                        <AvatarUpload />
                    </div>
                    <div className="orders-box1-list_bar">
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

                {/* 手機板-左側選單欄 */}
                <div className="orders-box1-phone">
                    <div className="orders-box1-photo">
                        <AvatarUpload />
                        <div className="logOut_btn"
                            onClick={() => logout()}>
                            登出
                        </div>
                    </div>
                    <div className="orders-box1-list_bar">
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

                <div className="orders-box2">
                    <div className="orders-box2-title">購買清單</div>

                    {/* 電腦版-購買清單 */}
                    <table className='orders-box2-table'>
                        <thead className="orders-box2-thead">
                            <tr className='orders'>
                                <th className="orders-number text-center">訂單編號</th>
                                <th className="orders-date text-center">訂購日期</th>
                                <th className="orders-state text-center">狀態</th>
                                <th className="orders-price text-center">訂單金額</th>
                                <th className='orders-list-btn text-center'></th>
                            </tr>
                        </thead>
                        <tbody className='orders-box2-tbody'>
                            {cartItems.map((item, i) => (
                                <>
                                    <tr className='order-list'>
                                        <th className="order-list-number">{item.orderNo}</th>
                                        <th className="order-list-date">{item.createDate}</th>
                                        <th className="order-list-state">{item.status}</th>
                                        <th className="order-list-price">{item.price}</th>
                                        <th className='order-list-btn'><button type='button' onClick={() => toggleProdList(i)}>查看詳情</button></th>
                                        <th className='order-list-btn-phone'><button type='button' onClick={() => toggleProdList(i)}>查看</button></th>
                                    </tr>
                                    {item.isShowProds &&
                                        <>
                                            <tr>
                                                <td colSpan={6}>
                                                    <table className='orders-box2-table'>
                                                        <tr className='head'>
                                                            <td colspan="2" className="head-img-title">商品名稱</td>
                                                            <td className="head-specifications">規格</td>
                                                            <td className="head-Makeup">妝面</td>
                                                            <td className="head-price">單價</td>
                                                            <td className="head-quantity">數量</td>
                                                        </tr>
                                                        {
                                                            item.prods.map(prod => (
                                                                <>
                                                                    <tr className='content'>
                                                                        <td className="content-img">
                                                                            <div className="prod-img">
                                                                                <img src={prod.imageUrl} alt={prod.name} />
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="content-name">
                                                                                {prod.name}
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="content-specifications">
                                                                                {prod.specifications}
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="content-Makeup">
                                                                                {prod.productMakeup}
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="content-price">{prod.price.toLocaleString()}</div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="content-quantity"> {prod.quantity}</div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td colSpan={8}>
                                                                            <div>
                                                                                <div className="progressBar1">
                                                                                    <ul>
                                                                                        <li className="active">
                                                                                            <div className="no">
                                                                                                <span className='text'>1</span>
                                                                                            </div>
                                                                                            <div className="step-name">訂單確認</div>
                                                                                            <div className="step-time">2024/3/14</div>
                                                                                        </li>
                                                                                        <li><div className="no"> <span className='text'>2</span></div>
                                                                                            <div className="step-name">付款確認</div>
                                                                                            <div className="step-time">2024/3/14</div>
                                                                                        </li>
                                                                                        <li><div className="no3"> <span className='text'>3</span></div>
                                                                                            <div className="step-name">商品製作</div>
                                                                                            <div className="step-time">2024/3/14</div>
                                                                                        </li>
                                                                                        <li><div className="no"> <span className='text'>4</span></div>
                                                                                            <div className="step-name">製作完成</div>
                                                                                            <div className="step-time">　</div>
                                                                                        </li>
                                                                                        <li><div className="no"> <span className='text'>5</span></div>
                                                                                            <div className="step-name">商品寄送</div>
                                                                                            <div className="step-time">　</div>
                                                                                        </li>
                                                                                        <li><div className="no"> <span className='text'>6</span></div>
                                                                                            <div className="step-name">送達</div>
                                                                                            <div className="step-time">　</div>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="process-line"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            ))
                                                        }

                                                    </table>
                                                </td>
                                            </tr >
                                            <tr>
                                                <td colSpan={8}>
                                                    <div className='receiptInformation'>
                                                        <div>
                                                            <div className="receiptInformation-title ">收件資訊</div>
                                                        </div>
                                                        <div className='info-wrap'>
                                                            <div className="info-wrap-message">
                                                                <div className='receiptInformation-content padding-box'>收件人</div>
                                                                <div className='receiptInformation-text padding-box'>{item.shippingInfo.name}</div>
                                                            </div>
                                                        </div>
                                                        <div className='info-wrap'>
                                                            <div className="info-wrap-message">
                                                                <div className='receiptInformation-content padding-box'>手　機</div>
                                                                <div className='receiptInformation-text padding-box'>{item.shippingInfo.phone}</div>
                                                            </div>
                                                        </div>
                                                        <div className='info-wrap'>
                                                            <div className="info-wrap-message">
                                                                <div className='receiptInformation-content padding-box'>地　址</div>
                                                                <div className='receiptInformation-text padding-box'>{item.shippingInfo.address}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    }
                                </>
                            ))}
                        </tbody>
                    </table >

                    {/* 手機板-購買清單 */}

                </div >

            </section >
        </>
    );
};

export default MyOrders;
