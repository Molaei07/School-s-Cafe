/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom"

const HeaderMenu = () => {
    const [menuItems, setMenuItems] = useState([
        { name: "جستجو", address: "" },
        { name: "درباره ما", address: "/aboutUs" },
        { name: "سبد خرید", address: "/cart" },
        { name: "محصولات", address: "/products" },
    ])
    return (
        <div className="w-auto h-full flex items-center gap-x-20 text-lg">
            {menuItems.map(
                (items, index) => (<Link key={index} to={items.address} className="w-24 text-center">{items.name}</Link>)
            )}
        </div>
    )
}

export default HeaderMenu