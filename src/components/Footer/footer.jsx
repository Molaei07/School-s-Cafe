import ApplicationName from "../ApplicationName/applicationName"
import CreateLinkContent from "./footer-components/createLinks"
import { SocialNetworks } from "./footer-components/socialNetworks"
import { useState } from "react"


const Footer = () => {

    // eslint-disable-next-line no-unused-vars
    const [links, setLinks] = useState([
        {id: 1, names: ["درباره مدرسه", "وبلاگ", "قوانین سایت", "حریم خصوصی", "همکاری"]},
        {id: 2, names: ["تماس با مدرسه", "پرسش های متداول", "ثبت شکایت", "اپلیکیشن موبایل"]},
    ])

    return (
        <div className="w-full h-fit flex justify-between bg-darkBlue mt-20 px-40 py-20">
            <div className="w-1/3 h-fit flex flex-wrap gap-y-8">
                <ApplicationName />
                <p className="w-full text-white font-SahelMedium">نشانی : مازندران، ساری، جاده فرآباد، روبه روی دانشگاه ادیب مازندران، هنرستان فیروزیان</p>
                <SocialNetworks />
            </div>
            {links.map(item => (<CreateLinkContent key={item.id} links={item.names} />))}
        </div>
    )
}

export default Footer
