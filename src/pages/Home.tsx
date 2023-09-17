import Aboutus from "../components/Aboutus"
import Experience from "../components/Experience"
import Expertise from "../components/Expertise"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Team from "../components/Team"


const Home = () => {
  return (
    <div>
   <Navbar />
   <Section1 />
   <Section2 />
   <Aboutus />
   <Expertise />
   <Experience />
   <Team />
   <Newsletter />
   <Footer />
    </div>
  )
}

export default Home