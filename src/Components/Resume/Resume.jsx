import { motion } from "framer-motion"
import variants from "../../util/animation"
import { Resumedata } from "../../util/portfolioData"
import { useData } from "../../Reducer/DataContext"
import cv from "../../assets/AhmadyarNewCvv.pdf"
const Resume = () => {
    const { getExperience } = useData();
    const firstThreeEntries = getExperience.slice(0, 3);
    const lastThreeEntries = getExperience.slice(-6);


    const { getLanguage } = useData();
    const firstThreeLanguage = getLanguage.slice(0, 3);
    const lastThreeLanguage = getLanguage.slice(-3);

    return (
        <section id="resume" className="bg-white w-full">
            <div className="w-[90%] mx-auto py-10">
                <div className="flex items-center justify-center py-10 gap-3 flex-col">
                    <span className="text-black bg-themcolor">
                        Resume
                    </span>
                    <p className="sm:text-5xl xxs:text-center font-medium xxs:text-3xl">A summary of My Resume</p>
                </div>

                <div className="grid xxs:grid-cols-1 lg:grid-cols-[auto_1fr_auto_1fr] mt-10 gap-5">
                    <div className="bg-themcolor w-[2px] mx-auto"></div>
                    <motion.div
                        variants={variants.lefttoright}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >

                        <div className="mb-10 xxs:text-center  lg:text-start xxs:px-10 lg:px-0">
                            <p className="text-4xl font-medium mb-5">My Education</p>
                            {firstThreeEntries.map((items) => {
                                return (
                                    <>
                                        <p key={items.title} className="text-2xl font-medium mb-2 ">{items.title}</p>
                                        <p className="font-medium mb-2">{items.institution} / {items.duration}</p>
                                        <p className=" text-[17px] mb-10 mt-4">
                                            {items.description}
                                        </p>
                                    </>
                                )
                            })}
                        </div>

                    </motion.div>
                    <div className="bg-themcolor w-[2px] mx-auto"></div>
                    <motion.div
                        variants={variants.Righttoleft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >


                        <div className="mb-10 xxs:text-center  lg:text-start xxs:px-10 lg:px-0">
                            <p className="text-4xl font-medium mb-5">My Experience</p>
                            {lastThreeEntries.map((itemss) => {
                                return (

                                    <>
                                        <p key={itemss.title} className="text-2xl font-medium mb-2 ">{itemss.title}</p>
                                        <p className="font-medium mb-2">{itemss.institution}  {itemss.duration}</p>
                                        <p>{itemss.CGPA}</p>
                                        <p className=" text-[15px] mb-4">
                                            {itemss.description}
                                        </p>
                                    </>

                                )
                            })}
                        </div>


                    </motion.div>
                </div>

            </div>
            <div className="w-[90%] mx-auto my-32">
                <div className="">
                    <p className="text-4xl font-medium">My Skill</p>
                </div>
                <div className="grid lg:grid-cols-[1fr_auto_1fr] mt-10">
                    <motion.div
                        variants={variants.lefttoright}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >

                        {firstThreeLanguage.map((item) => {
                            return (
                                <>
                                    <div className="flex justify-between mt-6">
                                        <p className="text-2xl">{item.technology}</p>
                                        <p>{item.percentage}%</p>
                                    </div>

                                    <div className="bg-gray-300 w-full h-2 mt-3">
                                        <div className="bg-themcolor w-[65%] h-2 ">

                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </motion.div>

                    <div className="w-10 mx-auto">

                    </div>

                    <motion.div
                        variants={variants.Righttoleft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {lastThreeLanguage.map((item) => {
                            return (
                                <>
                                    <div className="flex justify-between xxs:mt-3 lg:mt-6 ">
                                        <p className="text-2xl">{item.technology}</p>
                                        <p>{item.percentage}%</p>
                                    </div>

                                    <div className="bg-gray-300 w-full h-2 mt-3">
                                        <div className="bg-themcolor w-[95%] h-2">

                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </motion.div>
                </div>
                <motion.div
                    variants={variants.insideAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex items-center justify-center">
                    <span className="mt-10 hover:bg-black hover:text-white border-2 border-black py-3 px-7 transition duration-500">
                        <a href={cv}> DownLoad CV</a>
                    </span>
                </motion.div>

            </div>
        </section>
    )
}
export default Resume