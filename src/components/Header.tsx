import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div><img src="/images/logo.svg" alt="Logo" /></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><Link to="/">Home</Link></li>
                    <li className="header-nav-item"><Link to="/about">About Us</Link></li>
                    <li className="header-nav-item"><Link to="/service">Service</Link></li>
                    <li className="header-nav-item"><Link to="/pricing">Pricing Plan</Link></li>
                    <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
                    <li className="header-nav-item"><Link to="/team">Team</Link></li>
                </ul>
            </nav>
            <Link to="/contact" className="header-contact">Contact Us</Link>
        </header>
    )
}

export default Header