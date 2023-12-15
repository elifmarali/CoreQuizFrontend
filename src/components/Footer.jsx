import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

function Footer() {
    const navigate = useNavigate();
    return (
<div className="footer">
    <ul className="footerOptions">
    <li className="footerOption">
            <button
              onClick={() => navigate("/certificates")}
              className="nav-link"
            >
              Sertifikalar
            </button>
          </li>
          <li className="footerOption">
            <button
              onClick={() => navigate("/hakkimizda")}
              className="nav-link"
            >
              Hakkımızda
            </button>
          </li>
          <li className="footerOption">Kariyer</li>
          <li className="footerOption">Sınavlar</li>
    </ul>
<div className="socialMedia">
      <div className="facebook">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="white"/>
        </a>
      </div>
      <div className="twitter">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="white"/>
        </a>
      </div>
      <div className="google">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} color="white"/>
        </a>
      </div>
      <div className="instagram">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} color="white"/>
        </a>
      </div>
      <div className="youtube">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} color="white"/>
        </a>
      </div>
    </div>
</div>
  );
}

export default Footer;
