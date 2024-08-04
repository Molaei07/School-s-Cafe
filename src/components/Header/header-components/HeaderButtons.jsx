import { useState } from "react"
import { Link } from "react-router-dom"

const HeaderButtons = () => {
    // eslint-disable-next-line no-unused-vars
    const [buttonList, setButtonList] = useState([
        { name: "ورود", address: "/login" },
        { name: "ثبت نام", address: "/register" }
    ])
    return (
        <div className="w-56 h-full flex items-center justify-end gap-4">
            {buttonList.map(
                (item, index) => (
                    <Link key={index} to={item.address} className={`
                        px-6 py-2 text-base border-2
                        ${item.name === "ثبت نام" ? "text-darkYellow" : "bg-darkYellow text-darkBlue"}
                        border-darkYellow buttonsShadow rounded-full`}
                    >{item.name}</Link>
                )
            )}
        </div>
    )
}

export default HeaderButtons