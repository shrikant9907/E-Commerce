import React from 'react';
import './footer.css';
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-section">
        <div className="footer-link">
          <div className="footer-links">
            <h4>For Ecommerce</h4>
            <a href="/customer"><p>Customer</p></a>
            <a href="/services"><p>Services</p></a>
            <a href="/support"><p>Support</p></a>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <a href="/blog"><p>Blog</p></a>
            <a href="/guides"><p>Guides</p></a>
            <a href="/help"><p>Help Center</p></a>
          </div>
          <div className="footer-links">
            <h4>Partners</h4>
            <a href="/partners"><p>Saving Tech</p></a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="/about"><p>About</p></a>
            <a href="/press"><p>Press</p></a>
            <a href="/career"><p>Career</p></a>
            <a href="/contact"><p>Contact</p></a>
          </div>
          <div className="footer-links">
            <h4>Coming soon on</h4>
            <div className="social-media">
              <p><BsInstagram /></p>
              <p><BsTwitter /></p>
              <p><BsYoutube /></p>
              <p><BsLinkedin /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
