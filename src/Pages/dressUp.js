import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dolls.scss";
import Description from "../Components/Description";
import ProductNewPic_coco from "../assets/dolls/back/new/coco.png";
import ProductNewPic_roce from "../assets/dolls/back/new/roce.png";
import ProductNewPic_pipi from "../assets/dolls/back/new/pipi.png";
import ProductPastPic_bibi from "../assets/dolls/back/past/bibi.png";
import ProductPastPic_yoyo from "../assets/dolls/back/past/yoyo.png";
import ProductPastPic_bobo from "../assets/dolls/back/past/bobo.png";
import ProductRestockPic_iris from "../assets/dolls/back/restock/iris.png";
import ProductRestockPic_lion from "../assets/dolls/back/restock/lion.png";
import ProductRestockPic_meow from "../assets/dolls/back/restock/meow.png";
import Icon_heart_yellow from "../assets/icon/icon_heart_yellow.svg";
import Icon_cart_yellow from "../assets/icon/icon_cart_yellow.svg";
import Icon_heart_pink from "../assets/icon/icon-heart.svg";
import Icon_cart_pink from "../assets/icon/icon-cart-pink.svg";
import dress1 from "../assets/dolls/dress/dress (1).png";
import dress2 from "../assets/dolls/dress/dress (2).png";
import dress3 from "../assets/dolls/dress/dress (3).png";
import dress4 from "../assets/dolls/dress/dress (4).png";
import dress5 from "../assets/dolls/dress/dress (5).png";
import dress6 from "../assets/dolls/dress/dress (6).png";
import more from "../assets/dolls/more.png";

