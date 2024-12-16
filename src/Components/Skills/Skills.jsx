import { motion } from "framer-motion"
import variants from "../../util/animation"
import { skillsData } from "../../util/portfolioData"
import { useData } from "../../Reducer/DataContext"
const Skills = () => {
    const { getSkill } = useData();
    return (
        <section id="skills" className="bg-slate-100 w-full py-16">
            <div
                className="w-[90%] mx-auto py-10">
                <motion.div
                    variants={variants.insideAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex items-center justify-center py-10 gap-3 flex-col xxs:text-center">
                    <span className="text-black bg-themcolor">
                        What I Do?
                    </span>
                    <p className="text-5xl font-medium">How I can help your next project</p>
                </motion.div>
                <div className="justify-between grid  xxs:grid-cols-1 xl:grid-cols-3 lg:gap-12 space-x-4 ">
                    {getSkill.map((value, index) => {
                        const currentSkillsData = skillsData[index];
                        return (
                            <motion.div

                                variants={variants.bottonAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                whileDrag={{ scale: 0.9, rotate: 10 }}
                                key={value.title} className=" hover:bg-themcolor xxs:px-10 lg:px-0 xxs:mt-14 lg:mt-0">

                                <div className="flex items-center justify-center">
                                    <img className="w-20 h-20" src={currentSkillsData.image} />
                                </div>


                                <p className="text-2xl font-bold text-center">
                                    {value.title}
                                </p>
                                <p className="text-center">
                                    {value.description}
                                </p>
                            </motion.div>
                        )
                    })}

                </div>
            </div>

        </section >
    )
}
export default Skills