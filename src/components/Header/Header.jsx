import HeaderMenu from "./header-components/HeaderMenu"
import HeaderButtons from "./header-components/HeaderButtons"
import ApplicationName from "../ApplicationName/applicationName"

const Header = () => {
    return (
        <div className="w-full h-20 relative z-10 text-white flex items-center justify-between px-40 font-SahelBold text-xl">
            <ApplicationName />
            <HeaderMenu />
            <HeaderButtons />
        </div>
    )
}

export default Header
