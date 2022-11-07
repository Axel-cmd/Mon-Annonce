import React from "react";
import playStore from "../images/playstore.png";
import appStore from "../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Télécharger notre App </h4>
        <p>Télécharger sur Android et IOS mobile</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Mon-Annonce</h1>
        <p>La bonne qualité est notre priorité</p>

        <p>Copyrights 2021 &copy; mon-annonce</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;