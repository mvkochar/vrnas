import { Route, Routes } from "react-router-dom"
import { About, Home, Service } from "../pages"

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
    </Routes>
  )
}

export default Main