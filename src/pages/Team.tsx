import { TeamMember } from '../components'
import TeamMembersList from '../components/TeamMembersList'
import './css/Team.css'

const Team = () => {
    return (
        <>
            <main className='team-main'>
                <h1 className="h1-title text-center">Our Team</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">Our Team</p>
                </div>
            </main>
            <div className="team-main-line"></div>
            <section className='team-about'>
                <h4 className="page-bl-above text-center">Our Team</h4>
                <h2 className="h2-title">Meet Our Amazing Team</h2>
                <div className="team-about-box d-f">
                    {
                        TeamMembersList.map((member) => {
                            {
                                return (
                                    <TeamMember
                                        key={`team-member${member.id}`}
                                        {...member}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </section>
            <section className="team-facts d-f jc-sb">
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
            <section className='team-subscribe d-f jc-sb align-center'>
                <h3 className="team-subscribe-title">
                    Subscribe to our newsletter for latest updates
                </h3>
                <form action="" className='team-subscribe-fm d-f jc-sb'>
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

export default Team