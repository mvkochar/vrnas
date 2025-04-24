import { FeaturesItem } from '../components'
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
              FeaturesList.map((feature)=> {
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
    </>
  )
}

export default Pricing