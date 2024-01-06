import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Liên hệ"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">LIÊN HỆ</h1>
          <p className="text-justify mt-2">
          bất kỳ câu hỏi và thông tin nào về sản phẩm, vui lòng gọi bất cứ lúc nào chúng tôi 24/7
          
          </p>
          <p className="mt-3">
            <BiMailSend /> : sasukeowl011@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0362465647
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
