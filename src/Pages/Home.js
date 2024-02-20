import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "./Home.scss";
import AboutImg from "../assets/home/aboutImg.png";
import WindowImg from "../assets/home/window.png";
import Outfit_Wig from "../assets/home/Outfit_Wig.png";
import MackUpImg_1 from "../assets/home/MackUpImg_1.png";
import MackUpImg_2 from "../assets/home/MackUpImg_2.png";
import MackUpImg_3 from "../assets/home/MackUpImg_3.png";
import Description from "../Components/Description";
import dollsImg_pipi from "../assets/dolls/theDoll/pipi.png";
import dollsImg_coco from "../assets/dolls/theDoll/coco.png";
import dollsImg_roce from "../assets/dolls/theDoll/roce.png";
import home_doll_coco from "../assets/dolls/homePic/home_doll_coco.png";
import home_doll_roce from "../assets/dolls/homePic/home_doll_roce.png";
import home_doll_pipi from "../assets/dolls/homePic/home_doll_pipi.png";
import home_costume_coco from "../assets/dolls/homePic/home_costume_coco.png";
import home_costume_roce from "../assets/dolls/homePic/home_costume_roce.png";
import dress1 from "../assets/dolls/dress/dress (1).png";
import dress2 from "../assets/dolls/dress/dress (2).png";
import banner1 from "../assets/home/banner1-1.png";
import banner2 from "../assets/home/banner1-2.png";
import banner3 from "../assets/home/banner1-3.png";
import banner4 from "../assets/home/banner1-4.png";
import bottom_lion from "../assets/home/bottom/lion.png";
import bottom_iris from "../assets/home/bottom/iris.png";
import bottom_caca from "../assets/home/bottom/caca.png";
import bottom_bibi from "../assets/home/bottom/bibi.png";
import bottom_meow from "../assets/home/bottom/meow.png";
import lala from "../assets/home/lala.png";
import roce from "../assets/home/roce.png";
import bibi from "../assets/home/bibi.png";

