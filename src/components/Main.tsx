import { Route, Routes } from "react-router-dom"
import { About, Blog, Contact, Faq, Home, Pricing, Service, Team } from "../pages"

const Main = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
          path="about"
          element={<About/>}
        />
        <Route
          path="service"
          element={<Service/>}
        />
        <Route
          path="pricing"
          element={<Pricing/>}
        />
        <Route
          path="blog"
          element={<Blog/>}
        />
        <Route
          path="team"
          element={<Team/>}
        />
        <Route
          path="contact"
          element={<Contact/>}
        />
        <Route
          path="faq"
          element={<Faq/>}
        />
    </Routes>
  )
}

export default Main