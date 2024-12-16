import MainImage from "../../assets/MainImage.jpeg"
import AhmadImage from "../../assets/WhatsApp Image 2024-10-09 at 17.01.55.png"
import { ReactTyped } from 'react-typed'
import { motion } from "framer-motion";
import variants from "../../util/animation";
import { useData } from "../../Reducer/DataContext";
const Hero = () => {
    const { getAboutMe } = useData();
    console.log("hello getaboutme", getAboutMe)
    return (

        <section id="hero" className="bg-themcolor flex flex-col lg:flex-row items-center justify-between h-auto w-full lg:py-16">
            <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-8 py-10">
                {/* Left Content */}
                <motion.div
                    variants={variants.lefttoright}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex flex-col gap-4 lg:text-left xxs:text-center order-2 lg:order-1">
                    <h1 className="text-3xl lg:text-5xl font-normal uppercase mb-5 tracking-wide">
                        Hi, I'm {getAboutMe[0]?.Name}
                    </h1>
                    <h2 className="text-2xl lg:text-6xl font-bold mb-5 uppercase">
                        <ReactTyped
                            strings={["Developer", "Designer", "Youtuber"]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </h2>
                    <span className="text-black text-lg lg:text-2xl font-light">
                        {getAboutMe[0]?.From}.
                    </span>
                    <div className="mt-8 space-x-4">
                        <button className="bg-black text-yellow-50 px-6 py-2 text-sm lg:text-lg font-poppins hover:bg-gray-800 transition duration-300">
                            View My Works
                        </button>
                        <button className="text-gray-900 underline text-sm lg:text-lg font-medium hover:text-gray-700 transition duration-300">
                            Contact Me
                        </button>
                    </div>


                </motion.div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">

                    <motion.div

                        variants={variants.insideAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="bg-white rounded-full p-3 shadow-lg lg:w-[450px] lg:h-[450px] xxs:w-[300px] xxs:h-[300px]">

                        <img
                            className="rounded-full w-full h-full object-cover"
                            src={AhmadImage}
                            alt="Main Hero"
                        />
                    </motion.div>
                </div>
            </div>
            {/* <div className="animate-bounce text-center">
                <i className="fas fa-arrow-down"></i>
            </div> */}
        </section>


    );
}
export default Hero