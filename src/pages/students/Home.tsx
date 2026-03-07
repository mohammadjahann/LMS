import CallToAction from "../../components/students/CallToAction"
import Companies from "../../components/students/Companies"
import CouresSection from "../../components/students/CouresSection"
import Hero from "../../components/students/Hero"



const Home = () => {


  return (
    <div
      className="flex flex-col items-center  text-center">

      <Hero />
      <Companies />
      <CouresSection/>
      <CallToAction/>

    </div>
  )
}

export default Home