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
              FeaturesList.map((feature) => {
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
      <section className='home-started'>
        <h4 className="page-bl-above text-center">How to get started</h4>
        <h2 className="h2-title">Bringing Your Virtual Reality <br /> Dreams to Life</h2>
        <div className="div"><img src="/images/home-started-video.png" alt="home-started-video" /></div>
        <a href="" className="home-started-get">Get started</a>
      </section>
      <section className='home-testimonial'>
        <h4 className="page-bl-above text-center">Testimonial</h4>
        <h2 className="h2-title">What Our Clients Are Saying</h2>
        <div className="home-testimonial-img"><img src="/images/home-testimonial.png" alt="home-testimonial" /></div>
        <div className="home-testimonial-item d-f align-center avatar-one">
          <div className="home-testimonial-avatar">
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
        <div className="home-testimonial-avatar avatar-two">
          <div><img src="/images/testimonial-avatars/2.png" alt="testimonial-avatars2" /></div>
        </div>
        <div className="home-testimonial-avatar avatar-three">
          <div><img src="/images/testimonial-avatars/3.png" alt="testimonial-avatars3" /></div>
        </div>
        <div className="home-testimonial-avatar avatar-four">
          <div><img src="/images/testimonial-avatars/4.png" alt="testimonial-avatars4" /></div>
        </div>
        <div className="home-testimonial-avatar avatar-five">
          <div><img src="/images/testimonial-avatars/5.png" alt="testimonial-avatars5" /></div>
        </div>
        <div className="home-testimonial-avatar avatar-six">
          <div><img src="/images/testimonial-avatars/6.png" alt="testimonial-avatars6" /></div>
        </div>
      </section>
      <section className='home-pricing'>
        <h4 className="page-bl-above">Our pricing</h4>
        <h2 className="h2-title">Affordable VR Services for Everyone</h2>
        <p className="body-one">
          At VRNas, we believe that everyone should have access to the benefits of VR.
          That's why we offer a range of pricing options to meet the needs of any budget.
        </p>
        <div className="home-pricing-content d-f align-center">
          <div className="home-pricing-box d-f">
            <div className="home-pricing-item d-f">
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
            <div className="home-pricing-item d-f">
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
            <div className="home-pricing-item d-f">
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
          <div className="home-pricing-line"></div>
        </div>
        <div className="home-pricing-info">
           <h4 className="pricing-info-above">Start from</h4>
           <h3 className="pricing-info-title">$99</h3>
           <a href="" className="pricing-info-started">Get Started</a>
           <p className="pricing-info-note">30 Days Moneyback Guarantee</p>
        </div>
      </section>
    </>
  )
}

export default Home