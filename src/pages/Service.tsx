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
                        ServicesList.map((service)=> {
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
        </>
    )
}

export default Service