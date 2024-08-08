import React from 'react';
import { Link } from 'react-router-dom';
import classes from './footer.module.css';
import visaLogo from '../../assets/download (1).png';
import mastercardLogo from '../../assets/cbe.jpg';
import paypalLogo from '../../assets/YenepayLogo.png';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.about}>
          <h4>About Us</h4>
          <p>
            Welcome to our cafe! We offer the best in food and beverages with a
            unique Ethiopian twist. Visit us for a memorable experience!
          </p>
        </div>
        <div className={classes.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className={classes.payment}>
          <h4>Payment Methods</h4>
          <div className={classes.paymentLogos}>
            <img src={visaLogo} alt="Visa" />
            <img src={mastercardLogo} alt="Mastercard" />
            <img src={paypalLogo} alt="PayPal" />
          </div>
        </div>
      </div>
      <div className={classes.developer}>
        <p>
          Website developed by <strong>Kullehe (ኩለሔ) Software Solution</strong>.
        </p>
      </div>
    </footer>
  );
}
