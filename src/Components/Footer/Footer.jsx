import React from "react";
import "./Footer.scss";
import "../Container/Container.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="footer">
            <div className="footer__author">
              <h2>O autorze</h2>
              <p>
                Od wielu lat interesuję się dietetyką kliniczną. Poświęciłem mnóstwo czasu na testowanie różnych metod żywieniowych aż trafiłem na Dietę Samuraja, która towarzyszy mi do dziś.
              </p>
              <div className="footer__author__icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="footer__adress">
              <h2>Znajdź nas</h2>
              <p>al. Jerozolimskie 358/123, <br></br>00-888 Warszawa, Polska</p>
              <p>tel. 699 698 697</p>
              <a href="mailto:samuraicalc@gmail.com" target="_blank" rel="noopener">samuraicalc@gmail.com</a>
            </div>
            <div className="footer__nav">
              <h2>Sekcje</h2>
              <ul className="footer__nav__list">
                <li>
                  <a href="/">Strona główna</a>
                </li>
                <li>
                  <a href="/">Dieta Samuraja</a>
                </li>
                <li>
                  <a href="/">Kalkulator</a>
                </li>
                <li>
                  <a href="/">Kontakt</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyrights">
          <p>&#169; 2020 Samurai Calc</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
