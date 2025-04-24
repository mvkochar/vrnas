import { ServiceItem } from '../components'
import ServicesList from '../components/ServicesList'
import './css/Service.css'

const Service = () => {
    return (
        <>
            <main className='service-main'>
                <h1 className="h1-title text-center">Our Service</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">Our Service</p>
                </div>
            </main>
            <div className="service-main-line"></div>
            <section className='service-about'>
                <div className="d-f jc-sb">
                    <div>
                        <h4 className="page-bl-above">Our service</h4>
                        <h2 className="h2-title">Our Service</h2>
                    </div>
                    <p className="body-one">
                        We use the latest VR hardware and software to create high-quality
                        VR experiences that are accessible and affordable. Our goal is
                        to provide exceptional customer service and support, and our team
                        is always available to answer any questions and address any concerns
                        you may have.
                    </p>
                </div>
                <div className="service-about-box d-f">
                    {
                        ServicesList.map((service) => {
                            return (
                                <ServiceItem
                                    key={`service${service.id}`}
                                    {...service}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className="service-facts d-f jc-sb">
                <dl>
                    <dt className='page-bl-above'>Happy clients</dt>
                    <dd className='h2-title'>123k+</dd>
                </dl>
                <dl>
                    <dt className='page-bl-above'>Project complete</dt>
                    <dd className='h2-title'>300k+</dd>
                </dl>
                <dl>
                    <dt className='page-bl-above'>Years experience</dt>
                    <dd className='h2-title'>10+</dd>
                </dl>
            </section>
            <section className='service-pricing'>
                <h4 className="page-bl-above">Our pricing</h4>
                <h2 className="h2-title">Affordable VR Services for Everyone</h2>
                <p className="body-one">
                    At VRNas, we believe that everyone should have access to the benefits of VR.
                    That's why we offer a range of pricing options to meet the needs of any budget.
                </p>

                <div className="service-pricing-content d-f align-center">
                    <div className="service-pricing-box d-f">
                        <div className="service-pricing-item d-f">
                            <div><img src="/images/pricing-icon.png" alt="pricing-icon" /></div>
                            <div>
                                <h3 className="pricing-item-title">Customizable Packages</h3>
                                <p className="pricing-item-desc">
                                    We understand that each project is unique, so we offer customizable
                                    packages to ensure that you get the services you need at a price
                                    that works for you. Our team will work with you to create a package
                                    that meets your specific goals and budget.
                                </p>
                            </div>
                        </div>
                        <div className="service-pricing-item d-f">
                            <div><img src="/images/pricing-icon.png" alt="pricing-icon" /></div>
                            <div>
                                <h3 className="pricing-item-title">Flexible Payment Options</h3>
                                <p className="pricing-item-desc">
                                    We offer flexible payment options to make it easy for you
                                    to get started with our services. We accept various payment
                                    methods, including credit cards, bank transfers, and PayPal,
                                    and we can also work with you to create a payment plan that
                                    suits your needs.
                                </p>
                            </div>
                        </div>
                        <div className="service-pricing-item d-f">
                            <div><img src="/images/pricing-icon.png" alt="pricing-icon" /></div>
                            <div>
                                <h3 className="pricing-item-title">Satisfaction Guarantee</h3>
                                <p className="pricing-item-desc">
                                    We stand behind our services and are committed to ensuring
                                    that you are completely satisfied with the final product.
                                    If for any reason you are not happy with our services,
                                    we will work with you to make it right or provide a full refund.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="service-pricing-line"></div>
                </div>
                <div className="service-pricing-info">
                    <h4 className="pricing-info-above">Start from</h4>
                    <h3 className="pricing-info-title">$99</h3>
                    <a href="" className="pricing-info-started">Get Started</a>
                    <p className="pricing-info-note">30 Days Moneyback Guarantee</p>
                </div>
            </section>
            <section className='service-testimonial'>
                <h4 className="page-bl-above text-center">Testimonial</h4>
                <h2 className="h2-title">What Our Clients Are Saying</h2>
                <div className="service-testimonial-img"><img src="/images/home-testimonial.png" alt="home-testimonial" /></div>
                <div className="service-testimonial-item d-f align-center avatar-one">
                    <div className="service-testimonial-avatar">
                        <div><img src="/images/testimonial-avatars/1.png" alt="testimonial-avatars1" /></div>
                    </div>
                    <div className="testimonial-item-content">
                        <p className="testimonial-item-desc">
                            The team was professional, responsive, and a pleasure to work with.
                            We highly recommend VRNas for any VR needs.
                        </p>
                        <p className="testimonial-item-info"><span>Robert Fox</span> - CEO Anono</p>
                    </div>
                </div>
                <div className="service-testimonial-avatar avatar-two">
                    <div><img src="/images/testimonial-avatars/2.png" alt="testimonial-avatars2" /></div>
                </div>
                <div className="service-testimonial-avatar avatar-three">
                    <div><img src="/images/testimonial-avatars/3.png" alt="testimonial-avatars3" /></div>
                </div>
                <div className="service-testimonial-avatar avatar-four">
                    <div><img src="/images/testimonial-avatars/4.png" alt="testimonial-avatars4" /></div>
                </div>
                <div className="service-testimonial-avatar avatar-five">
                    <div><img src="/images/testimonial-avatars/5.png" alt="testimonial-avatars5" /></div>
                </div>
                <div className="service-testimonial-avatar avatar-six">
                    <div><img src="/images/testimonial-avatars/6.png" alt="testimonial-avatars6" /></div>
                </div>
            </section>
            <section className='service-subscribe d-f jc-sb align-center'>
                <h3 className="home-subscribe-title">
                    Subscribe to our newsletter for latest updates
                </h3>
                <form action="" className='service-subscribe-fm d-f jc-sb'>
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

export default Service