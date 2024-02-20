import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Radio } from "antd";
import "./productPage.scss";
import icon_arrow_L from "../assets/icon/icon-arrow-L.svg";
import icon_arrow_R from "../assets/icon/icon-arrow-R.svg";
import customer from "../assets/productPage/customer.png";
import customer_ipad from "../assets/productPage/customer_ipad.png";
import customer_Plone from "../assets/productPage/customer_Plone.png";
import bodyBoy from "../assets/productPage/body-boy@1x.png";
import body_boy_ipad from "../assets/productPage/body-boy_ipad.png";
import body_boy_phone from "../assets/productPage/body-boy_phone.png";
import bodyGirl from "../assets/productPage/body-girl@1x.png";
import body_girl_ipad from "../assets/productPage/body-girl_ipad.png";
import body_girl_phone from "../assets/productPage/body-girl_phone.png";
import head1 from "../assets/dolls/product/head1.png";
import head2 from "../assets/dolls/product/head2.png";
import head4 from "../assets/dolls/product/head4.png";
import mackup1 from "../assets/dolls/product/mackup1.png";
import mackup2 from "../assets/dolls/product/mackup2.png";
import mackup3 from "../assets/dolls/product/mackup3.png";
import head3 from "../assets/dolls/product/head3.png";
import body1 from "../assets/dolls/product/body1.png";
import body2 from "../assets/dolls/product/body2.png";
import big1 from "../assets/dolls/product/big1.png";
import big2 from "../assets/dolls/product/big2.png";

