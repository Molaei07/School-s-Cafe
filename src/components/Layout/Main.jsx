import { Fragment } from "react"
// import application's header
import Headers from "../Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/footer"

const Layout = () => {
  return (
    <Fragment>
        <Headers />
        <main className="w-full max-w-screen-2xl h-auto mx-auto flex flex-wrap gap-y-20">
            <Outlet />
        </main>
        <Footer />
    </Fragment>
  )
}

export default Layout
