import { FeaturesItem } from '../components'
import FeaturesList from '../components/FeaturesList'
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
            </section>
        </>
    )
}

export default About