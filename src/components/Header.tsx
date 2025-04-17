import './css/Header.css'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div><img src="/images/logo.svg" alt="Logo" /></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><a href="">Home</a></li>
                    <li className="header-nav-item"><a href="">About Us</a></li>
                    <li className="header-nav-item"><a href="">Service</a></li>
                    <li className="header-nav-item"><a href="">Page</a></li>
                    <li className="header-nav-item"><a href="">Blog</a></li>
                </ul>
            </nav>
            <a href="" className="header-contact">Contact Us</a>
        </header>
    )
}

export default Header