import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Liên hệ - Cafe"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Highlands Coffee® được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê 
          và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần 
          phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
