import { BlogItem } from '../components'
import PostsList from '../components/PostsList'
import './css/Blog.css'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <h1 className="h1-title text-center">Blog</h1>
                <div className="page-breadcrumbs d-f">
                    <p className="prev-page">Home</p>
                    <div style={{ marginTop: "2px" }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z" fill="white" />
                        </svg>
                    </div>
                    <p className="cur-page">Blog</p>
                </div>
            </main>
            <div className="blog-main-line"></div>
            <div className="blog-box d-f">
                {
                    PostsList.map((post) => {
                        return (
                            <BlogItem
                                key={`post${post.id}`}
                                {...post}
                            />
                        )
                    })
                }
            </div>
            <div className="blog-pagination d-f">
                <button className='pagination-btn pagination-btn__active'>1</button>
                <button className='pagination-btn'>2</button>
                <button className='pagination-btn'>3</button>
            </div>
            <section className='blog-subscribe d-f jc-sb align-center'>
                <h3 className="blog-subscribe-title">
                    Subscribe to our newsletter for latest updates
                </h3>
                <form action="" className='blog-subscribe-fm d-f jc-sb'>
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

export default Blog