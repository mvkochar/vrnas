import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <h1 className="h1-title text-center">Contact Us</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">Contact Us</p>
                </div>
            </main>
            <div className="contact-main-line"></div>
            <div className="contact-info d-f">
                <div className="contact-info-item">
                    <div><img src="/images/contact-info1.png" alt="contact-info1" /></div>
                    <h3 className="info-item-title">Email</h3>
                    <h4 className="info-item-subtitle">Support@VRNas.com</h4>
                </div>
                <div className="contact-info-item">
                    <div><img src="/images/contact-info2.png" alt="contact-info2" /></div>
                    <h3 className="info-item-title">Address</h3>
                    <h4 className="info-item-subtitle">Tanjung Sari Street no.48, Pontianak City</h4>
                </div>
                <div className="contact-info-item">
                    <div><img src="/images/contact-info3.png" alt="contact-info3" /></div>
                    <h3 className="info-item-title">Phone</h3>
                    <h4 className="info-item-subtitle">+123 456 7890</h4>
                </div>
            </div>
        </>
    )
}

export default Contact