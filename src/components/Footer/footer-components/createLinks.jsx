/* eslint-disable react/prop-types */
const CreateLinkContent = ({ links }) => {
    return (
        <div className="w-[150px] text-right h-fit flex flex-wrap gap-y-4">
            {links.map((item, index) => (<a key={index} className="w-full hover:text-darkYellow font-SahelMedium text-white" href="#">{item}</a>))}
        </div>
    )
}

export default CreateLinkContent
