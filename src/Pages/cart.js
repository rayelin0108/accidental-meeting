import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './cart.scss';
import dollsImg1 from '../assets/dolls/p-1-popo.jpg';
import dress5 from "../assets/dolls/dress/dress (5).png";
import remove from '../assets/icon/icon-delete.svg';

const Cart = () => {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    // 小計及總額
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    // 購物車商品
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: '酒心可可-COCO',
            specifications: '粉肌 男體 大全套',
            productMakeup: '有',
            price: 6700,
            quantity: 1,
            imageUrl: dollsImg1,
        },
        {
            id: 2,
            name: '酒心可可-酒保服飾',
            specifications: '-',
            productMakeup: '-',
            price: 1290,
            quantity: 1,
            imageUrl: dress5,
        },
    ]);

    // 更新商品數量
    const updateQuantity = (itemId, newQuantity) => {
        newQuantity = Math.max(1, newQuantity);

        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCartItems(updatedCart);
        recalculateCart(updatedCart);
    };

    // 計算小計
    const recalculateCart = (updatedCart) => {
        let subtotal = 0;
        updatedCart.forEach(item => {
            subtotal += item.price * item.quantity;
        });

        setAmount(subtotal);
        setTotalAmount(subtotal);
    };

    // 格式化數字
    const formatNumberWithCommas = (number) => {
        const numString = number.toString();
        return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 刪除商品
    const removeItem = (itemId) => {
        MySwal.fire({
            title: "確認刪除商品?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "刪除",
            cancelButtonText: "取消",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCart = cartItems.filter(item => item.id !== itemId);
                setCartItems(updatedCart);
                recalculateCart(updatedCart);
            }
        });
    };

    // 初始計算購物車
    useEffect(() => {
        recalculateCart(cartItems);
    }, [cartItems]);

    // 儲存商品並轉向結帳頁面

    //第一步
    const saveProdsAndRedirect = () => {
        localStorage.setItem('prods', JSON.stringify(cartItems));
        navigate('/cart-checkout');
    };


    return (
        <>

            <div className="shopping-cartBox">
                <div>
                    {/* <!-- 流程表 --> */}
                    <div id="progressBar">
                        <ul>
                            <li className="active">
                                <div className="no1">
                                    <span className='text'>1</span>
                                </div>
                                <div className="step-name">購物車</div>
                            </li>
                            <li><div className="no"> <span className='text'>2</span></div>
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
                                <th className='head-removal'></th>
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
                                        {/* 加減 */}
                                        <div className="productQuantity">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                readOnly
                                            />
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        {/* 小計 */}
                                        <div className="content-linePrice">{(item.price * item.quantity).toLocaleString()}</div>
                                    </td>
                                    <td>
                                        {/* 刪除 */}
                                        <div className="content-removal">
                                            <button
                                                className="remove-product"
                                                onClick={() => removeItem(item.id)}>
                                                <img src={remove} alt="" width="25" height="25" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr className='totals'>
                                <td className='td-bg1'></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>合計</td>
                                <td>
                                    <div className="totals-value" id="cart-total">
                                        {formatNumberWithCommas(amount)}
                                    </div>
                                </td>
                                <td className='td-bg2'></td>
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
                            <li></li>
                        </ul>

                        {cartItems.map(item => (
                            <ul className='content'>
                                <li className="content-img">
                                    <div className="prod-img">
                                        <img src={dollsImg1} alt={item.name} />
                                    </div>
                                </li>
                                <li>
                                    <div className="content-name">
                                        {item.name}
                                        <div className='content-specifications'>
                                            {item.specifications}
                                        </div>
                                        <div className="content-Makeup">
                                            <span>妝面：</span>
                                            {item.productMakeup}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="content-price">{item.price.toLocaleString()}</div>
                                </li>
                                <li>
                                    {/* 加減 */}
                                    <div className="productQuantity">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            readOnly
                                        />
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </li>
                                <li>
                                    {/* 小計 */}
                                    <div className="content-linePrice">{(item.price * item.quantity).toLocaleString()}</div>
                                </li>
                                <li>
                                    {/* 刪除 */}
                                    <div className="content-removal">
                                        <button
                                            className="remove-product"
                                            onClick={() => removeItem(item.id)}>
                                            <img src={remove} alt="" width="25" height="25" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        ))}
                        <ul className='totals-phone'>
                            <li className='totals-text'>合計</li>
                            <li>
                                <div className="totals-value" id="cart-total">
                                    {formatNumberWithCommas(amount)}
                                </div>
                            </li>
                            <li></li>
                        </ul>
                    </table>
                </div>

                {/* 按鈕 */}
                <div className="cart-btn">
                    <Link to="/dolls">
                        <button type="button" name="next-cart" id="next-cart">繼續購物</button>
                    </Link>
                    <div>
                        <button type="submit" name="checkout" onClick={saveProdsAndRedirect} id="checkout">前往結帳</button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Cart;