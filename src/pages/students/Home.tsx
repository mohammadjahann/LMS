import { useEffect } from "react"
import CallToAction from "../../components/students/CallToAction"
import Companies from "../../components/students/Companies"
import CouresSection from "../../components/students/CouresSection"
import Hero from "../../components/students/Hero"
import { useAppDispatch } from "../../redux/student/hooks"
import { fetchProducts } from "../../redux/student/productSlice"



const Home = () => {


  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchProducts())
  }, [])



  return (
    <div
      className="flex flex-col items-center  text-center overflow-x-hidden">
      <Hero />
      <Companies />
      <CouresSection />
      <CallToAction />

    </div>
  )
}

export default Home