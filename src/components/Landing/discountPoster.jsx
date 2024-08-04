import ShareButtons from "../ShareButtons/shareButtons"

const DiscountPoster = () => {
    return (
        <div className="w-full h-[530px] px-40 flex items-center bg-[url('../../../public/images/DiscountBackground.jpg')] bg-cover bg-no-repeat">
            <div className="w-[500px] h-fit gap-y-8 bg-white/20 flex flex-wrap p-8 shadow-lg">
                <div className="w-full h-fit flex flex-wrap gap-y-2">
                    <h1 className="w-full font-SahelBold text-3xl text-red-500 line-through">35%</h1>
                    <h1 className="w-full font-SahelBold text-2xl">قیمت عالی در مورد مواد غذایی ارگانیک.</h1>
                    <p className="w-full text-neutral-500 font-SahelMedium">تخفیف 35 درصدی تمامی محصولات غذایی فقط تا 25 آذر بدو تا جا نمونی!</p>
                </div>
                <ShareButtons
                    address={"/products"}
                    backgroundColor={true}
                    borderRadius={50}
                    textColor={"#011F26"}
                    name={"همین حالا بخرید"}
                    textSize={16}
                />
            </div>
        </div>
    )
}

export default DiscountPoster
