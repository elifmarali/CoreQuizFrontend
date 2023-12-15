import axios from "axios";
import { jwtDecode } from "jwt-decode";


const API_URL = "https://localhost:44309/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        Email: email,
        Password: password,
      })
      .then(response => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, surname, email, password) {
    return axios
      .post(API_URL + "register", {
        FirstName: name,
        LastName: surname,
        Email: email,
        Password: password,
      })
      .then(response => {
        // Başarılı durumda işlemleri burada yapabilirsiniz.
        console.log("Başarılı:", response.data);
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(error => {
        // Hata durumunda işlemleri burada yapabilirsiniz.
        console.error("Axios Error:", error);

        // Hata durumunda özel bir mesaj döndürebilir veya promise'ı reject edebilirsiniz.
        // Örneğin:
        // return Promise.reject('Bir hata oluştu');
      });
  }




  getUsernameFromToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user); // DEBUG: user objesini kontrol et
 
    if (user && user.data && user.data.token) {
      const token = user.data.token;
      const decodedToken = jwtDecode(token);
      
      // Token içindeki istediğiniz talebe ulaşarak kullanıcı adını alabilirsiniz
      const username = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      // const userID = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      // console.log("UserID:", userID);
      return username || null;
    }
    return null;
  }
 
}


export default new AuthService();
