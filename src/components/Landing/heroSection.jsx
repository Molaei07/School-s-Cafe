import Chips from "../../assets/images/chips.png"
import ShareButtons from "../ShareButtons/shareButtons"
import HeroSectionTitle from "./heroSectionTitle"

const HeroSection = () => {
  
    return (
        <div className="w-full h-[758px] bg-darkBlue -mt-20 flex flex-row-reverse overflow-hidden">
            <div className="w-1/2 bg-darkCyan heroSectionShadow rounded-br-[379px] flex justify-center items-center">
                <div className="w-[500px] h-[500px] bg-darkYellow rounded-full EllipseShadowInit flex justify-center items-center">
                    <img
                        style={{ filter: "drop-shadow(-14px 14px 7.6px rgba(0, 0, 0, 0.25))" }}
                        className="w-[300px] h-[400px] animate-SpinningAndAppearing"
                        src={Chips}
                        alt="product"
                    />
                </div>
            </div>
            <div className="w-1/2 flex items-center pr-40">
                <div className="w-full h-fit flex flex-wrap gap-y-32 font-SahelBold">
                    <div className="w-full h-fit text-white flex flex-wrap gap-y-4">
                        <HeroSectionTitle />
                        <h4 className="w-3/4 text-lg">گرسنه ای؟ با بالا ترین کیفیت و سریع ترین  روش غذا تو تو مدرسه فراهم کن!</h4>
                    </div>
                    <ShareButtons
                        address={"/products"}
                        backgroundColor={true}
                        borderRadius={50}
                        textColor={"#011F26"}
                        name={"همین حالا بخرید"}
                        textSize={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
