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
    </>
  )
}

export default Home