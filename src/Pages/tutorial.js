import React, { useState, useEffect } from "react";
import Description from "../Components/Description";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import "./tutorial.scss";
import Q from "../assets/fqa/Q.png";
import A from "../assets/fqa/A.png";
import bowtieYellow from "../assets/tutorial/bowtie-yellow.svg";
import bowtiePink from "../assets/tutorial/bowtie-pink.svg";
import tutorialIconJump from "../assets/tutorial/icon.jump.png";
import tutorialIcon1 from "../assets/tutorial/coin/icon_coin_1.png";
import tutorialIcon2 from "../assets/tutorial/coin/icon_coin_2.png";
import tutorialIcon3 from "../assets/tutorial/coin/icon_coin_3.png";
import tutorialIcon4 from "../assets/tutorial/coin/icon_coin_4.png";
import tutorialClean from "../assets/tutorial/keep/keep_icon4.svg";
import tutorialDoll from "../assets/tutorial/keep/keep_icon1.svg";
import tutorialSave from "../assets/tutorial/keep/keep_icon3.svg";
import tutorialMsakUp from "../assets/tutorial/keep/keep_icon2.svg";
import tutorialAfter1 from "../assets/tutorial/recipeGallery/After1.png";
import tutorialAfter2 from "../assets/tutorial/recipeGallery/After2.png";
import tutorialAfter3 from "../assets/tutorial/recipeGallery/After3.png";
import choose_l1 from "../assets/tutorial/recipeGallery/l1.png";
import choose_l2 from "../assets/tutorial/recipeGallery/l2.png";
import choose_l3 from "../assets/tutorial/recipeGallery/l3.png";
import choose_r1 from "../assets/tutorial/recipeGallery/r1.png";
import choose_r2 from "../assets/tutorial/recipeGallery/r2.png";
import choose_r3 from "../assets/tutorial/recipeGallery/r3.png";
import keep1 from "../assets/tutorial/recipeGallery/keep1.png";
import keep2 from "../assets/tutorial/recipeGallery/keep2.png";
import keep3 from "../assets/tutorial/recipeGallery/keep3.png";
import keep4 from "../assets/tutorial/recipeGallery/keep4.png";
import iconSearch from "../assets/icon/icon-search-pink.svg";
import tutorialIpad1 from "../assets/tutorial/coin/tutorialIpad1.png";
import tutorialIpad2 from "../assets/tutorial/coin/tutorialIpad2.png";
import tutorialPhone1 from "../assets/tutorial/coin/tutorialPhone1.png";
import tutorialPhone2 from "../assets/tutorial/coin/tutorialPhone2.png";
const smoothScroll = (strid) => {
  console.log("strid=", strid);

  var targetElement = document.getElementById(strid);
  console.log(targetElement);
  if (targetElement) {
    var targetPosition = targetElement.offsetTop;
    console.log("targetPosition=", targetPosition);
    // 减去偏移量
    var scrollPosition = targetPosition - 100;

    // 使用scrollTo滾動到計算後的位置
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};

//跳轉置頂按鈕
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="topBtn"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      TOP
    </button>
  );
}

