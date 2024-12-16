import { useState } from "react";
import lightimage from "../../assets/WhatsApp Image 2024-11-29 at 10.36.17.jpeg";
import { Questions } from "../../util/portfolioData.js";
import { motion } from "framer-motion";
import variants from "../../util/animation.js";
import { useData } from "../../Reducer/DataContext.jsx";

const Question = () => {
    const [questdes, setquestdes] = useState(null);

    const { getQuestion } = useData();

    function togglehandle(index) {
        setquestdes(questdes === index ? null : index);
    }

    return (
        <section id="question" className="w-full py-10 bg-slate-50">
            <div className="w-[90%] mx-auto grid lg:grid-cols-2 xxs:grid-cols-1">
                <div className="pl-24 ">
                    <div>
                        <p className="font-bold text-4xl pb-10">Have any questions?</p>
                    </div>

                    {getQuestion.map((value, index) => (
                        <div key={index} className="mt-6">
                            <motion.div
                                variants={variants.insideAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                                className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 transform transition-transform duration-500 ${questdes === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                <p className="font-bold cursor-pointer" onClick={() => togglehandle(index)}> {value.title} </p>

                            </motion.div>
                            {questdes === index && (
                                <div className="mt-2 px-7">
                                    <p>{value.description}</p>
                                </div>
                            )}
                            <hr className="mt-6" />
                        </div>
                    ))}
                </div>
                <motion.div
                    variants={variants.insideAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid place-items-center">
                    <img className="xxs:object-center" src={lightimage} alt="Light" />
                </motion.div>
            </div>
        </section>
    );
};

export default Question;
