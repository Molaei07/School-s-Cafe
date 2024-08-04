import { Link } from "react-router-dom"

const CooperationPoster = () => {
    return (
        <div className="w-full h-[400px] px-40 flex items-center flex-row-reverse bg-[url('../../../public/images/CooperationPoster.jpg')] bg-cover bg-no-repeat">
            <div className="w-1/2 h-fit gap-y-2 text-4xl font-SahelBold text-darkBlue flex flex-wrap">
                <h1 className="leading-relaxed">دوست داری با بوفه مدرسه همکاری تو شروع کنی و ساندویچ های خودتو بفروشی؟</h1>
                <h1>با مدرسه <Link to={"/products"} className="underline text-darkCyan">تماس</Link> بگیر!</h1>
            </div>
        </div>
    )
}

export default CooperationPoster
