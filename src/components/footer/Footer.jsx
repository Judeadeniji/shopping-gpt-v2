import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const copyRightDate = new Date().getFullYear();
  const myTwitter = "https://www.twitter.com/okorojames_";
  return (
    <div
      className="footer--container"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <div
        className="icon--rows"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          marginBottom: "20px",
        }}
      >
        <i
          className="fa-brands fa-facebook footer--icons"
          style={{ color: "#3b5998" }}
        ></i>
        <i
          className="fa-brands fa-twitter footer--icons"
          style={{ color: "#00acee" }}
        ></i>
        <i className="fa-brands fa-instagram footer--icons"></i>
        <i
          className="fa-brands fa-youtube footer--icons"
          style={{ color: "#c4302b" }}
        ></i>
      </div>
      <div className="link--rows">
        <Link to="">About</Link>
        <Link to="">Need Help?</Link>
        <Link to="">Privacy</Link>
        <Link to="">Terms of use</Link>
        <Link to="">Products</Link>
        <Link to="">Advertising</Link>
      </div>
      <p
        className="last--footer"
        style={{ fontWeight: "300", fontSize: "18px" }}
      >
        <Link to={myTwitter}>JamexTech&nbsp;</Link>&copy;&nbsp;
        {copyRightDate}
      </p>
    </div>
  );
};

export default Footer;
