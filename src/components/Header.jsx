import {useState,useEffect} from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authServices";


const Header = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // const user = AuthService.getCurrentUser();
    const username = AuthService.getUsernameFromToken(); // Yeni eklenen fonksiyonu kullan
    setCurrentUser(username ); // Eğer username varsa onu, yoksa user'ı kullan
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
    <div className="header">
      <div className="logo">CoreQuiz</div>
      <div className="nav-list">
        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Sınavlar
            </a>
            <div className="submenu">
              <ul>
                <li>
                  <a href="#">Sınav 1</a>
                </li>
                <li>
                  <a href="#">Sınav 2</a>
                </li>
                <li>
                  <a href="#">Sınav 3</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigate("/certificates")}
              className="nav-link"
            >
              Sertifikalar
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigate("/hakkimizda")}
              className="nav-link"
            >
              Hakkımızda
            </button>
          </li>
        </ul>
      </div>
      <div className="headerButtonsContainer">
         {currentUser ? (
          <div className="userOptions">
            <button className="logOutButton" onClick={handleLogout}>
              Çıkış Yap
            </button>
             <span className="userOptionsFullName">Merhaba, {currentUser}!</span> 
          </div>
        ) : (
          <>
            <button onClick={() => navigate("/register")} className="nav-button">
              Kayıt Ol
            </button>
            <button onClick={() => navigate("/login")} className="nav-button">
              Giriş Yap
            </button>
          </>
        )} 
      </div>
    </div>
  );
};

export default Header;
