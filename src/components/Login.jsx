import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "../services/authServices";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timeMessage, setTimeMessage] = useState("");

  useEffect(() => {
    animationLetter();
    const timeMessage = getTimeMessage();
    setTimeMessage(timeMessage);
  }, []);

  const getTimeMessage = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours > 6 && hours < 12) {
      return "Günaydın";
    } else if (hours >= 12 && hours < 18) {
      return "Tünaydın";
    } else {
      return "İyi Geceler";
    }
  };

  const animationLetter = () => {
    document.querySelectorAll("label").forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letters, i) =>
            `<span style="transition-delay:${i * 50}ms">${letters}</span>`
        )
        .join("");
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const loginResult = await AuthService.login(email, password);
      console.log("Login success:", loginResult);
      if (loginResult) {
        toast.success("Giriş Başarılı!");
        setTimeout(() => {
          navigate("/");
        }, 150);
      } else {
        toast.error("Giriş Başarısız! Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Giriş işlemi sırasında bir hata oluştu.");
    }
  };

  return (
    <main>
      <ToastContainer />
      <section>
        <div className="welcomeSection">
          <span className="hello">Merhaba!</span>
          <span>{timeMessage}</span>
        </div>
        <div className="topSection">
          <span>Giriş</span>Yap!
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="username">E-mail</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Şifre</label>
        </div>
        <div className="buttonContainer">
          <button onClick={handleClick} className="loginButton">
            Giriş Yap
          </button>
        </div>
      </section>
    </main>
  );
}

export default Login;
