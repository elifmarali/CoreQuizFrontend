import Header from "./Header";
import "./Hakkimizda.css";

function Hakkimizda() {
  return (
    <div className="aboutContainer">
      <Header />
      <div className="container">
        <div className="content">
          <h1>Hakkımızda</h1>

          <div className="section">
            <h2>Misyonumuz ve Vizyonumuz</h2>
            <p>
              &emsp;&ensp;CoreQuiz, interaktif bir sınav platformudur. Kurumlar,
              çalışanlarına özel sınavlar düzenleyebilir ve başarıya ulaşan
              katılımcılara özel olarak hazırlanan sertifikalar sunabilir. .NET
              ve React teknolojileri kullanılarak geliştirilen platformumuz,
              kullanıcı dostu arayüzü ve güvenilir altyapısıyla öne çıkıyor.
            </p>
          </div>

          <div className="section">
            <h2>Ekip</h2>
            <ul>
              <li>Doğukan MUSLUKÇU&nbsp; - &nbsp;Back-End</li>
              <li>Berke ÇELİKEL&nbsp; - &nbsp;Back-End</li>
              <li>Mehmet Fatih KARA&nbsp; - &nbsp;Front-End</li>
              <li>Murat Özkan KAYA&nbsp; - &nbsp;Front-End</li>
              <li>Elif MARALI&nbsp; - &nbsp;Front-End</li>
            </ul>
          </div>

          <div className="section">
            <h2>Ekibin Geçmiş Başarılar</h2>
            <p>
              &emsp;&ensp;"Boodle" planlama projesi ile Yasemin Hoca'nın
              dersinden başarıyla geçmek :
            </p>
            <p>&emsp;&ensp;Haber Sistemi</p>
          </div>

          <div className="section">
            <h2>İletişim Bilgileri</h2>
            <ul>
              <li>Doğukan MUSLUKÇU&nbsp; - &nbsp;202003011008</li>
              <li>Berke ÇELİKEL&nbsp; - &nbsp;202003011027</li>
              <li>Mehmet Fatih KARA&nbsp; - &nbsp;202003011048</li>
              <li>Murat Özkan KAYA&nbsp; - &nbsp;202003011036</li>
              <li>Elif MARALI&nbsp; - &nbsp;202003011021</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
