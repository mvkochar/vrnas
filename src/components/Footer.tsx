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
            <li><a href="">Home</a></li>
            <li><a href="">Pricing Plan</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Our Team</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Support</h3>
          <ul className="footer-bl-list">
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Tems & Conditions</a></li>
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