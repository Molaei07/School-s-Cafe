import { useState } from "react"
import easyReturn from "../../assets/images/easyReturn.svg"
import extensiveCollection from "../../assets/images/extensiveCollection.svg"
import freeDelivery from "../../assets/images/freeDelivery.svg"
import greatDailyDeal from "../../assets/images/greatDailyDeal.svg"
import theBestPrices from "../../assets/images/theBestPrices.svg"

// eslint-disable-next-line react/prop-types
const CreditsItem = ({ icon, name }) => {
    return (
        <li className="w-1/5 h-24 cursor-default flex items-center justify-center gap-x-2 rounded-xl bg-neutral-200/50 px-4">
            <div className="w-1/3 h-full flex items-center justify-center">
                <img src={icon} alt="icon" />
            </div>
            <span className="w-2/3 font-SahelBold text-left">{name}</span>
        </li>
    )
}

const Credits = () => {
    // eslint-disable-next-line no-unused-vars
    const [creditList, setCreditList] = useState([
        { id: 1, name: "بازگشت آسان", picture: easyReturn },
        { id: 1, name: "مجموعه گسترده", picture: extensiveCollection },
        { id: 1, name: "معامله روزانه عالی", picture: freeDelivery },
        { id: 1, name: "تحویل رایگان", picture: greatDailyDeal },
        { id: 1, name: "بهترین قیمت ها", picture: theBestPrices },
    ])
    return (
        <ul className="w-full h-fit flex gap-x-4 px-40">
            {creditList.map(item => (<CreditsItem key={item.id} icon={item.picture} name={item.name} />))}
        </ul>
    )
}

export default Credits
