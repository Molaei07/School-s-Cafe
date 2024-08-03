import { Link } from "react-router-dom"

const ApplicationName = () => {
    return (
        <div className="w-56 h-full flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-darkYellow"></div>
            <Link to={"/home"}>هنرستان فیروزیان</Link>
        </div>
    )
}

export default ApplicationName
