import { Route, Routes } from "react-router-dom"
import { About, Blog, Contact, Home, Pricing, Service, Team } from "../pages"

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
    </Routes>
  )
}

export default Main