const DressUp = () => {
  // 當期熱賣
  const [hotSalesProds, setHotSalesProds] = useState([
    {
      mainImg: dress1,
      imgAlt: '甜心派派pipi-服飾',
      backImg: ProductNewPic_pipi,
      backImgAlt: '甜心派派pipi卡片',
      isCartClicked: false,
      isHeartClicked: false,
      title: '甜心派派pipi-服飾',
      subtitle: '預購期間 : 2024. 02. 14 ~ 03.13',
    },
    {
      mainImg: dress2,
      imgAlt: '酒心可可coco-服飾',
      backImg: ProductNewPic_coco,
      backImgAlt: '酒心可可coco卡片',
      isCartClicked: false,
      isHeartClicked: false,
      title: '酒心可可coco-服飾',
      subtitle: '預購期間 : 2024. 02. 14 ~ 03.13',
    },
    {
      mainImg: dress3,
      imgAlt: '玫瑰茶茶roce-服飾',
      backImg: ProductNewPic_roce,
      backImgAlt: '玫瑰茶茶roce卡片',
      isCartClicked: false,
      isHeartClicked: false,
      title: '玫瑰茶茶roce-服飾',
      subtitle: '預購期間 : 2024. 02. 14 ~ 03.13',
    }
  ]);

  const handleCartClick = (index) => {
    let prods = JSON.parse(JSON.stringify(hotSalesProds));
    prods[index].isCartClicked = !prods[index].isCartClicked;

    setHotSalesProds(prods);
  };

  const handleHeartClick1 = (index) => {
    let prods = JSON.parse(JSON.stringify(hotSalesProds));
    prods[index].isHeartClicked = !prods[index].isHeartClicked;

    setHotSalesProds(prods);
  };


  // 準備預購
  const [comingSoonProds, setComingSoonProds] = useState([
    {
      mainImg: dress4,
      imgAlt: '水手啵啵BOBO-服飾',
      backImg: ProductPastPic_bobo,
      backImgAlt: '水手啵啵BOBO卡片',
      isHeartClicked: false,
      title: '水手啵啵BOBO-服飾',
      subtitle: '預購期間 : 2024. 04. 15 ~ 05. 15',
    },
    {
      mainImg: dress5,
      imgAlt: '天使白白bibi-服飾',
      backImg: ProductPastPic_bibi,
      backImgAlt: '天使白白bibi卡片',
      isHeartClicked: false,
      title: '天使白白bibi-服飾',
      subtitle: '預購期間 : 2024. 04. 15 ~ 05. 15',
    },
    {
      mainImg: dress6,
      imgAlt: '惡魔幼幼yoyo-服飾',
      backImg: ProductPastPic_yoyo,
      backImgAlt: '惡魔幼幼yoyo卡片',
      isHeartClicked: false,
      title: '惡魔幼幼yoyo-服飾',
      subtitle: '預購期間 : 2024. 04. 15 ~ 05. 15',
    }
  ]);



  const handleHeartClick2 = (index) => {
    let prods = JSON.parse(JSON.stringify(comingSoonProds));
    prods[index].isHeartClicked = !prods[index].isHeartClicked;

    setComingSoonProds(prods);
  };


  // // 往期熱賣
  const [pastReleasesProds, setPastReleasesProds] = useState([
    {
      mainImg: dress1,
      imgAlt: '調皮喵喵meow-服飾',
      backImg: ProductRestockPic_meow,
      backImgAlt: '調皮喵喵meow卡片',
      isHeartClicked: false,
      title: '調皮喵喵meow-服飾',
    },
    {
      mainImg: dress5,
      imgAlt: '鳶尾魚魚iris-服飾',
      backImg: ProductRestockPic_iris,
      backImgAlt: '鳶尾魚魚iris卡片',
      isHeartClicked: false,
      title: '鳶尾魚魚iris-服飾',
    },
    {
      mainImg: dress3,
      imgAlt: '獅子崽崽lion-服飾',
      backImg: ProductRestockPic_lion,
      backImgAlt: '獅子崽崽lion卡片',
      isHeartClicked: false,
      title: '獅子崽崽lion-服飾',
    }
  ]);

  const handleHeartClick3 = (index) => {
    let prods = JSON.parse(JSON.stringify(pastReleasesProds));
    prods[index].isHeartClicked = !prods[index].isHeartClicked;

    setPastReleasesProds(prods);
  };


  return (
    <>
      <Description title="裝扮" />

      <section id="dolls">
        <div className="dolls-Box">
          {/* <!-- 當期熱賣 --> -----------------------------------------------------------------------*/}
          <div className="nowSale-Title">
            <h4>HOT SALES</h4>
            <p>當期熱賣</p>
          </div>
          <div className="nowSale">
            <div className="nowSaleSML">
              {hotSalesProds.map((prod, index) =>
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="card-front">
                      <figure>
                        <img src={prod.mainImg} alt={prod.imgAlt} />
                      </figure>
                    </div>
                    <div className="card-back">
                      <figure>
                        <Link to="/product-Page">
                          <div className="img-bg">
                            <img src={prod.backImg} alt={prod.backImgAlt} />
                          </div>
                        </Link>
                      </figure>
                      <div className="dolls-btn">
                        <Link to="/product-Page">
                          <button>View More</button>
                        </Link>
                        <img
                          className="itemCart"
                          src={prod.isCartClicked ? Icon_cart_pink : Icon_cart_yellow}
                          alt=""
                          onClick={() => handleCartClick(index)}
                        />
                        <img
                          className="itemheart"
                          src={prod.isHeartClicked ? Icon_heart_pink : Icon_heart_yellow}
                          alt=""
                          onClick={() => handleHeartClick1(index)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="info-text">
                      <Link to="/product-Page">
                        <h1>{prod.title}</h1>
                        <h2>{prod.subtitle}</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* <!-- 當期熱賣手機板 --> */}
          <div className="nowSale-phone">
            <div className="phone-SML">
              <div className="dollTopBox">
                <div className="thePhoneBox1">
                  <Link to="/product-Page">
                    <img src={dress1} alt="甜心派派pipig手機板圖片" />
                    <h1>甜心派派pipi-服飾</h1>
                  </Link>
                </div>
                <div className="thePhoneBox2">
                  <Link to="/product-Page">
                    <img src={dress2} alt="酒心可可手機板圖片" />
                    <h1>酒心可可coco-服飾</h1>
                  </Link>
                </div>
              </div>
              <div className="dollBottomBox">
                <div className="thePhoneBox3">
                  <Link to="/product-Page">
                    <img src={dress3} alt="玫瑰茶茶手機板圖片" />
                    <h1>玫瑰茶茶roce-服飾</h1>
                  </Link>
                </div>
                <div className="thePhoneBox4">
                  <img src={more} alt="期待更多" />
                  <h1>期待更多...</h1>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 準備預購 --> -----------------------------------------------------------------------*/}
          <div className="futureSale-Title">
            <h4>COMING SOON</h4>
            <p>準備預購</p>
          </div>
          <div className="futureSale">
            <div className="futureSaleSML">
              {comingSoonProds.map((prod, index) =>
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="card-front">
                      <figure>
                        <img src={prod.mainImg} alt={prod.imgAlt} />
                      </figure>
                    </div>
                    <div className="card-back">
                      <figure>
                        <Link to="/product-Page">
                          <div className="img-bg">
                            <img src={prod.backImg} alt={prod.backImgAlt} />
                          </div>
                        </Link>
                      </figure>
                      <div className="dolls-btn">
                        <Link to="/product-Page">
                          <button>View More</button>
                        </Link>
                        <img
                          className="itemheart"
                          src={prod.isHeartClicked ? Icon_heart_pink : Icon_heart_yellow}
                          alt=""
                          onClick={() => handleHeartClick2(index)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="info-text">
                      <Link to="/product-Page">
                        <h1>{prod.title}</h1>
                        <h2>{prod.subtitle}</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div >

          {/* <!-- 準備預購手機板 --> */}
          <div className="futureSale-phone">
            <div className="phone-SML">
              <div className="dollTopBox">
                <div className="thePhoneBox1">
                  <Link to="/product-Page">
                    <img src={dress4} alt="水手啵啵BOBO手機板圖片" />
                    <h1>水手啵啵BOBO-服飾</h1>
                  </Link>
                </div>
                <div className="thePhoneBox2">
                  <Link to="/product-Page">
                    <img src={dress5} alt="天使白白bibi手機板圖片" />
                    <h1>天使白白bibi-服飾</h1>
                  </Link>
                </div>
              </div>
              <div className="dollBottomBox">
                <div className="thePhoneBox3">
                  <Link to="/product-Page">
                    <img src={dress6} alt="惡魔幼幼yoyo手機板圖片" />
                    <h1>惡魔幼幼yoyo-服飾</h1>
                  </Link>
                </div>
                <div className="thePhoneBox4">
                  <img src={more} alt="期待更多" />
                  <h1>期待更多...</h1>
                </div>
              </div>
            </div>
          </div>



          {/* <!-- 往期熱賣 --> -----------------------------------------------------------------------*/}
          <div className="pastSale-Title">
            <h4>PAST RELEASES</h4>
            <p>往期熱賣</p>
          </div>
          <div className="pastSale">
            <div className="pastSaleSML">
              {pastReleasesProds.map((prod, index) =>
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="card-front">
                      <figure>
                        <img src={prod.mainImg} alt={prod.imgAlt} />
                      </figure>
                    </div>
                    <div className="card-back">
                      <figure>
                        <Link to="/pastReleases-Prods">
                          <div className="img-bg">
                            <img src={prod.backImg} alt={prod.backImgAlt} />
                          </div>
                        </Link>
                      </figure>
                      <div className="dolls-btn">
                        <Link to="/pastReleases-Prods">
                          <button>View More</button>
                        </Link>
                        <img
                          className="itemheart"
                          src={prod.isHeartClicked ? Icon_heart_pink : Icon_heart_yellow}
                          alt=""
                          onClick={() => handleHeartClick3(index)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="info-text">
                      <Link to="/pastReleases-Prods">
                        <h1>{prod.title}</h1>
                        <h2>{prod.subtitle}</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div >

          {/* <!-- 往期熱賣手機板 --> */}
          <div className="pastSale-phone">
            <div className="phone-SML">
              <div className="dollTopBox">
                <div className="thePhoneBox1">
                  <Link to="/pastReleases-Prods">
                    <img src={dress1} alt="調皮喵喵meow手機板圖片" />
                    <h1>調皮喵喵meow-服飾</h1>
                  </Link>
                </div>
                <div className="thePhoneBox2">
                  <Link to="/pastReleases-Prods">
                    <img src={dress5} alt="鳶尾魚魚iris手機板圖片" />
                    <h1>鳶尾魚魚iris-服飾</h1>
                  </Link>
                </div>
              </div>
              <div className="dollBottomBox">
                <div className="thePhoneBox3">
                  <Link to="/pastReleases-Prods">
                    <img src={dress3} alt="獅子崽崽lion手機板圖片" />
                    <h1>獅子崽崽lion-服飾</h1>
                  </Link>
                </div>
                <div className="thePhoneBox4">
                  <img src={more} alt="期待更多" />
                  <h1>期待更多...</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default DressUp;
