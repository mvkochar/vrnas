import { FeaturesItem, ServiceItem } from '../components'
import FeaturesList from '../components/FeaturesList'
import ServicesList from '../components/ServicesList'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <div className="home-main-box d-f">
          <div>
            <h1 className="h1-title">Immerse Yourself <br /> in Virtual Reality</h1>
            <p className="body-one">
              Experience Unforgettable Events in VR.
              Bring your events to life like never
              before with our VR services
            </p>
            <a href="" className="home-main-more">Discover more</a>
            <div className="home-main-clients d-f align-center">
              <div className="clients-info d-f align-center">
                <div><img src="/images/happy-client.png" alt="happy-client" /></div>
                <p className="clients-info-desc"><span>32k+</span> Happy Client</p>
              </div>
              <div><img src="/images/clients-video.png" alt="clients-video" /></div>
            </div>
          </div>
          <div><img src="/images/home-main.png" alt="home-main" /></div>
        </div>
        <div className="home-main-advantages d-f">
          <div className="advantages-item">
            <div><img src="/images/adv1.png" alt="adv1" /></div>
            <h3 className="advantages-item-title">Expertise</h3>
            <p className="advantages-item-desc">
              Our team consists of experienced VR developers, designers,
              and technicians who have a passion for VR and a commitment
              to delivering quality work and give the best service
            </p>
          </div>
          <div className="advantages-item">
            <div><img src="/images/adv2.png" alt="adv2" /></div>
            <h3 className="advantages-item-title">Customization</h3>
            <p className="advantages-item-desc">
              Every client is unique, and we believe every
              VR experience should be too. We'll work with
              you to create a customized solution that meets
              your specific needs and goals
            </p>
          </div>
          <div className="advantages-item">
            <div><img src="/images/adv3.png" alt="adv3" /></div>
            <h3 className="advantages-item-title">Service</h3>
            <p className="advantages-item-desc">
              We believe in providing exceptional customer service,
              from initial consultation to final delivery. Our goal
              is to ensure you're satisfied with every aspect of your VR experience.
            </p>
          </div>
        </div>
      </main>
      <section className='home-about d-f'>
        <div><img src="/images/home-about.png" alt="home-about" /></div>
        <div>
          <h4 className="page-bl-above">About Us</h4>
          <h2 className="h2-title">
            Bring your events to life <br /> like never before with <br /> our VR services.
          </h2>
          <p className="body-one">
            VRNas is a leading provider of VR services for education,
            entertainment, architecture, and events. Our mission is
            to bring the power of virtual reality to everyone, allowing
            them to explore new worlds, learn in new ways, and experience
            events in a whole new light.
          </p>
          <ul className="home-about-list">
            <li>Cutting-Edge Technology</li>
            <li>Versatile Applications</li>
            <li>Affordable and Accessible</li>
          </ul>
          <a href="" className="home-about-more">Read more</a>
        </div>
      </section>
      <section className='home-service'>
        <div className="home-service-caption d-f">
          <div>
            <h4 className="page-bl-above">Our Service</h4>
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
        <div className="home-service-box d-f">
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
      <section className='home-features d-f align-center'>
          <div>
            <h4 className="page-bl-above">Why choose us</h4>
            <h2 className="h2-title">Why Choose Us for Your <br /> VR Needs</h2>
            <div className="home-features-content d-f">
            {
                FeaturesList.map((feature)=> {
                  return (
                    <FeaturesItem
                      key={`feature${feature.id}`}
                      {...feature}
                    />
                  )
                })
              }
            </div>
          </div>
          <div><img src="/images/home-features.png" alt="home-features" /></div>
      </section>
    </>
  )
}

export default Home