const Tutorial = () => {
  const showModal = (imageUrl, imageWidth, imageHeight, imageAlt) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: imageAlt,
      imageWidth: imageWidth,
      imageHeight: imageHeight,
      imageAlt: "Custom image",
      showCloseButton: true,
      showConfirmButton: false,
      closeButtonAriaLabel: "Close this dialog",
    });
  };


  return (
    <>
      <Description title="新手教學" />
      <section id="tutorialBox">
        {/* <!-- 開頭按鈕跳轉區 --> */}
        {/* 只在900px顯示 */}
        <div className="newBox">
          <div className="newBox_sml">
            <div className="search">
              <input
                className="search-bar"
                type="text"
                name="search"
                id="search"
                placeholder="如何安裝眼珠?"
              />
              <button className="search-btn">
                <img src={iconSearch} alt="icon搜索按鈕" />
              </button>
            </div>
          </div>
        </div>
        <div className="jump500px">
          <div className="jump">
            {/* <!-- 上半icon+對話框 --> */}
            <div className="hiCos">
              <div className="iconTop">
                <img src={tutorialIcon3} alt="" />
              </div>
              <div className="chatBubble">
                <p>
                  親愛的萌新寶寶，歡迎來到偶遇的新手教學
                  <br />
                  請根據您的需要，點選下方連結進行跳轉!
                </p>
              </div>
            </div>
            {/* <!-- 下半跳轉區 --> */}
            <div className="jumpTo">
              <div className="iconJump">
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("whatisbjd")}
                  >
                    <img src={bowtieYellow} alt="" />
                  </div>
                  <p>甚麼是BJD ?</p>
                </div>
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("chooseyourdoll")}
                  >
                    <img src={bowtiePink} alt="" />
                  </div>
                  <p>選擇你的娃娃</p>
                </div>
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("afterbuyingthedoll")}
                  >
                    <img src={bowtieYellow} alt="" />
                  </div>
                  <p>買完娃之後呢</p>
                </div>
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("howtoinstallthehead")}
                  >
                    <img src={bowtiePink} alt="" />
                  </div>
                  <p>如何安裝頭部</p>
                </div>
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("howtoinstalleyeballs")}
                  >
                    <img src={bowtieYellow} alt="" />
                  </div>
                  <p>如何安裝眼珠</p>
                </div>
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("aboutkeeping")}
                  >
                    <img src={bowtieYellow} alt="" />
                  </div>
                  <p>關於日常養護</p>
                </div>
                <div className="iconJumpSML">
                  <div
                    className="jumpPic"
                    onClick={() => smoothScroll("tutorial_fqa")}
                  >
                    <img src={bowtiePink} alt="" />
                  </div>
                  <p>萌新常見答疑</p>
                </div>
              </div>

              {/* <!-- 這是圖片 --> */}
              <div className="iconPic">
                <img src={tutorialIconJump} alt="裝飾圖" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 甚麼是BJD標題 --> */}
        <div className="title1" id="whatisbjd">
          <div className="title1SML">
            <div className="text1-1">什麼是BJD?</div>
            <hr className="line" />
            <div className="text1-2">What is BJD Dolls</div>
          </div>
        </div>
        {/* <!-- 甚麼是BJD電腦版 --> */}
        <div className=" tutorialBig520px">
          {/* <!-- 小框 --> */}
          <div className="wsbjd">
            {/* <!-- 左側裝飾線段 --> */}
            <div className="wsbjdLine"></div>

            {/* <!-- 右側氣泡文字大框 --> */}
            <div className="wsbjdBigBox">
              {/* <!-- 小框 --> */}
              <div className="wsbjdBox">
                {/* <!-- 氣泡文字Icon --> */}
                <div className="wsbjdIcon">
                  <img src={tutorialIcon1} alt="圖案1" />
                </div>
                {/* <!-- 氣泡文字內容 --> */}
                <div className="wsbjdMsg">
                  <h1>
                    球體關節人偶（英語：Ball-jointed
                    doll，縮寫：BJD）起源自歐洲，泛指各種擁有球型關節的可動人偶。球體關節人形體型標準，細節精緻，
                    由於關鍵部位裝有球型的關節，使人形能夠做出許多接近於真人的姿勢。而石膏、陶瓷、木材及塑膠等材料皆可以用來製作人形。而如今，大多數BJD
                    一般由一種質地堅硬的聚亞安脂構成，手感細膩光滑，中部空心，各個部件用皮筋、包膠鋁線、S鉤連結。但是因為人形的造價不菲，故收藏者多以成
                    人為主。球體關節人形目前主要由東亞國家和地區生產（依發展時序，如日本、韓國、香港、中國）。這種有著介於真人和日本動漫之間外貌的球形
                    關節人偶一般被稱作亞洲球形關節人偶（ABJD）。
                  </h1>
                </div>
              </div>

              {/* <!-- 小框 --> */}
              <div className="wsbjdBox">
                {/* <!-- 氣泡文字Icon --> */}
                <div className="wsbjdIcon">
                  <img src={tutorialIcon2} alt="圖案2" />
                </div>
                {/* <!-- 氣泡文字內容 --> */}
                <div className="wsbjdMsg">
                  <h1>
                    BJD人偶可選擇更換局部配件，可選定膚色，可隨意更換妝面，頭髮，眼珠，睫毛，服裝鞋襪以打扮出自己喜歡的造型和氣質。
                    而且不同的髮型、妝面、眼珠都會改變娃的形象。
                    <br />
                    <br />
                    身高通常以「分」來計算，即180cm除以x分即為人偶的大致身高，但在同樣的身高範圍內，男娃的身高一般高於女娃的身高。BJD娃娃不僅可以更換服裝，
                    還能修改化妝，調換手腳，頭髮，甚至眼球等。因此BJD對玩家的魅力是無窮的，它給予玩家一個毫無拘束的展現自己個性的空間。
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 電腦板不顯示 */}
        <div className="tutorialIpad1_img">
          <img src={tutorialIpad1} alt="" />
        </div>
        <div className="tutorialPhone1_img">
          <img src={tutorialPhone1} alt="" />
        </div>
        {/* <!-- 關於娃娃尺寸電腦版 --> */}
        <div className="WhatisBjd_600px">
          {/* <!-- 小框 --> */}
          <div className="aboutSize">
            {/* <!-- 左大框 --> */}
            <div className="aboutSizeBigBox">
              {/* <!-- 小小框 --> */}
              <div className="aboutSizeSml">
                {/* <!-- 氣泡文字內容 --> */}
                <div className="aboutSizeChat">
                  <h1>
                    BJD的身高以"分"為單位，是以180cm除以X分（X為2、3、4、6、8、12）所得的數字，即為該尺寸娃娃的大約身高。
                  </h1>
                  <div className="dollInfo">
                    <div className="dollHight">
                      <span>‧大3分娃娃 ：身高在70cm~80cm左右</span>
                      <br />
                      <span>‧3分娃娃 ：身高在50cm~69cm左右</span>
                      <br />
                      <span>‧4分娃娃 ：身高在42cm~45cm左右</span>
                      <br />
                      <span>‧6分娃娃 ：身高在30cm~26cm左右</span>
                      <br />
                      <span>‧8分娃娃 ：身高在22cm左右</span>
                      <br />
                    </div>
                    <div className="dollweight">
                      <span>‧大3分娃娃 : 約略 2.5 kg</span>
                      <br />
                      <span>‧3分娃娃 : 約略 1356 g</span>
                      <br />
                      <span>‧4分娃娃 : 約略 605-635 g</span>
                      <br />
                      <span>‧6分娃娃 : 約略 223 g</span>
                      <br />
                      <span>‧8分娃娃 : 約略 180 g </span>
                      <br />
                    </div>
                  </div>
                </div>
                {/* <!-- icon --> */}
                <div className="aboutSizeIcon">
                  <img src={tutorialIcon3} alt="圖案3" />
                </div>
              </div>
              {/* <!-- 小小框 --> */}
              <div className="aboutSizeSml">
                {/* <!-- 氣泡文字內容 --> */}
                <div className="aboutSizeChat">
                  <h1>
                    BJD人偶的外表年齡在非特體的情況下，通常與人偶的尺寸掛勾
                    ,此處標準僅針對“偶遇”生產之人偶。
                  </h1>
                  <div className="smlInfo">
                    <span>·大3分娃娃 ： 通常為20歲以上，通常為發育完全的成年人
                    </span>
                    <br />
                    <span>·3分娃娃 ： 通常為16-25歲之間，是成熟知性大姐姐大哥哥
                    </span>
                    <br />
                    <span>·4分娃娃 ： 通常為12-16歲之間，是帶有稚氣的少年少女
                    </span>
                    <br />
                    <span>·6分娃娃 ： 通常為06-10歲之間，是可愛的小朋友</span>
                    <br />
                    <span>·8分娃娃 ： 通常為03-06歲之間</span>
                  </div>
                </div>
                {/* <!-- icon --> */}
                <div className="aboutSizeIcon">
                  <img src={tutorialIcon4} alt="圖案4" />
                </div>
              </div>
            </div>
            {/* <!-- 右框線段 --> */}
            <div className="aboutSizeLine">
              <div className="aboutSizeLine1"></div>
              <div className="aboutSizeLine2"></div>
            </div>
          </div>
        </div>

        {/* 電腦板不顯示 */}
        <div className="tutorialIpad2_img">
          <img src={tutorialIpad2} alt="" />
        </div>
        <div className="tutorialPhone2_img">
          <img src={tutorialPhone2} alt="" />
        </div>
        {/* <!-- 選擇您的娃娃標題  --> */}
        <div className="title1" id="chooseyourdoll">
          <div className="title1SML">
            <div className="text1-1">選擇您的娃娃</div>
            <hr className="line" />
            <div className="text1-2">Choose your doll</div>
          </div>
        </div>
        {/* <!-- 選擇您的娃娃 6個彈窗--> */}
        <div className="tutorialBig600px">
          <div className="csUrDoll">
            <div className="csUrDollSML">
              <div className="L3">
                <div
                  className="w1"
                  onClick={() => showModal(choose_l1)}
                  aria-label=" 甚麼尺寸的娃娃適合萌新呢? 教學圖片"
                >
                  <p>甚麼尺寸的娃娃適合萌新呢?</p>
                </div>
                <div
                  className="w2"
                  onClick={() => showModal(choose_l2)}
                  aria-label=" 該買男娃還是女娃?可以給男娃穿女裝嗎? 教學圖片"
                >
                  <p>該買男娃還是女娃?可以給男娃穿女裝嗎?</p>
                </div>
                <div
                  className="w3"
                  onClick={() => showModal(choose_l3)}
                  aria-label=" 甚麼膚色的娃娃更適合我? 教學圖片"
                >
                  <p>甚麼膚色的娃娃更適合我?</p>
                </div>
              </div>
              <div className="BigIcon">
                <img src={tutorialIcon3} alt="icon" />
              </div>
              <div className="R3">
                <div
                  className="w4"
                  onClick={() => showModal(choose_r1)}
                  aria-label=" 我該如何為娃娃選購衣服? 教學圖片"
                >
                  <p>我該如何為娃娃選購衣服?</p>
                </div>
                <div
                  className="w5"
                  onClick={() => showModal(choose_r2)}
                  aria-label=" 我不想購買偶遇官方妝面，該如何投妝? 教學圖片"
                >
                  <p>我不想購買偶遇官方妝面，該如何投妝?</p>
                </div>
                <div
                  className="w6"
                  onClick={() => showModal(choose_r3)}
                  aria-label=" 第一次買娃娃，我需要準備甚麼? 教學圖片"
                >
                  <p>第一次買娃娃，我需要準備甚麼?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 買完娃娃，之後呢?標題 --> */}
        <div className="title1" id="afterbuyingthedoll">
          <div className="title1SML">
            <div className="text1-1">買完娃娃之後呢</div>
            <hr className="line" />
            <div className="text1-2">
              After buying the doll, what happens next?
            </div>
          </div>
        </div>
        {/* <!-- 買完娃娃，之後呢? 3個彈窗 --> */}
        <div className="next600px">
          <div className="WtNext">
            <div className="icon-3">
              <div
                className="round"
                onClick={() => showModal(tutorialAfter1)}
                aria-label=" 買了素體裸娃 (無妝，無衣裝)教學圖片"
              >
                <p>
                  {" "}
                  買了素體裸娃
                  <br />
                  (無妝，無衣裝)
                </p>
              </div>
              <div
                className="round"
                onClick={() => showModal(tutorialAfter2)}
                aria-label="買了素體裸娃(娃+衣裝)教學圖片"
              >
                <p>
                  買了大全套
                  <br /> (娃+衣裝)
                </p>
              </div>
              <div
                className="round"
                onClick={() => showModal(tutorialAfter3)}
                aria-label="買了大全套+妝面 (娃+衣裝+妝面)教學圖片"
              >
                <p>
                  買了大全套+妝面
                  <br />
                  (娃+衣裝+妝面)
                </p>
              </div>
            </div>
            <div className="line-3"></div>
          </div>
        </div>
        {/* <!-- 如何為BJD安裝頭部標題 --> */}
        <div className="title1" id="howtoinstallthehead">
          <div className="title1SML">
            <div className="text1-1">如何為BJD安裝頭部</div>
            <hr className="line" />
            <div className="text1-2">Installing the head for BJD dolls</div>
          </div>
        </div>
        {/* <!-- 如何為BJD安裝頭部(影片) --> */}
        <div className="video_px">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gixA1WC0uTs?si=E-zIBn3PlwcnMY3j"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* <!-- 如何為安裝眼珠?標題 --> */}
        <div className="title1" id="howtoinstalleyeballs">
          <div className="title1SML">
            <div className="text1-1">如何為BJD安裝眼珠</div>
            <hr className="line" />
            <div className="text1-2"> Installing eyeballs for BJD dolls</div>
          </div>
        </div>
        {/* <!-- 如何為安裝眼珠?(影片) --> */}
        <div className="video_px">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YvKqr_3EunM?si=qKMZudqGj-98A9cn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* <!-- 關於日常養護 標題 --> */}
        <div className="title1" id="aboutkeeping">
          <div className="title1SML">
            <div className="text1-1">BJD的日常養護</div>
            <hr className="line" />
            <div className="text1-2"> Daily maintenance of BJD Dolls</div>
          </div>
        </div>
        {/* <!-- 關於日常養護 4個彈窗 --> */}
        <div className="tutorialBig600px">
          <div className="keep">
            <div className="topW">
              <div className="topPink"></div>
              <div className="topSML">
                <p>
                  BJD人偶為樹脂材質，需要妥善保存，同時因人偶的妝面為損耗品的特性
                  良好的保存環境也有助於延長BJD人偶的使用壽命，以下是日常保存與養護詳細說明:
                </p>
              </div>
            </div>
            <div className="iconKeep">
              <div className="tutorial_R">
                <div className="keepSML" onClick={() => showModal(keep1)}>
                  <p>樹脂特性</p>
                  <div className="iconBig">
                    <img src={tutorialDoll} alt="關於樹脂特性教學 圖片" />
                  </div>
                </div>
                <div className="keepSML" onClick={() => showModal(keep2)}>
                  <p>妝面保存</p>
                  <div className="iconBig">
                    <img src={tutorialMsakUp} alt="關於妝面保存教學 圖片" />
                  </div>
                </div>
              </div>
              <div className="tutorial_L">
                <div className="keepSML" onClick={() => showModal(keep3)}>
                  <p>人偶放置</p>
                  <div className="iconBig">
                    <img src={tutorialSave} alt="關於人偶放置教學 圖片" />
                  </div>
                </div>
                <div className="keepSML" onClick={() => showModal(keep4)}>
                  <p>人偶清潔</p>
                  <div className="iconBig">
                    <img src={tutorialClean} alt="關於人偶清潔教學 圖片" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 常見答疑標題 --> */}
        <div className="title1" id="tutorial_fqa">
          <div className="title1SML">
            <div className="text1-1">常見答疑</div>
            <hr className="line" />
            <div className="text1-2">FAQ</div>
          </div>
        </div>
        {/* <!-- 常見答疑  --> */}
        <div className="big800px">
          <div className="fqa">
            <div className="qa1">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages3">
                    <div className="message last3">
                      <p>Q: 我是萌新，該如何分辨正版（Z娃）、盜版（D娃）？</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages3">
                    <div className="message last3">
                      <p>A: 建議萌新寶寶首次最好直接從官方渠道購買。</p>
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa2">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages3">
                    <div className="message last3">
                      <p> Q: 我是學生，沒有那麼多錢，可以買BJD嗎?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages3">
                    <div className="message last3">
                      <p>
                        A:建議在不降低生活條件的前提下購買BJD娃娃，娃娃只是收藏品，請量力而為。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa3">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages3">
                    <div className="message last3">
                      <p>
                        Q: 我看完了新手教學，還是有不太清楚的地方，該怎麼辦?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages3">
                    <div className="message last3">
                      <p>
                        A: 您可以在
                        Q&A頁面中詢問偶遇，偶遇也會根據萌新寶寶們的問題持續優化新手教學頁面。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </section>
    </>
  );
};
export default Tutorial;
