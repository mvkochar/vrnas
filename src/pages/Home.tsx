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
        <div><img src="/images/home-features.png" alt="home-features" width={608} /></div>
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
      <section className='home-partners'>
        <h4 className="page-bl-above text-center">Our Trusted Partners</h4>
        <h2 className="h2-title">Discover the Companies We Work With</h2>
        <div className="home-partners-img">
          <img src="/images/home-partners.png" alt="home-partners" />
        </div>
      </section>
      <section className='home-articles'>
        <div className="home-articles-heading d-f">
          <div>
            <h4 className="page-bl-above">Our articles</h4>
            <h2 className="h2-title">Stay Up-to-Date with Our VR Insights</h2>
          </div>
          <a href="" className="home-articles-all">See all</a>
        </div>
        <div className="home-aticles-content d-f align-center">
          <div>
            <h6 className="home-articles-subtitle">Popular Article</h6>
            <div className="home-articles-popular">
              <p className="articles-popular-bage">VR Games</p>
              <div className="d-f jc-sb align-center">
                <h5 className="articles-popular-title">Entertainment Goes Virtual: The Rise of VR Gaming</h5>
                <a href="" className="articles-popular-more">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5501 0.75L9.90331 1.48167L15.5923 6.51061H0.666748V7.48717H15.5923L9.90331 12.5161L10.5501 13.2478L17.3334 7.25153V6.74626L10.5501 0.75Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="home-articles-pagination d-f">
              <div className="pagination-item pagination-item__active"></div>
              <div className="pagination-item"></div>
              <div className="pagination-item"></div>
              <div className="pagination-item"></div>
            </div>
          </div>
          <div className='home-articles-recent'>
            <h6 className="home-articles-subtitle">Recent Article</h6>
            <div className="articles-recent-box d-f">
              <div className="articles-recent-item d-f jc-sb align-center">
                <div><img src="/images/recent-article1.png" alt="recent-article1" /></div>
                <div>
                  <p className="recent-item-badge">VR Education</p>
                  <h5 className="recent-item-title">
                    The Future of Education: How VR is Revolutionizing the Classroom
                  </h5>
                </div>
                <a href="" className="recent-item-more">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.24016 0L7.72274 0.585339L12.274 4.60849H0.333496V5.38974H12.274L7.72274 9.41289L8.24016 9.99823L13.6668 5.20122V4.79701L8.24016 0Z" fill="white" />
                  </svg>
                </a>
              </div>
              <div className="articles-recent-item d-f jc-sb align-center">
                <div><img src="/images/recent-article2.png" alt="recent-article2" /></div>
                <div>
                  <p className="recent-item-badge">VR Architecture</p>
                  <h5 className="recent-item-title">
                    Bringing Designs to Life: How VR is Changing Architecture
                  </h5>
                </div>
                <a href="" className="recent-item-more">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.24016 0L7.72274 0.585339L12.274 4.60849H0.333496V5.38974H12.274L7.72274 9.41289L8.24016 9.99823L13.6668 5.20122V4.79701L8.24016 0Z" fill="white" />
                  </svg>
                </a>
              </div>
              <div className="articles-recent-item d-f jc-sb align-center">
                <div><img src="/images/recent-article3.png" alt="recent-article3" /></div>
                <div>
                  <p className="recent-item-badge">VR Entertainment</p>
                  <h5 className="recent-item-title">
                    Making Events Memorable: The Power of VR for Corporate and ...
                  </h5>
                </div>
                <a href="" className="recent-item-more">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.24016 0L7.72274 0.585339L12.274 4.60849H0.333496V5.38974H12.274L7.72274 9.41289L8.24016 9.99823L13.6668 5.20122V4.79701L8.24016 0Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='home-subscribe d-f jc-sb align-center'>
        <h3 className="home-subscribe-title">
          Subscribe to our newsletter for latest updates
        </h3>
        <form action="" className='home-subscribe-fm d-f jc-sb'>
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

export default Home