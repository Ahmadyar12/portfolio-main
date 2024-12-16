import pixelimage from "../../assets/1.jpg"
import { motion } from "framer-motion"
import variants from "../../util/animation"
const HireMe = () => {
    return (
        <section className="w-full py-16">
            <div className="relative h-[500px]">
                <img className=" h-[500px] w-full object-cover" src={pixelimage} />
                <div className="absolute inset-0 bg-black bg-opacity-70 ">


                    <motion.div
                        variants={variants.insideAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}

                        className="absolute inset-0 flex items-center justify-center flex-col gap-8">
                        <p className="text-4xl text-white font-medium xxs:text-center">Interested in working with me?</p>
                        <p className="font-medium"><span className="bg-themcolor cursor-pointer hover:bg-yellow-500 py-4 px-10">Hire me!</span></p>

                    </motion.div>


                </div>


            </div>
        </section>
    )
}
export default HireMe