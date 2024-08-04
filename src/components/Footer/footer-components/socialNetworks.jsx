import Facebook from "../../../assets/images/facebook.svg"
import Instagram from "../../../assets/images/instagram.svg"
import Twitter from "../../../assets/images/twitter.svg"
import Youtube from "../../../assets/images/youtube.svg"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const SocialNetworksItems = ({ picture }) => {
  return (
    <li className="w-12 h-12 bg-neutral-300 flex justify-center items-center rounded-full">
      <img src={picture} alt="SocialNetworks" />
    </li>
  )
}

export const SocialNetworks = () => {
  // eslint-disable-next-line no-unused-vars
  const [item, setItem] = useState([
    { id: 1, picture: Facebook },
    { id: 2, picture: Instagram },
    { id: 3, picture: Twitter },
    { id: 4, picture: Youtube },
  ])

  return (
    <ul className="flex gap-x-2">
      {item.map(item => (<SocialNetworksItems key={item.id} picture={item.picture} />))}
    </ul>
  )
}