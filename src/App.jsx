import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {

return(

<div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 min-h-screen">

<Navbar/>
<Hero/>
<About/>
<Skills/>
<Education/>
<Certificates/>
<Projects/>
<Contact/>
<Footer/>

</div>

)

}