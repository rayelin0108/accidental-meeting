import React from "react";
import { Form, Input, Select, Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./faq.scss";
import Q from "../assets/fqa/Q.png";
import A from "../assets/fqa/A.png";
import Description from "../Components/Description";

const Faq = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  function beforeUpload(file) {

    const isJpgOrPng = file.type === 'image/jpeg/png/jpg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('頭像須為JPG/PNG檔案');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('照片上傳檔案大小限制2MB內!');
      return false;
    }
    return isJpgOrPng && isLt2M;
  };

  function onChange(info) {
    if (info.file.status === "done") {
      message.success(`${info.file.name} 上傳成功`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} 上傳失敗.`);
    }
  }

  return (
    <>
      <Description title="Q & A" />
      <section id="FQ">
        {/* <!-- 人偶相關 Q & A  標題區 --> */}
        <div className="fqaTitle1">
          <h3>人偶相關 Q & A </h3>
          <hr className="fqaLine" />
          <h5>About Doll</h5>
        </div>
        {/* <!-- 人偶相關 Q & A  共5小格 --> */}
        <div className="aboutDoll">
          {/* <!-- 小框 --> */}
          <div className="aboutDollSML">
            {/* <!-- 會話大框(包含Q&A) --> */}
            <div className="qa1">
              {/* <!-- 問 --> */}
              <div className="cos">
                {/* <!-- 問的ICON --> */}
                <div className="iconCos">
                  <img src={Q} alt="" />
                </div>
                {/* <!-- 問的聊天氣泡 --> */}
                <div className="chatCos">
                  <div className="yours messages">
                    <div className="message last">
                      Q: 人偶服飾是否可以單獨購買？
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 答 --> */}
              <div className="us">
                {/* <!-- 答的聊天氣泡 --> */}
                <div className="chatUs">
                  <div className="mine messages">
                    <div className="message last">
                      A:
                      是的，我們提供單獨購買人偶服飾的選項，您可以在網站上找到相應的商品頁面。
                    </div>
                  </div>
                </div>
                {/* <!-- 答的ICON --> */}
                <div className="iconUs">
                  <img src={A} alt="我們的icon" />
                </div>
              </div>
            </div>
            {/* <!-- 開始重複第一個框架--> */}
            <div className="qa2">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages">
                    <div className="message last">
                      Q: 人偶的妝面是否可以自行繪製？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages">
                    <div className="message last">
                      A:
                      當然，您可以選擇非偶遇的官方妝師為人偶上妝，或自行為人偶繪製。
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
                  <div className="yours messages">
                    <div className="message last">
                      Q: 如何清潔和保養人偶娃娃？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages">
                    <div className="message last">
                      A:
                      我們會附上清潔和保養指南，以協助您妥善照顧人偶。請參考商品附帶的使用手冊。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa4">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages">
                    <div className="message last">
                      Q: 人偶娃娃的關節是否容易鬆動？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages">
                    <div className="message last">
                      A:
                      我們的人偶關節經過精心設計，以確保其穩定性。如有任何問題，請隨時聯繫我們的客服。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa5">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages">
                    <div className="message last">
                      Q: 這是真人大小的人偶娃娃嗎？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages">
                    <div className="message last">
                      A:
                      非真人尺寸娃娃，BJD人偶娃娃是按比例縮放的小型尺寸娃娃。詳細尺寸規格可在商品頁面查閱。
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

        {/* <!-- 訂購相關 Q & A  標題區 --> */}

        <div className="fqaTitle2">
          <h3>訂購相關 Q & A </h3>
          <hr className="fqaLine" />
          <h5>About Order</h5>
        </div>

        {/* <!-- 訂購相關 Q & A  共9小格 -->
    <!-- 重複(人偶相關 Q & A  共5小格)框架，只有CSS裡面小改顏色設定 --> */}
        <div className="aboutorder">
          <div className="aboutorderSML">
            <div className="qa6">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">
                      Q: 是否有實體店面可以參觀？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      目前我們主要在線上銷售，暫無實體店面。您可以在網站上方便地瀏覽和購買我們的商品。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
                {/* <div className="fqa_line1"></div> */}
              </div>
            </div>
            <div className="qa7">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">Q: 是否提供國際運送？</div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A: 目前暫不提供此國際運送服務。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa8">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">
                      Q: 如何追蹤訂單運送狀態？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      在您的帳戶中，您可以查看訂單歷史，同時我們會提供運送追蹤號碼，以便您追蹤訂單運送狀態。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa9">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">
                      Q: 我已匯款完成，為何訂單進度未更新？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      匯款付款需要一些時間處理，如有疑慮，請聯繫我們的客服以進行進一步的確認。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa10">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">
                      Q: 是否提供信用卡付款方式？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      是我們支持信用卡付款方式，支援多種信用卡類型。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa11">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">Q: 如何使用信用卡付款？</div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      在結帳時，請選擇信用卡付款方式，然後輸入相應的信用卡資訊。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa12">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">
                      Q: 退換貨時是否需要保留運送包材？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      是的，請保留完整的運送包材，以便我們更好地協助您處理退換貨事宜。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa13">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">
                      Q: 收到商品後發現娃體瑕疵，怎麼處理？
                    </div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      請在開箱過程全程錄影，若發現娃體有瑕疵或破損，請立即聯繫客服專員提供錄影證據處理。
                    </div>
                  </div>
                </div>
                <div className="iconUs">
                  <img src={A} alt="A" />
                </div>
              </div>
            </div>
            <div className="qa14">
              <div className="cos">
                <div className="iconCos">
                  <img src={Q} alt="Q" />
                </div>
                <div className="chatCos">
                  <div className="yours messages2">
                    <div className="message last2">Q: 是否接受客製化訂單？</div>
                  </div>
                </div>
              </div>
              <div className="us">
                <div className="chatUs">
                  <div className="mine messages2">
                    <div className="message last2">
                      A:
                      目前暫不提供客製化訂單服務，但您可以在我們的商品範疇中找到多樣化的選擇。
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

        {/* <!-- 聯繫我們 --> */}
        <div className="contactUS">
          <div className="fqaTitle3">
            <h3>其他問題 - 聯繫我們</h3>
            <hr className="fqaLine" />
            <h5>contact us</h5>
          </div>
          <div className="QAillustrate">
            <div className="QAillustrate-text">
              <p>
                ·當您要求售後服務時，請提供您的訂單號、證書或認證號碼，並附上相關照片。
                <br />
                ·為了更快速且準確地回覆您的問題，請在提問時告知您的訂單編號。
                <br />
                ·關於相關諮詢的回覆需要2~3個工作天，依據工作時間，工作日不含國定假日、週六日。
                <br />
                ·某些諮詢需要進行相關部門確認，因此可能需要一段時間來確認，敬請耐心等候。
                <br />
                ·在提問之前，請務必查閱“常見問題（Q&A）”或許能快速解決您要詢問的相關內容。
                <br />
                <br />
                感謝您的合作！
              </p>
            </div>

            <div className="contactUS-1">
              <div className="contactUS-h4">
                <h4>聯繫我們</h4>
              </div>

              <div className="QAfrom">
                <Form method="post">
                  <Form.Item
                    name="phoneNumber"
                    label="連絡電話"
                    initialValues={{
                      prefix: '+886',
                    }}
                    rules={[
                      {
                        required: true,
                        message: "請輸入手機號碼",
                      },
                    ]}
                  >
                    <Input
                      placeholder='0912345678'
                      maxLength={10}
                      style={{
                        width: "300px",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label="E-mail"
                    name="E-mail"
                    value="E-mail"
                    rules={[
                      {
                        required: true,
                        message: "請填寫E-mail",
                        whitespace: false, //禁止空白
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      placeholder="請填寫E-mail"
                      style={{ height: "35px", width: "300px" }}
                    />
                  </Form.Item>

                  <Form.Item
                    label="問題類別"
                    name="請選擇問題類別"
                    rules={[
                      {
                        required: true,
                        message: "請選擇問題類別",
                        whitespace: false, //禁止空白
                      },
                    ]}
                  >
                    <Select
                      label="問題類別"
                      defaultValue="請選擇問題"
                      style={{
                        width: 200,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          label: "訂單相關問題",
                          options: [
                            {
                              label: "訂單狀態查詢",
                              value: "訂單狀態查詢",
                            },
                            {
                              label: "訂單修改或取消",
                              value: "訂單修改或取消",
                            },
                            {
                              label: "訂單支付問題",
                              value: "訂單支付問題",
                            },
                            {
                              label: "訂單追蹤與物流查詢",
                              value: "訂單追蹤與物流查詢",
                            },
                          ],
                        },
                        {
                          label: "商品問題",
                          options: [
                            {
                              label: "尺寸、顏色、規格等問題",
                              value: "尺寸、顏色、規格等問題",
                            },
                            {
                              label: "商品庫存狀態",
                              value: "商品庫存狀態",
                            },
                            {
                              label: "商品資訊詢問",
                              value: "商品資訊詢問",
                            },
                          ],
                        },
                        {
                          label: "退換貨與退款問題-",
                          options: [
                            {
                              label: "退貨政策與流程",
                              value: "退貨政策與流程",
                            },
                            {
                              label: "退款進度查詢",
                              value: "退款進度查詢",
                            },
                            {
                              label: "退貨運費相關問題",
                              value: "退貨運費相關問題",
                            },
                          ],
                        },
                        {
                          label: "帳戶相關問題",
                          options: [
                            {
                              label: "帳戶註冊與登入問題",
                              value: "帳戶註冊與登入問題",
                            },
                            {
                              label: "密碼重置",
                              value: "密碼重置",
                            },
                            {
                              label: "帳戶信息修改",
                              value: "帳戶信息修改",
                            },
                            {
                              label: "帳戶安全性與隱私保護",
                              value: "帳戶安全性與隱私保護",
                            },
                          ],
                        },
                        {
                          label: "其他問題-",
                          options: [
                            {
                              label: "其他問題",
                              value: "其他問題",
                            },
                          ],
                        },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item name="intro">
                    <Input.TextArea
                      placeholder="需要注意的地方請於備註留言~ (例如：公司、宿舍、管理員簽收...等)"
                      showCount
                      maxLength={200}
                      style={{
                        width: "90%",
                        maxWidth: "1000px",
                        height: "210px",
                      }}
                    />
                  </Form.Item>

                  <Upload beforeUpload={beforeUpload} onChange={onChange}>
                    <Button icon={<UploadOutlined />} multiple>
                      上傳圖片
                    </Button>
                  </Upload>
                  <br />
                  <p>*僅限jpg、png、pdf 檔案類型</p>
                  <br />
                  <div className="QA_btn">
                    <input
                      type="submit"
                      name="QA_submit"
                      id="QA_submit"
                      value="送&nbsp;&nbsp;出"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
