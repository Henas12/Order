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
        <div className={classes.socialMedia}>
          <h4>Follow Us</h4>
          <div className={classes.socialMediaIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/TikTok_logo.svg" alt="TikTok" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
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
