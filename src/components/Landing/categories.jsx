import ShareButtons from "../ShareButtons/shareButtons"
import CreateCategoryItem from "./CreateCategoryItem"
import { categoryList } from "../../data/Categories/categories"

const Categories = () => {
  return (
    <div className="w-full h-fit flex flex-wrap justify-center">
      <div className="w-full h-20 flex justify-between items-center px-40 font-SahelBold">
        <h1 className="w-auto h-auto text-4xl text-darkBlue">دسته بندی ها</h1>
        <ShareButtons
          address={"/products"}
          backgroundColor={true}
          borderRadius={50}
          textColor={"#011F26"}
          name={"همه محصولات"}
          textSize={16}
        />
      </div>
      <div className="w-2/3 h-auto flex flex-wrap justify-center items-center gap-4 font-SahelMedium">
        {categoryList.map((item) => (<CreateCategoryItem key={item.id} picture={item.picture} name={item.name} />))}
      </div>
    </div>
  )
}

export default Categories
