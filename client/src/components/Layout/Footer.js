import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">Web thực hiện bởi&copy; Mạnh và Đạt</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>
        <Link to="/contact">Liên hệ</Link>
        <Link to="/policy">Chính sách bảo mật</Link>
      </p>
    </div>
  );
};

export default Footer;