//數量
const ProductPage = () => {
  const [cartValue, setCartValue] = useState(1);

  const incrementQuantity = () => {
    setCartValue(cartValue + 1);
  };

  const decrementQuantity = () => {
    if (cartValue > 1) {
      setCartValue(cartValue - 1);
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [mainImage, setMainImage] = useState(head1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [head1, head2, head3, head4];

  const changeMainImg = (newImage) => {
    setMainImage(newImage);
    setCurrentIndex(images.indexOf(newImage));
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setMainImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setMainImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };


  return (
    <>
      <section className="productPage">
        {/* 購物導覽 */}
        <div className="row">
          <div className="col-md-6 _boxzoom">
            <ul className="piclist">
              {images.map((image, index) => (
                <li key={index}>
                  <img
                    src={image}
                    alt=""
                    onClick={() => changeMainImg(image)}
                  />
                </li>
              ))}
            </ul>
            <div className="picZoom">
              <img className="my_img" src={mainImage} alt="" />
              <button className="prevBtn" onClick={handlePrevImage}>
                <img src={icon_arrow_L} alt="左" />
              </button>
              <button className="nextBtn" onClick={handleNextImage}>
                <img src={icon_arrow_R} alt="右" />
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="_product-detail-content">
              <div className="product-title">
                <p className="_p-name"> 酒心可可- COCO </p>
                <div className="p-list">
                  <span className="price"> NT$ 7,200 </span>
                </div>

                <button
                  className={`icon-heart ${isClicked ? "clicked" : ""}`}
                  onClick={handleClick}
                ></button>
              </div>
              <div className="_p-price-box">
                <div className="_p-features">
                  ·基礎內含 : 4分人偶單頭 / 4分男體 (43cm) & 4分女體 (42cm)
                  <br />
                  ·普通4分衣裝、假髮、鞋子 適用，官圖眼珠 14/7 mm
                </div>
                <div className="_p-add-cart">
                  <form className="ProductMenu">
                    <div className="skin">
                      <label for="skin">膚&nbsp;色：</label>
                      <Radio.Group
                        defaultValue="skin"
                        buttonStyle="solid"
                        className="custom-radio-group"
                      >
                        <Radio.Button value="白肌">白肌</Radio.Button>
                        <Radio.Button value="普肌">普肌</Radio.Button>
                        <Radio.Button value="粉白肌">粉白肌</Radio.Button>
                        <Radio.Button value="淺燒肌">淺燒肌</Radio.Button>
                      </Radio.Group>
                    </div>

                    <div className="gender">
                      <label for="gender">性&nbsp;別：</label>
                      <Radio.Group
                        defaultValue="gender"
                        buttonStyle="solid"
                        className="custom-radio-group"
                      >
                        <Radio.Button value="四分男體">四分男體</Radio.Button>
                        <Radio.Button value="四分女體">四分女體</Radio.Button>
                      </Radio.Group>
                    </div>

                    <div className="Classification">
                      <label for="Classification">分&nbsp;類：</label>
                      <Radio.Group
                        defaultValue="Classification"
                        buttonStyle="solid"
                        className="custom-radio-group"
                      >
                        <Radio.Button value="裸娃">
                          裸娃(不含服飾／不含妝面)
                        </Radio.Button>
                        <Radio.Button value="全套">
                          全套(含服飾／不含妝面)
                        </Radio.Button>
                      </Radio.Group>
                    </div>

                    <div className="makeupArtist">
                      <label for="makeupArtist">妝&nbsp;面：</label>
                      <Radio.Group
                        defaultValue="Classification"
                        buttonStyle="solid"
                        className="custom-radio-group"
                      >
                        <Radio.Button value="卿卿">卿卿</Radio.Button>
                        <Radio.Button value="貓貓">貓貓</Radio.Button>
                        <Radio.Button value="十二">十二</Radio.Button>
                      </Radio.Group>
                    </div>

                    <div className="quantity-box">
                      <label htmlFor="quantity">數&nbsp;量：</label>
                      <div className="quantity-container">
                        <span className="pqt-minus" onClick={decrementQuantity}>
                          -
                        </span>
                        <span className="quantity">{cartValue}</span>
                        <span className="pqt-plus" onClick={incrementQuantity}>
                          +
                        </span>
                      </div>
                    </div>

                    <div className="_p-qty-and-cart">
                      <div className="_p-add-cart">
                        <button className="btn-theme btn btn-cart" tabindex="0">
                          &nbsp;&nbsp;&nbsp;&nbsp;加入購物車
                        </button>
                        <Link to="/login">
                          <button
                            className="btn-theme btn btn-success"
                            tabindex="0"
                          >
                            &nbsp;&nbsp;&nbsp;立即購買
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="_p-features2">
              預購期間 : 2024/03/14 ~ 2024/03/27 11:00 am. (UTC+8)
              <br />
              依訂購情況可能會提前斷貨
            </div>
          </div>
        </div>

        {/* 商品說明 */}
        <div className="aboutInfo_product">
          <div className="featuredArticle">
            <div className="faL">
              <div className="faLsml">
                <h2>付款後開始製作</h2>
                <br />
                <p>商品無現貨付款後訂製</p>
                <br />
                <br />
                <h2>商品規格</h2>
                <br />
                <p>
                  – 人偶重量 3000
                  <br />
                  – 假髮尺寸 7-8 inch
                  <br />
                  – 眼珠尺寸 14mm
                  <br />– 鞋子尺寸 5.5*2.4cm
                </p>
              </div>
            </div>
            <div className="faR">
              <div className="faLsml2">
                <h2>商品的工期</h2>
                <br />
                <p>商品生產時間需5~8周，保證90天內出貨</p>
                <br />
                <br />
                <br />
                <h2>可選擇加購項目</h2>
                <br />
                <p>
                  -官方妝面
                  <br />
                  -自選妝師
                  <br />
                  ※注意，人偶妝面皆為手工繪製，可能因膚色／妝師繪製習慣不同有些微差異，屬於正常現象。
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 官方妝面圖標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">官方妝面圖</div>
            <hr className="line" />
            <div className="text1-2">With Mackup</div>
          </div>
        </div>
        {/* <!-- 官方妝面圖 --> */}

        <div className="withmackupImg">
          <div className="imgBig">
            <div className="img1">
              <img src={head1} alt="官方妝面圖照片1" />
            </div>
            <div className="img2">
              <img src={head2} alt="官方妝面圖照片2" />
            </div>
          </div>
        </div>

        {/* <!-- 無妝素頭圖標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">無妝素頭圖</div>
            <hr className="line" />
            <div className="text1-2">Without makeup</div>
          </div>
        </div>
        {/* <!-- 無妝素頭圖 --> */}

        <div className="mackupImg">
          <div className="imgBig2">
            <div className="img3">
              <img src={mackup1} alt="無妝素頭圖照片1" />
            </div>
            <div className="img4">
              <img src={mackup2} alt="無妝素頭圖照片2" />
            </div>
            <div className="img5">
              <img src={mackup3} alt="無妝素頭圖照片3" />
            </div>
          </div>
        </div>

        {/* <!-- 素體尺寸 - 男體標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">素體尺寸 - 男體</div>
            <hr className="line" />
            <div className="text1-2">About body data - male </div>
          </div>
        </div>
        {/* <!-- 素體尺寸 - 男體 --> */}
        <div className="body">
          <img src={bodyBoy} alt="人偶素體資訊-四分男體" />
        </div>
        <div className="body_ipad">
          <img src={body_boy_ipad} alt="人偶素體資訊-四分男體" />
        </div>
        <div className="body_phone">
          <img src={body_boy_phone} alt="人偶素體資訊-四分男體" />
        </div>

        {/* <!-- 素體尺寸 - 女體標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">素體尺寸 - 女體</div>
            <hr className="line" />
            <div className="text1-2">About body data - female</div>
          </div>
        </div>
        {/* <!-- 素體尺寸 - 女體 --> */}
        <div className="body">
          <img src={bodyGirl} alt="人偶素體資訊-四分女體" />
        </div>
        <div className="body_ipad">
          <img src={body_girl_ipad} alt="人偶素體資訊-四分男體" />
        </div>
        <div className="body_phone">
          <img src={body_girl_phone} alt="人偶素體資訊-四分男體" />
        </div>

        {/* <!-- 官方造型圖標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">官方造型圖</div>
            <hr className="line" />
            <div className="text1-2">Official styling pictures</div>
          </div>
        </div>
        {/* <!-- 官方造型圖 *3頁 -->
            <!-- 1頁 --> */}

        <div className="theImg">
          <div className="imgBig3">
            <div className="img6">
              <img src={big2} alt="官方造型圖照片1" />
            </div>
          </div>
        </div>

        {/* <!-- 2頁 --> */}

        <div className="theImg">
          <div className="imgBig4">
            <div className="img7">
              <img src={body1} alt="官方造型圖照片2" />
            </div>
            <div className="img8">
              <img src={body2} alt="官方造型圖照片3" />
            </div>
          </div>
        </div>
        {/* <!-- 3頁 --> */}

        <div className="theImg">
          <div className="imgBig5">
            <div className="img9">
              <img src={big1} alt="官方造型圖照片4" />
            </div>
          </div>
        </div>

        {/* <!-- 購買流程標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">購買流程</div>
            <hr className="line" />
            <div className="text1-2">Purchase process</div>
          </div>
        </div>
        {/* <!-- 購買流程 --> */}
        {/* 普通版 */}
        <div className="customerBig">
          <div className="customer">
            <img src={customer} alt="購物流程說明圖" />
          </div>
        </div>
        {/* ipad版 */}
        <div className="customerBig_ipad">
          <div className="customer">
            <img src={customer_ipad} alt="購物流程說明圖" />
          </div>
        </div>
        {/* 手機板 */}
        <div className="customerBig_phone">
          <div className="customer">
            <img src={customer_Plone} alt="購物流程說明圖" />
          </div>
        </div>

        {/* <!-- 關於產品標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">關於產品</div>
            <hr className="line" />
            <div className="text1-2">About Products</div>
          </div>
        </div>
        {/* <!-- 關於產品 --> */}
        <div className="aboutProduct">
          <div className="productInfo">
            <div className="boxL">
              <div className="information1">
                <div className="info-title1">
                  <p>人偶</p>
                </div>
                <div className="info-msg1">
                  <p>
                    –
                    樹脂娃娃的製作過程中，由於特殊的原料性質，可能會出現側線、小斑點和微氣泡等現象，這屬於無法避免的正常情況，
                    在製造過程中，必定產生側線，因此我們不提供去除側線的服務。
                    <br />
                    <br />
                    –
                    娃娃的材料調色完全是手工完成的，因此在不同的時間和不同的批次製作的娃娃之間可能存在色差問題。
                    由於手工製作過程中可能受到微塵等因素的影響，身體的其他部位，
                    除了頭部的臉部外，可能會出現小點、細微刮痕和微小氣泡，這些都屬於正常範圍內。
                    <br />
                    <br />
                    – 娃娃長時間穿著深色或暗色的衣服可能會導致染色，
                    使用化學物質（如稀釋劑、丙酮等）清潔時，可能會褪色或出現白化現象。
                    <br />
                    <br />–
                    由於樹脂娃娃根據材料的特性，隨著時間的推移可能會變色，長時間暴露在陽光下或在室內燈光下，
                    這種變色可能會更加明顯。請注意保管。
                  </p>
                </div>
              </div>
              <div className="information2">
                <div className="info-title2">
                  <p>眼珠</p>
                </div>
                <div className="info-msg2">
                  <p>
                    –
                    眼珠製作過程中可能產生細微氣泡、水口打磨划痕等現象，這些都不屬於瑕疵品。
                    <br />
                    –
                    眼珠為純手工製作，兩對眼珠可能會發生細微的不對稱和一些差異。
                    <br />–
                    眼珠為uv膠製作，長時間暴露在紫外線下，隨著時間的推移可能會變黃。
                  </p>
                </div>
              </div>
              <div className="information3">
                <div className="info-title3">
                  <p>假髮</p>
                </div>
                <div className="info-msg3">
                  <p>
                    –
                    由於純人工製作，每條假髮的長度、捲度等不可能完全相同。在整理和佩戴過程中，可能會有少量脫落的頭髮，屬於正常現象。
                    <br />
                    – 假髮長時間暴露在紫外線下，隨著時間的推移可能會變黃。
                    <br />– 因為由於材料的原因，請儘量避免接近高溫。
                  </p>
                </div>
              </div>
              <div className="information4">
                <div className="info-title4">
                  <p>服裝</p>
                </div>
                <div className="info-msg4">
                  <p>
                    –
                    服裝及配件完全手工製作，各部分的裁剪、水磨、縫紉、顏色等可能與樣品照片有細微差異。
                    <br />–
                    人偶若長時間穿著深色或暗色的衣服可能會導致移染，請留意此情況。
                  </p>
                </div>
              </div>
            </div>
            <div className="boxR"></div>
          </div>
        </div>

        {/* <!-- 訂購說明標題 --> */}
        <div className="title2">
          <div className="title2SML">
            <div className="text1-1">訂購說明</div>
            <hr className="line" />
            <div className="text1-2">Ordering Instructions</div>
          </div>
        </div>
        {/* <!-- 訂購說明 --> */}
        <div className="aboutBuy">
          <div className="info2">
            <div className="boxL2">
              <div className="information5">
                <div className="info-title5">
                  <p>關於配送</p>
                </div>
                <div className="info-msg5">
                  <p>
                    出貨範圍：全台灣 | 暫不提供海外配送服務
                    <br />
                    快遞公司：黑貓宅急便
                    <br />
                    快遞價格：台幣120元 起<br />
                    配送期間：約 2~3個工作天送達
                  </p>
                </div>
              </div>
              <div className="information6">
                <div className="info-title6">
                  <p>退換貨</p>
                </div>
                <div className="info-msg6">
                  <p>
                    根據訂單上的地址收到商品後，若發現瑕疵，請在7天內透過網頁問與答（Q&A）進行申請。
                    在退貨時，請確保包含確認訂單編號以及產品瑕疵的照片。
                    <br />
                    <br />
                    退回商品時，包裝不得損壞，商品的配件也不得缺失，需保持原樣。若由於偶夢的過失導致維修，本公司將負擔相關的運費。
                    <br />
                    <br />
                    在以下情況下，我們無法進行換貨或退貨：
                    <br />
                    <br />
                    - 已經使用過產品，或者由於包裝或產品損壞而導致產品損壞。
                    <br />
                    - 從配送日起經過7天後提出換貨或退貨的情況。
                    <br />- 因為使用者的單純變心或不注意而導致的損壞。
                  </p>
                </div>
              </div>
              <div className="information7">
                <div className="info-title7">
                  <p>售後規定</p>
                </div>
                <div className="info-msg7">
                  <p>
                    無償售後服務：
                    <br />
                    <br />
                    -
                    我們承諾在自配送完成之日起的7天內受理無償售後（AS）申請，並認定產品存在質量問題的情況下進行處理。
                    在售後服務期間，無論何時，我們都將全心全意為您提供支持，以確保您對我們的人偶產品感到滿意。
                    <br />
                    <br />
                    有償售後服務：
                    <br />
                    <br />
                    - 有償售後服務適用於因使用者的疏忽或過失而導致的商品破損。
                    有償售後服務的相關費用將由客戶負擔，包括郵費。請注意，娃頭AS必須退回，有關費用將不予退還。
                    <br />
                  </p>
                </div>
              </div>
              <div className="information8">
                <div className="info-title8">
                  <p>訂單取消</p>
                </div>
                <div className="info-msg8">
                  <p>
                    在付款後的24小時內提出訂單取消請求，將會立即退款，顧客如主動取消訂單，且由於客戶主觀改變主意或出現錯誤，客戶需負擔訂單付款、取消和退款過程中發生的任何手續費，並且退款金額可能會根據當前的匯率有所差異。
                    <br />
                    <br />
                    對於預售定制商品，一旦訂單支付後超過24小時，將無法取消。若客戶有取消訂單的需求，將收取庫存處理費用（商品金額的25%），因此請在訂購時慎重考慮。
                    請透過客服中心的問與答(Q&A)提交訂單取消申請。
                  </p>
                </div>
              </div>
            </div>
            <div className="boxR2"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductPage;
