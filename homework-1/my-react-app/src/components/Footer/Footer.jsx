import React from 'react';
import "./Footer.scss"
import facebookPic from '../../assets/logo--facebook.svg';
import instaPic from '../../assets/logo--instagram.svg';

const Footer = () =>{
    return (
        <footer className="footer" id="footer">
          <section className="footer-content">
            <div className="footer-menu">
              <h4>Menu</h4>
              <ul>
                <li><a href="#">New arrivals</a></li>
                <li><a href="#">Best sellers</a></li>
                <li><a href="#">Recently viewed</a></li>
                <li><a href="#">Popular this week</a></li>
                <li><a href="#">All products</a></li>
              </ul>
            </div>
    
            <div className="footer-categories">
  <h4>Categories</h4>
  <ul>
    <li><a href="#">T-Shirts</a></li>
    <li><a href="#">Jeans</a></li>
    <li><a href="#">Jackets</a></li>
    <li><a href="#">Sneakers</a></li>
    <li><a href="#">Accessories</a></li>
    <li><a href="#">Hoodies</a></li>
  </ul>
</div>
    
            <div className="footer-company">
              <h4>Our company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Vacancies</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Returns policy</a></li>
              </ul>
            </div>
    
           
          </section>
    
          <div className="footer_bottom">
            <div className="footer-copyright">
              <p>&copy; 2023 Avion LTD</p>
              <div className="footer-social">
                <ul>
                  <li><a href="#"><img src={facebookPic} alt="Facebook" /></a></li>
                  <li><a href="#"><img src={instaPic} alt="Instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;