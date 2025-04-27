import { Link } from 'react-router-dom'
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f jc-sb">
        <div>
          <div><img src="/images/logo.svg" alt="Logo" /></div>
          <div className="footer-social d-f">
            <a href="" className="d-b"><img src="/images/footer-social/1.png" alt="footer-social1" /></a>
            <a href="" className="d-b"><img src="/images/footer-social/2.png" alt="footer-social2" /></a>
            <a href="" className="d-b"><img src="/images/footer-social/3.png" alt="footer-social3" /></a>
            <a href="" className="d-b"><img src="/images/footer-social/4.png" alt="footer-social4" /></a>
          </div>
        </div>
        <div>
          <h3 className="footer-bl-title">Quicklinks</h3>
          <ul className="footer-bl-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing Plan</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/team">Our Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Support</h3>
          <ul className="footer-bl-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Tems & Conditions</Link></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Need Help?</h3>
          <ul className="footer-bl-list">
            <li className='footer-address'>Tanjung Sari Street no.48, Pontianak City</li>
            <li className='footer-email'>Support@VRNas.com</li>
            <li className='footer-phone'>+123 456 7890</li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <p className="footer-copyright body-one">&copy; Copyright 2023, All Rights Reserved</p>
    </footer>
  )
}

export default Footer