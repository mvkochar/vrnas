import { FaqItem, FeaturesItem } from '../components'
import FaqItemsList from '../components/FaqItemsList'
import FeaturesList from '../components/FeaturesList'
import './css/Pricing.css'

const Pricing = () => {
  return (
    <>
      <main className='pricing-main'>
        <h1 className="h1-title text-center">Pricing Plan</h1>
        <div className="page-breadcrumbs d-f">
          <p className="prev-page">Home</p>
          <div style={{ marginTop: "2px" }}>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
            </svg>
          </div>
          <p className="cur-page">Pricing Plan</p>
        </div>
      </main>
      <div className="pricing-main-line"></div>
      <section className='pricing-plans'>
        <h4 className="page-bl-above text-center">Pricing</h4>
        <h2 className="h2-title">Pricing Plans</h2>
        <p className="body-one">
          Choose the pricing plan that fits your needs and budget.
          All plans come with a free trial period so you can
          test out our service and see which plan works best for you.
        </p>
        <div className="pricing-plans-box d-f">
          <div className="pricing-plans-item">
            <h3 className="plans-item-title">Basic Plan</h3>
            <h4 className="plans-item-price">$99 <span>/ month</span></h4>
            <p className="plans-item-desc">
              All the basic features to boost your freelance career
            </p>
            <ul className="plans-item-list">
              <li>Access to a selection of VR games and experiences</li>
              <li>Limited access to educational content</li>
              <li>Limited access to architecture and design tools</li>
              <li>No access to exclusive events or promotions</li>
            </ul>
            <a href="" className="plans-item-get">Get 14 Days Free Trial</a>
          </div>
          <div className="pricing-plans-item">
            <h3 className="plans-item-title">Standard Plan</h3>
            <h4 className="plans-item-price">$149 <span>/ month</span></h4>
            <p className="plans-item-desc">
              All the basic features to boost your freelance career
            </p>
            <ul className="plans-item-list">
              <li>Access to a wider selection of VR games and experiences</li>
              <li>Limited access to educational content</li>
              <li>Limited access to architecture and design tools</li>
              <li>Access to exclusive events or promotions</li>
            </ul>
            <a href="" className="plans-item-get">Get 14 Days Free Trial</a>
          </div>
          <div className="pricing-plans-item">
            <h3 className="plans-item-title">Premium Plan</h3>
            <h4 className="plans-item-price">$200 <span>/ month</span></h4>
            <p className="plans-item-desc">
              All the basic features to boost your freelance career
            </p>
            <ul className="plans-item-list">
              <li>Unlimted access to VR games and experiences</li>
              <li>Unlimited access to educational content</li>
              <li>Access to architecture and design tools</li>
              <li>Access to exclusive events or promotions</li>
            </ul>
            <a href="" className="plans-item-get">Get 14 Days Free Trial</a>
          </div>
        </div>
      </section>
      <section className='pricing-features d-f'>
        <div><img src="/images/pricing-features.svg" alt="pricing-features" /></div>
        <div>
          <h4 className="page-bl-above">Why choose us</h4>
          <h2 className="h2-title">Why Choose Us for Your VR Needs</h2>
          <div className="pricing-features-box d-f">
            {
              FeaturesList.map((feature) => {
                return (
                  <FeaturesItem
                    key={`pricing-features${feature.id}`}
                    {...feature}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
      <section className='pricing-faq'>
        <h4 className="page-bl-above text-center">Faq</h4>
        <h2 className="h2-title">Frequently Asked Questions</h2>
        <p className="body-one">
          At VRNas, we want to make sure that you have all the information 
          you need to make informed decisions about our VR services. 
          Here are some of the most common questions we receive:
        </p>
        <div className="pricing-faq-box d-f">
          {
            FaqItemsList.map((faq)=> {
              return (
                <FaqItem
                  key={`pricing-faq${faq.id}`}
                  {...faq}
                />
              )
            })
          }
        </div>
      </section>
      <section className='pricing-subscribe d-f jc-sb align-center'>
        <h3 className="pricing-subscribe-title">
          Subscribe to our newsletter for latest updates
        </h3>
        <form action="" className='pricing-subscribe-fm d-f jc-sb'>
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

export default Pricing