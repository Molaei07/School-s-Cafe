import Typewriter from 'typewriter-effect';

const HeroSectionTitle = () => {
    return (
        <div className="w-full">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('سفارش آنلاین <span style="color: #F2A71B">میوه</span>')
                        .pauseFor(600)
                        .deleteChars(4)
                        .typeString('<span style="color: #F2A71B">لبنیات</span>')
                        .pauseFor(600)
                        .deleteChars(6)
                        .typeString('<span style="color: #F2A71B">نوشیدنی</span>')
                        .pauseFor(600)
                        .deleteChars(7)
                        .typeString('<span style="color: #F2A71B">ساندویچ</span>')
                        .pauseFor(600)
                        .deleteChars(7)
                        .typeString('<span style="color: #F2A71B">شیرینی</span>')
                        .pauseFor(600)
                        .deleteChars(6)
                        .typeString('<span style="color: #F2A71B">تنقلات</span>')
                        .pauseFor(600)
                        .deleteChars(6)
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-5xl",
                    cursorClassName: "text-5xl"
                }}
            />
        </div>
    )
}

export default HeroSectionTitle
