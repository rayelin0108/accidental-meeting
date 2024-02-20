// import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import { Routes, Route, HashRouter as Router, useLocation } from "react-router-dom";
import "./App.scss";
import Layout from "./Layouts/DefaultLayout.js";
import Home from "./Pages/Home.js";
import Tutorial from "./Pages/tutorial.js";
import Dolls from "./Pages/dolls.js";
import DressUp from "./Pages/dressUp.js";
import Faq from "./Pages/faq.js";
import MyCollection from "./Pages/myCollection.js";
import MyAccount from "./Pages/myAccount.js";
import Cart from "./Pages/cart.js";
import Login from "./Pages/Login.js";
import Register from "./Pages/register.js";
import ProductPage from "./Pages/productPage.js";
import PastReleasesProds from "./Pages/pastReleasesProds.js";
import Forgot_pw from "./Pages/forgot-pw.js";
import Reset_pw from "./Pages/reset-pw.js";
import Cart_checkout from "./Pages/cart-checkout.js";
import OrderConfirmation from './Pages/orderConfirmation.js';
import OrderEstablished from './Pages/order-established.js';
import MyOrders from "./Pages/myOrders.js";
import ErrorImg from "./assets/error.png";
import { useLayoutEffect } from 'react';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div>
      {/* 安裝 react-router-dom 後才能設定 */}
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/*新手教學*/}
            <Route path="tutorial" element={<Tutorial />} />
            <Route path="dolls" element={<Dolls />} />
            <Route path="dressUp" element={<DressUp />} />
            <Route path="faq" element={<Faq />} />

            {/*商品選購頁*/}
            <Route path="product-Page" element={<ProductPage />} />

            {/*往期熱賣商品(不能選購)*/}
            <Route path="pastReleases-Prods" element={<PastReleasesProds />} />

            {/*購物車*/}
            <Route path="cart" element={<Cart />} />

            {/*購物車-填寫資料*/}
            <Route path="cart-checkout" element={<Cart_checkout />} />

            {/*購物車-確認購買資料 */}
            <Route
              path="order-confirmation" element={<OrderConfirmation />}
            />
            {/* 訂單成立 */}
            <Route
              path="order-established" element={<OrderEstablished />}
            />

            <Route path="Login" element={<Login />} />

            {/*忘記密碼*/}
            <Route path="forgot-pw" element={<Forgot_pw />} />

            {/*重設密碼*/}
            <Route path="reset-pw" element={<Reset_pw />} />

            {/*會員註冊頁*/}
            <Route path="register" element={<Register />} />

            {/*我的訂單*/}
            <Route path="my-orders" element={<MyOrders />} />

            {/*我的收藏*/}
            <Route path="my-Collection" element={<MyCollection />} />

            {/*會員資料頁*/}
            <Route path="my-account" element={<MyAccount />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Wrapper>

    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <div className="Error-404">
        <img src={ErrorImg} alt="" />
      </div>
    </div>
  );
}

export default App;
