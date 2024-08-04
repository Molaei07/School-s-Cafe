import { Fragment } from "react"
import HeroSection from "./heroSection"
import Categories from "./categories"
import DiscountPoster from "./discountPoster"
import CooperationPoster from "./cooperationPoster"
import Credits from "./credits"

const Landing = () => {
  return (
    <Fragment>
        <HeroSection />
        <Categories />
        <DiscountPoster />
        <Credits />
        <CooperationPoster />
    </Fragment>
  )
}

export default Landing