const Home = () => {
  return (
    <>
      <Description />
      <section id="home">
        <section
          className="about"
          style={{ backgroundImage: `url(${AboutImg})` }}
        >
          {/* <img src={AboutImg} /> */}
          <h4>ABOUT</h4>
          <p>
            每一隻人偶娃娃都是藝術家們的心血
            <br />
            來之不易，所以每個細節都那麼珍貴
            <br />
            消縱即逝，所以每刻相遇都值得把握
            <br />
            在「偶遇」每隻人偶都有獨特的故事
            <br />
            而這個故事就是你與他們相遇的開始
          </p>
        </section>
        <section id="test-swiper">
          <Swiper
            style={{
              "--swiper-pagination-color": "#342014",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500, // 設定輪播時間
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="banner-img">
                <img src={banner1} alt="banner1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-img">
                <img src={banner2} alt="banner2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-img">
                <img src={banner3} alt="banner3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-img">
                <img src={banner4} alt="banner4" />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* 人偶 */}
        <section id="dollsBox">
          {/* 頂頭 */}
          <div className="homeTitle">
            <h3>人偶</h3>
            <hr />
            <h4>BJD DOLLS</h4>
            <br />
            <p>單頭 ·裸娃·大全套 ― 大人氣熱賣中!!</p>
          </div>
          <div className="dollsContent">
            {/* 有翻頁效果的電腦版 */}
            <div className="dollsContent-img">
              {/* 翻牌效果 */}
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <img src={dollsImg_coco} alt="dolls-img2" />
                  </div>
                  <div className="card-back">
                    <figure>
                      <Link to="/product-Page">
                        <div className="img-bg">
                          <img
                            src={home_doll_coco}
                            alt="酒心可可_商品圖片背面"
                          />
                        </div>
                      </Link>
                    </figure>

                    <div className="card-back-btn">
                      <Link to="/product-Page">
                        <button>View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <figure>
                      <img src={dollsImg_roce} alt="dolls-img2" />
                    </figure>
                  </div>
                  <div className="card-back">
                    <figure>
                      <Link to="/product-Page">
                        <div className="img-bg">
                          <img
                            src={home_doll_roce}
                            alt="玫瑰茶茶_商品圖片背面"
                          />
                        </div>
                      </Link>
                    </figure>

                    <div className="card-back-btn">
                      <Link to="/product-Page">
                        <button>View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <figure>
                      <img src={dollsImg_pipi} alt="dolls-img2" />
                    </figure>
                  </div>
                  <div className="card-back">
                    <figure>
                      <Link to="/product-Page">
                        <div className="img-bg">
                          <img
                            src={home_doll_pipi}
                            alt="甜心派派_商品圖片背面"
                          />
                        </div>
                      </Link>
                    </figure>

                    <div className="card-back-btn">
                      <Link to="/product-Page">
                        <button>View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 沒翻頁效果的ipad手機版 */}
            <div className="dollsContent-imgPhone">
              <div className="item_1phone">
                <img src={dollsImg_coco} alt="酒心可可商品圖" />
              </div>

              <div className="item_2phone">
                <img src={dollsImg_roce} alt="玫瑰茶茶商品圖" />
              </div>

              <div className="item_3phone">
                <img src={dollsImg_pipi} alt="甜心派派商品圖" />
              </div>
            </div>

            <div className="dollsText">
              <h4>INTRODUCTION</h4>
              <h4>因您而生 · 萬眾獨一</h4>
              <hr />
              <p>
                歡迎來到「偶遇」
                <br />
                &nbsp;&nbsp;—— 您與夢幻人偶的邂逅之地
                <br />
                <br />
                每一個人偶都是匠心獨具、精心打造的
                <br />
                藝術品。 透過精湛的手工藝技巧和細緻
                <br />
                的設計，為您帶來一份特別的收藏品。
              </p>
            </div>
          </div>
          <div className="dolls-btn">
            <Link to="dolls">
              <button className="viewMore-btn">● VIEW MORE</button>
            </Link>
          </div>
        </section>

        {/* 服裝 */}
        <section id="dressUpBox">
          {/* 頂頭 */}
          <div className="homeTitle">
            <h3>裝扮</h3>
            <hr />
            <h4>BJD DRESS UP</h4>
            <br />
            <p>假髮·眼珠·服裝 ― 打造您的萬中獨一</p>
          </div>
          <div className="dressUpContent">
            <div className="dressUp-img">
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <figure>
                      <img src={dress1} alt="dolls-img2" />
                    </figure>
                  </div>
                  <div className="card-back">
                    <figure>
                      <Link to="/product-Page">
                        <div className="img-bg">
                          <img
                            src={home_costume_roce}
                            alt="玫瑰茶茶_商品圖片背面"
                          />
                        </div>
                      </Link>
                    </figure>
                    <div className="card-back-btn">
                      <Link to="/product-Page">
                        <button>View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <figure>
                      <img src={dress2} alt="dolls-img2" />
                    </figure>
                  </div>
                  <div className="card-back">
                    <figure>
                      <Link to="/product-Page">
                        <div className="img-bg">
                          <img
                            src={home_costume_coco}
                            alt="酒心可可_商品圖片背面"
                          />
                        </div>
                      </Link>
                    </figure>
                    <div className="card-back-btn">
                      <Link to="/product-Page">
                        <button>View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 沒翻頁效果的ipad手機版 */}
            <div className="dressUpContent-imgPhone">
              <div className="dress_1phone">
                <img src={dress1} alt="酒心可可商品服裝圖" />
              </div>

              <div className="dress_2phone">
                <img src={dress2} alt="玫瑰茶茶商品服裝圖" />
              </div>
            </div>

            <div className="dressUPText">
              <img src={WindowImg} className="window-img" />
              <div className="dressUPText-p">
                <h4>INTRODUCTION</h4>
                <h4>個性打造·流光溢彩</h4>
                <hr />
                <br />
                <p>
                  追求卓越
                  <br />
                  力求超越您的期待
                  <br />
                  高品質面料·三十年老裁縫師傅
                  <br />
                  <br />
                  我們注重工藝中每一處細節
                  <br />
                  只為您收到禮物時的笑顏
                  <br />
                  專注、用心，只為打造您專屬的夢幻造型
                </p>
              </div>
            </div>
          </div>
          <div className="home-dreesUp-btn">
            <img src={Outfit_Wig} className="dreesUp-img left-img" />
            <Link to="dressUp">
              <button className="viewMore-btn">● VIEW MORE</button>
            </Link>
            <img src={Outfit_Wig} className="dreesUp-img right-img" />
          </div>
        </section>

        {/* 妝面 */}
        <section id="mackUpBox">
          {/* 頂頭 */}
          <div className="homeTitle">
            <h3>妝面</h3>
            <hr />
            <h4>THE MAKEUP</h4>
            <br />
            <p>此項目僅作為人偶商品加購</p>
          </div>

          <div className="mackUpText">
            <h3>本店妝師妝面風格參考</h3>
            <p>
              本店妝面僅作物為人偶加購項目，請於
              <Link to="dolls">人偶-商品頁</Link>
              參見詳細資訊
            </p>

            {/* 電腦版妝面 */}
            <div className="mackUp-hp">
              <div className="mackUp-item">
                <img src={MackUpImg_2} className="MackUp-img" />
                <h5>妝師-十二</h5>
                <br />
                <p>
                  ·擅長風格 : 淡妝·輕真人風·日常妝面
                  <br />
                  ·擅長尺寸 : 1/4·1/6
                </p>
              </div>
              <div className="mackUp-item">
                <img src={MackUpImg_1} className="MackUp-img" />
                <h5>妝師-卿卿</h5>
                <br />
                <p>
                  ·擅長風格 : 腦洞妝·真人風·面紋
                  <br />
                  ·擅長尺寸 : 1/4·1/3
                </p>
              </div>

              <div className="mackUp-item">
                <img src={MackUpImg_3} className="MackUp-img" />
                <h5>妝師-貓貓</h5>
                <br />
                <p>
                  ·擅長風格 : 軟萌妝·2.5次元妝·日常妝
                  <br />
                  ·擅長尺寸 : 1/4·1/6
                </p>
              </div>
            </div>
          </div>
          {/* 手機版妝面 */}
          <div className="makeup-Phone">
            <div className="makeup_1phone">
              <img src={lala} alt="妝面圖1" />
            </div>

            <div className="makeup_2phone">
              <img src={roce} alt="妝面圖2" />
            </div>

            <div className="makeup_3phone">
              <img src={bibi} alt="妝面圖3" />
            </div>
          </div>
          <div className="makeup-Phone-text">
            <p>僅作為加購項目 ，請於人偶商品頁參見詳細資訊</p>
          </div>
        </section>

        {/* 往其熱賣底部 */}
        <section id="pastItems">
          {/* 頂頭 */}
          <div className="homeTitle">
            <h3>過往熱門商品</h3>
            <hr />
            <h4>PAST RELEASES</h4>
            <br />
            <p>過往販售 ·期待再售 </p>
          </div>
          <div className="hot-Swiper">
            <Swiper
              spaceBetween={20}
              slidesPerView={3.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              modules={[Pagination]}
              className="swiper-container"
            >
              <SwiperSlide className="swiper-slide">
                <Link to="/pastReleases-Prods">
                  <div className="swiperBox">
                    <div className="banner-img">
                      <img src={bottom_meow} alt="調皮喵喵meow" />
                    </div>
                    <div className="banner-text">調皮喵喵meow</div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Link to="/pastReleases-Prods">
                  <div className="swiperBox">
                    <div className="banner-img">
                      <img src={bottom_caca} alt="船長卡卡caca" />
                    </div>
                    <div className="banner-text">船長卡卡caca</div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Link to="/pastReleases-Prods">
                  <div className="swiperBox">
                    <div className="banner-img">
                      <img src={bottom_bibi} alt="天使白白" />
                    </div>
                    <div className="banner-text">天使白白bibi</div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Link to="/pastReleases-Prods">
                  <div className="swiperBox">
                    <div className="banner-img">
                      <img src={bottom_lion} alt="獅子崽崽lion" />
                    </div>
                    <div className="banner-text">獅子崽崽lion</div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Link to="/pastReleases-Prods">
                  <div className="swiperBox">
                    <div className="banner-img">
                      <img src={bottom_iris} alt="鳶尾魚魚iris" />
                    </div>
                    <div className="banner-text">鳶尾魚魚iris</div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
