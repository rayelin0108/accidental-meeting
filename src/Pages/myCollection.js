import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Description from "../Components/Description";
import AvatarUpload from '../Components/AvatarUpload';
import "./myCollection.scss";
import dollsImg1 from "../assets/dolls/theDoll/pipi.png";
import dollsImg2 from "../assets/dolls/theDoll/lala.png";
import dollsImg3 from "../assets/dolls/theDoll/coco.png";
import dollsImg4 from "../assets/dolls/theDoll/bobo.png";
import dollsImg5 from "../assets/dolls/theDoll/iris.png";
import icon_heart from "../assets/icon/icon-heart.svg";
import icon_collect from "../assets/collect/collect-icon.png";

const MyCollection = () => {

  const [items, setItems] = useState([
    { id: 'list-item1-1', name: '甜心派派pipi', imageUrl: dollsImg4, date: '2024. 02. 14 ~ 03. 13' },
    { id: 'list-item1-2', name: '惡魔幼幼yoyo', imageUrl: dollsImg2, date: '2024. 02. 14 ~ 03. 13' },
    { id: 'list-item1-3', name: '酒心可可coco', imageUrl: dollsImg3, date: '2024. 03. 14 ~ 03. 27' },
    { id: 'list-item2-1', name: '水手啵啵BOBO', imageUrl: dollsImg1, date: '2024. 02. 14 ~ 03. 13' },
    { id: 'list-item2-2', name: '鳶尾魚魚iris', imageUrl: dollsImg5, date: '2024. 03. 14 ~ 03. 27' },
  ]);

  const handleClick = (itemId) => {
    // 刪除商品
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

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

  return (
    <>
      <Description title="追蹤收藏" />

      <section className="myCollectionBox">

        {/* 電腦版 */}
        <div className="myCollection-box1">
          <div className="myCollection-box1-photo">
            <AvatarUpload />
          </div>
          <div className="myCollection-box1-list_bar">
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
        <div className="myCollection-box1-phone">
          <div className="myCollection-box1-photo">
            <AvatarUpload />
            <div className="logOut_btn">
              <div className="logOut_btn" onClick={() => logout()}>登出</div>
            </div>
          </div>
          <div className="myCollection-box1-list_bar">
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

        <div className="myCollection-box2">
          <div className="favorites-list">
            {items.length === 0 ? (
              <div className='collect-text'><img src={icon_collect} alt="收藏icon" />暫時無追蹤商品
                <Link to="/">
                  <button>快去逛逛</button>
                </Link>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className={item.id}>
                  <Link to="/product-page">
                    <img src={item.imageUrl} alt="商品圖片" />
                  </Link>
                  <div className="info">
                    <Link to="/product-page">
                      <div className="W">
                        <h1>{item.name}</h1>
                        <h2>預購期間 : {item.date}</h2>
                      </div>
                    </Link>
                    <div className="theHeart" onClick={() => handleClick(item.id)}>
                      <img src={icon_heart} alt="收藏icon" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section >
    </>
  );
};

export default MyCollection;
