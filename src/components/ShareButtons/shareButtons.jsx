import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ShareButtons = ({ name, backgroundColor, borderRadius, textColor, address, width, textSize }) => {
    return (
        <Link
            style={{borderRadius: borderRadius + "px", width: width + "px", color: textColor, fontSize: textSize + "px"}}
            to={address}
            className={`
                ${backgroundColor ? "bg-darkYellow" : "bg-transparent"}
                px-6 py-2 font-semibold border-2 border-darkYellow buttonsShadow font-SahelMedium
            `}
        >{name}</Link>
    )
}

export default ShareButtons
