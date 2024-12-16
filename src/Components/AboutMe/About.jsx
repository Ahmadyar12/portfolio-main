import { motion } from "framer-motion"
import variants from "../../util/animation"
import { useData } from "../../Reducer/DataContext"
const About = () => {
    const { getAboutMe } = useData();
    return (
        <section id="aboutme" className="bg-white py-[6.5rem]">
            <div className="w-[90%] mx-auto">
                <div>
                    <p className="text-center"> <span className="bg-themcolor mt-5">About Me</span></p>
                    <h1 className="text-black font-medium text-5xl text-center mt-3">
                        know Me More
                    </h1>
                </div>


                <div className="lg:flex justify-between xxs:block mt-16 w-full">

                    <motion.div
                        variants={variants.lefttoright}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="text-black text-2xl lg:w-[73%] xxs:w-full xxs:text-center lg:text-left">
                        <p>Hi, I'm <span className="font-bold">{getAboutMe[0]?.Name}</span></p>
                        <p className=" font-poppins pt-6">{getAboutMe[0]?.description}</p>
                    </motion.div>

                    <motion.div
                        variants={variants.insideAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className=" flex justify-center items-center lg:w-[27%] xxs:w-full flex-col xxs:mt-20 lg:mt-0">

                        <div className="relative bg-themcolor rounded-full h-[120px] w-[120px] ">
                            <span className="absolute top-[-92%] left-[-9%] font-medium  text-[235px]"><p >3</p></span>
                        </div>
                        <p className="text-black text-3xl mt-10 xxs:text-center">Years of <span className="font-bold">Experience</span></p>
                    </motion.div>
                </div>



                <motion.div
                    variants={variants.bottonAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="text-black xxs:text-center lg:text-start py-10 xxs:block flex lg:flex lg:justify-between mt-20 ">
                    <div className="xxs:w-full   xxs:mt-5 lg:mt-0">
                        <p className="xxs:text-xl xl:text-2xl font-poppins mb-3 ">Name:</p>
                        <p className="xxs:text-2xl xl:text-3xl font-poppins">{getAboutMe[0]?.Name}</p>
                    </div>
                    <div className="xxs:w-full xxs:mt-5 lg:mt-0 ">
                        <p className="xxs:text-xl xl:text-2xl font-poppins mb-3">Email:</p>
                        <p className="font-poppins xxs:text-2xl xl:text-2xl">{getAboutMe[0]?.Email}</p>
                        <hr />
                    </div>
                    <div className="xxs:w-full xxs:mt-5 lg:mt-0 ">
                        <p className="xxs:text-xl lg:text-2xl font-poppins mb-3">Date of birth:</p>
                        <p className="font-poppins xxs:text-2xl xl:text-2xl">20,8,2002</p>
                    </div>
                    <div className="xxs:w-full xxs:mt-5 lg:mt-0 ">
                        <p className="xxs:text-xl lg:text-2xl font-poppins mb-3">From:</p>
                        <p className="font-poppins xxs:text-2xl xl:text-2xl">{getAboutMe[0]?.From}.</p>
                    </div>
                </motion.div>


            </div>

        </section>
    )
}
export default About