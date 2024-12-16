import { useState, useEffect } from "react";
import { SwapingQuestion } from "../../util/portfolioData.js";
import { motion } from "framer-motion";
import variants from "../../util/animation.js";

const Clientspeak = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the index and wrap around using modulo
            setCurrentIndex((prevIndex) => (prevIndex + 1) % SwapingQuestion.length);
        }, 3000);

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const swapquestion = SwapingQuestion[currentIndex]; // Get the current item

    return (
        <section id="clientspeak" className="bg-neutral-500 w-full py-40">
            {/* Title Section */}
            <div className="py-10 flex items-center justify-center gap-5 flex-col pb-20">
                <span className="bg-themcolor px-10 py-1">Client Speak</span>
                <p className="text-4xl font-bold text-white ">{swapquestion.title}</p>
            </div>

            <motion.div
                key={currentIndex}
                variants={variants.insideAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                viewport={{ once: false, amount: 0.1 }}
                className="lg:px-60 xxs:px-10 text-center"
            >
                <p className="text-2xl font-poppins text-white">{swapquestion.description}</p>
            </motion.div>

            <motion.div
                variants={variants.insideAnimation}
                initial="hidden"
                animate="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="flex items-center justify-center mt-7 flex-col gap-2">
                <img
                    className="rounded-full animate-bounce"
                    src={swapquestion.image}
                    alt={swapquestion.title}
                />
                <p className="text-white font-medium">{swapquestion.title}</p>
                <p className="text-white font-normal">{swapquestion.additionalInfo}</p>
            </motion.div>
        </section>
    );
};

export default Clientspeak;
