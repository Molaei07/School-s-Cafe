/* eslint-disable react/prop-types */
function CreateCategoryItem({ picture, name }) {
    return (
        <div className="w-1/4 h-40 rounded-xl overflow-hidden relative hover:scale-105 transition-all duration-300 cursor-pointer">
            <img className="w-full h-full" src={picture} alt="category" />
            <div className="bg-darkYellow font-SahelBold w-3/4 py-2 rounded-tl-full absolute bottom-0 right-0 text-center text-x">{name}</div>
        </div>
    )
}

export default CreateCategoryItem