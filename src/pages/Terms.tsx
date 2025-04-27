import './css/Terms.css'

const Terms = () => {
    return (
        <>
            <main className='about-main'>
                <h1 className="h1-title text-center">Terms & Conditions</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">Tems & Conditions</p>
                </div>
            </main>
            <div className="terms-main-line"></div>
            <section className='terms-content'>
                <h4 className="page-bl-above text-center">Tems & Conditions</h4>
                <h2 className="h2-title">Terms and Conditions</h2>
                <p className="body-one">
                    Welcome to VRNas. Please read these Terms and Conditions
                    carefully before using our website and services.
                </p>
                <div className="terms-box d-f">
                    <div>
                        <h5 className="terms-bl-title">Acceptance of Term</h5>
                        <p className="terms-bl-desc">
                            By accessing or using any part of our website or services,
                            you agree to be bound by these Terms and Conditions.
                            If you do not agree to all the terms and conditions of
                            this agreement, then you may not access the website or use any services.
                        </p>
                    </div>
                    <div>
                        <h5 className="terms-bl-title">Use of Website and Services</h5>
                        <p className="terms-bl-desc">
                            You may use our website and services solely for lawful
                            purposes and in accordance with these Terms and Conditions.
                            You agree not to use our website or services:
                        </p>
                        <ul className="terms-bl-list">
                            <li>
                                In any way that violates any applicable federal, state, local
                                or international law or regulation.
                            </li>
                            <li>
                                To transmit, or procure the sending of, any advertising or promotional material,
                                including any "junk mail", "chain letter" or "spam" or any other similar solicitation.
                            </li>
                            <li>
                                To impersonate or attempt to impersonate [Company Name], a [Company Name] employee,
                                another user or any other person or entity.
                            </li>
                            <li>
                                To engage in any other conduct that restricts or inhibits anyone's
                                use or enjoyment of the website or services, or which, as determined by us,
                                may harm [Company Name] or users of the website or services or expose them to liability.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="terms-bl-title">Intellectual Property</h5>
                        <p className="terms-bl-desc">
                            The content and materials available on our website and services,
                            including but not limited to text, graphics, logos, images,
                            and software, are the property of [Company Name] or its licensors
                            and are protected by copyright, trademark, and other intellectual property laws. <br />
                            You may not use any of our content or materials for commercial purposes without obtaining
                            a license to do so from [Company Name] or its licensors.
                        </p>
                    </div>
                    <div>
                        <h5 className="terms-bl-title">Limitation of Liability</h5>
                        <p className="terms-bl-desc">
                            In no event shall [Company Name] be liable for any direct,
                            indirect, incidental, consequential, special, or exemplary
                            damages arising out of or in connection with your use of
                            our website or services.
                        </p>
                    </div>
                    <div>
                        <h5 className="terms-bl-title">Changes to Terms and Conditions</h5>
                        <p className="terms-bl-desc">
                            We reserve the right, at our sole discretion, to modify
                            or replace these Terms and Conditions at any time.
                            By continuing to access or use our website and services
                            after any revisions become effective, you agree to be
                            bound by the revised terms.
                        </p>
                    </div>
                    <div>
                        <h5 className="terms-bl-title">Contact Us</h5>
                        <p className="terms-bl-desc">
                            If you have any questions about these Terms and Conditions, 
                            please contact us using the information provided on our contact page.
                        </p>
                    </div>
                </div>
            </section>
            <section className='terms-subscribe d-f jc-sb align-center'>
                <h3 className="terms-subscribe-title">
                    Subscribe to our newsletter for latest updates
                </h3>
                <form action="" className='terms-subscribe-fm d-f jc-sb'>
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

export default Terms