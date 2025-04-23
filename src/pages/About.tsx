import { FaqItem, FeaturesItem, TeamMember } from '../components'
import FaqItemsList from '../components/FaqItemsList'
import FeaturesList from '../components/FeaturesList'
import TeamMembersList from '../components/TeamMembersList'
import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main'>
                <h1 className="h1-title text-center">About Us</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">About us</p>
                </div>
            </main>
            <div className="about-main-line"></div>
            <section className='about-vision d-f align-center'>
                <div>
                    <h4 className="page-bl-above">About Us</h4>
                    <h2 className="h2-title">Bringing Your Vision to Life: Learn About VRNas</h2>
                    <p className="body-one">
                        VRNas is a leading provider of VR services for education,
                        entertainment, architecture, and events. Our mission is
                        to bring the power of virtual reality to everyone, allowing
                        them to explore new worlds, learn in new ways, and experience
                        events in a whole new light.
                    </p>
                    <p className="body-one">
                        Our team consists of experienced VR developers, designers,
                        and technicians who are passionate about VR and dedicated
                        to delivering the highest quality work. We use the latest
                        VR hardware and software to create immersive, interactive
                        experiences that are tailored to your specific needs.
                    </p>
                    <p className="body-one">
                        From initial consultation to final delivery, we are committed
                        to providing exceptional customer service. Our goal is to ensure
                        that you are completely satisfied with every aspect of your VR experience.
                    </p>
                </div>
                <div><img src="/images/about-vision.png" alt="about-vision" /></div>
            </section>
            <section className='about-advantages'>
                <h4 className="page-bl-above text-center">Why choose us</h4>
                <h2 className="h2-title">Empowering Your Virtual Reality Experience</h2>
                <div className="about-advantages-box d-f jc-sb">
                    <div className="about-advantages-item">
                        <div><img src="/images/adv1.png" alt="adv1" /></div>
                        <h3 className="advantages-item-title">Expertise</h3>
                        <p className="advantages-item-desc">
                            Our team consists of experienced VR developers, designers,
                            and technicians who have a passion for VR and a commitment
                            to delivering quality work and give the best service
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div><img src="/images/adv2.png" alt="adv2" /></div>
                        <h3 className="advantages-item-title">Customization</h3>
                        <p className="advantages-item-desc">
                            Every client is unique, and we believe every VR experience
                            should be too. We'll work with you to create a customized
                            solution that meets your specific needs and goals
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div><img src="/images/adv2.png" alt="adv2" /></div>
                        <h3 className="advantages-item-title">Service</h3>
                        <p className="advantages-item-desc">
                            We believe in providing exceptional customer service,
                            from initial consultation to final delivery. Our goal
                            is to ensure you're satisfied with every aspect of your VR experience.
                        </p>
                    </div>
                </div>
            </section>
            <section className='about-features'>
                <h4 className="page-bl-above">Why choose us</h4>
                <h2 className="h2-title">Why Choose Us for Your VR Needs</h2>
                <div className="about-features-box d-f">
                    {
                        FeaturesList.map((feature) => {
                            return (
                                <FeaturesItem
                                    key={`about-features${feature.id}`}
                                    {...feature}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='about-team'>
                <div className="d-f jc-sb">
                    <div>
                        <h4 className="page-bl-above">Our team</h4>
                        <h2 className="h2-title">Our Professionals Team</h2>
                    </div>
                    <a href="" className="about-team-all">See all</a>
                </div>
                <div className="about-team-box d-f jc-sb">
                    {
                        TeamMembersList.filter((elem) => elem.id < 5).map((member) => {
                            return (
                                <TeamMember
                                    key={`team-member${member.id}`}
                                    {...member}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='about-partners'>
                <h4 className="page-bl-above text-center">Our Trusted Partners</h4>
                <h2 className="h2-title">Discover the Companies We Work With</h2>
                <div className="about-partners-img"><img src="/images/about-partners.png" alt="about-partners" /></div>
            </section>
            <section className='about-faq'>
                <h4 className="page-bl-above text-center">Faq</h4>
                <h2 className="h2-title">Frequently Asked Questions</h2>
                <p className="body-one">
                    At VRNas, we want to make sure that you have all the information
                    you need to make informed decisions about our VR services.
                    Here are some of the most common questions we receive:
                </p>
                <div className="about-faq-box d-f">
                    {
                        FaqItemsList.map((faq) => {
                            return (
                                <FaqItem
                                    key={faq.id}
                                    {...faq}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='about-subscribe d-f jc-sb align-center'>
                <h3 className="about-subscribe-title">
                    Subscribe to our newsletter for latest updates
                </h3>
                <form action="" className='about-subscribe-fm d-f jc-sb'>
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

export default About