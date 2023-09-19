import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App