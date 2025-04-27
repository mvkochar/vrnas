import './css/PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <>
            <main className='privacy-main'>
                <h1 className="h1-title text-center">Privacy Policy</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">Privacy Policy</p>
                </div>
            </main>
            <div className="privacy-main-line"></div>
            <section className='privacy-content'>
                <h4 className="page-bl-above text-center">Privacy Policy</h4>
                <h2 className="h2-title">Privacy Policy</h2>
                <p className="body-one">
                    This Privacy Policy describes how [Company Name] collects, uses,
                    and protects the personal information of our website visitors and customers.
                </p>
                <div className="privacy-box d-f">
                    <div>
                        <h5 className="privacy-bl-title">Information We Collect</h5>
                        <p className="privacy-bl-desc">
                            We may collect the following types of personal information:
                        </p>
                        <ul className='privacy-bl-list'>
                            <li>Name, email address, and other contact information.</li>
                            <li>Demographic information such as age, gender, and location.</li>
                            <li>Payment information such as credit card details.</li>
                            <li>Information about how you use our website and services.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">How We Use Your Information</h5>
                        <p className="privacy-bl-desc">
                            We may use your personal information for the following purposes:
                        </p>
                        <ul className='privacy-bl-list'>
                            <li>To provide you with our services and products.</li>
                            <li>To process payments and fulfill orders.</li>
                            <li>To send you marketing and promotional materials.</li>
                            <li>To improve our website and services.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">How We Protect Your Information</h5>
                        <p className="privacy-bl-desc">
                            We implement a variety of security measures to maintain
                            the safety of your personal information when you place
                            an order or enter, submit, or access your personal information.
                            We use encryption to protect sensitive information transmitted
                            online, and we also protect your information offline.
                        </p>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">Information Sharing</h5>
                        <p className="privacy-bl-desc">
                            We do not sell or rent your personal information to third parties.
                            However, we may share your information with our trusted third-party
                            service providers who assist us in operating our website and services.
                        </p>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">Cookies and Tracking</h5>
                        <p className="privacy-bl-desc">
                            We use cookies and other tracking technologies to collect
                            information about your browsing behavior and preferences.
                            This information is used to personalize your experience on
                            our website and to analyze how visitors use our website.
                        </p>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">Your Rights</h5>
                        <p className="privacy-bl-desc">
                            You have the right to access, update, or delete your personal information.
                            You can contact us using the information provided on our contact page
                            to exercise these rights.
                        </p>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">Changes to Privacy Policy</h5>
                        <p className="privacy-bl-desc">
                            We reserve the right to update this Privacy Policy at any time.
                            We will notify you of any changes by posting the new Privacy Policy on our website.
                        </p>
                    </div>
                    <div>
                        <h5 className="privacy-bl-title">Contact Us</h5>
                        <p className="privacy-bl-desc">
                            If you have any questions about our Privacy Policy, 
                            please contact us using the information provided on our contact page.
                        </p>
                    </div>
                </div>
            </section>
            <section className='privacy-subscribe d-f jc-sb align-center'>
                <h3 className="privacy-subscribe-title">
                    Subscribe to our newsletter for latest updates
                </h3>
                <form action="" className='privacy-subscribe-fm d-f jc-sb'>
                    <input type="email" name="subscribeEmail" placeholder='Enter your email address' />
                    <button type="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9569 0.387988C12.6234 0.0457321 12.1299 -0.0817752 11.6697 0.052443L0.938664 3.17302C0.453132 3.3079 0.108991 3.69512 0.0162868 4.18703C-0.0784187 4.68767 0.252383 5.32319 0.68456 5.58894L4.03993 7.65121C4.38407 7.8626 4.82826 7.80958 5.11304 7.52236L8.95528 3.6562C9.14869 3.45487 9.46882 3.45487 9.66224 3.6562C9.85565 3.85082 9.85565 4.16623 9.66224 4.36756L5.81333 8.23438C5.52788 8.52094 5.47452 8.96721 5.68461 9.3135L7.73478 12.7025C7.97488 13.1052 8.38838 13.3333 8.8419 13.3333C8.89525 13.3333 8.95528 13.3333 9.00863 13.3266C9.52885 13.2595 9.94235 12.9038 10.0957 12.4005L13.277 1.68319C13.4171 1.22685 13.2904 0.730245 12.9569 0.387988Z" fill="white" />
                        </svg>
                    </button>
                </form>
            </section>
        </>
    )
}

export default PrivacyPolicy