import { motion } from "framer-motion"
import variants from "../../util/animation"
import Swal from 'sweetalert2'
import { useState } from "react"
const Contact = () => {

    const [buttonhidden, setbuttonhidden] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        setbuttonhidden(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "68ae6e0e-ac9d-4dd1-9334-fbce4c76b0df");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            Swal.fire({
                title: "Thank You For Emailing me!",
                text: "We will response you as soon as possible",
                icon: "success"
            });
        }
        setbuttonhidden(false)
        event.target.reset();
    };

    return (
        <section id="contact" className="bg-themcolor w-full py-20">
            <div className="w-[85%] mx-auto p-10">
                <div className="grid xxs:grid-cols-1 lg:grid-cols-2 ">
                    <motion.div
                        variants={variants.lefttoright}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="xxs:text-center lg:text-start">
                        <p className="text-5xl  font-medium xxs:text-center lg:text-start">Let's get in touch</p>
                        <p className="text-2xl font-poppins mt-20">
                            I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.
                        </p>
                        <p className="font-medium text-2xl mt-10">Living In:</p>
                        <p>
                            Islamabad ,Pakistan.
                        </p>
                        <p className="font-medium text-2xl mt-10">Call:</p>
                        <p>(+92) 3353367144</p>
                        <div className="text-gray-500 space-x-5 py-10">
                            <i className="fab fa-twitter fa-2x"></i>
                            <i className="fab fa-facebook fa-2x"></i>
                            <i className="fab fa-instagram fa-2x"></i>
                            <i className="fab fa-linkedin-in fa-2x"></i>
                            <i className="fab fa-dribbble fa-2x"></i>
                        </div>
                    </motion.div>
                    <motion.form
                        onSubmit={onSubmit}
                        variants={variants.Righttoleft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="lg:ml-14 ">
                        <p className="text-5xl  font-medium mb-16 xxs:text-center lg:text-start">  Estimate your Project?</p>
                        <p className="mb-6">What is Your Name:</p>
                        <input name="name" className="bg-themcolor border-b-2 mb-6 border-black w-full" type="text" />
                        <p className="mb-6">Your Email Address:</p>
                        <input name="email" className="bg-themcolor border-b-2 mb-6 border-black w-full" type="text" />
                        <p className="mb-6">How can I Help you?:</p>
                        <input name="message" className="bg-themcolor border-b-2 mb-6 border-black w-full" type="text" />
                        <button type="submit" disabled={buttonhidden ? true : false} className="bg-black mt-20 text-white  px-20 py-5 font-medium" >
                            {buttonhidden ? "Sending ..." : "Send"}</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
export default Contact