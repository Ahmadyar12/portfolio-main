import React from 'react';
import { motion } from 'framer-motion';
import variants from '../../util/animation.js';
const PortfolioCard = ({ projectData, onShowModal }) => {
    const { icon, title, category, image } = projectData;

    const handleDetail = (e) => {
        e.preventDefault();
        onShowModal(true);
    };


    return (
        <motion.div
            variants={variants.popup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onClick={(e) => handleDetail(e)} className='relative group overflow-hidden'>
            {/* Image Container h-[300px] */}
            <div className='relative w-full sm:h-[300px] xxs:h-[140px]'>
                <img
                    className='w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-500'
                    src={image}
                    alt="Project"
                />
            </div>

            {/* Details */}
            <div className='absolute inset-0 h-full flex flex-col justify-center items-center bg-black/70 
            opacity-0 group-hover:opacity-100 backdrop-blur transition-opacity duration-1000'>
                <a href="" className='text-center'>
                    <p className='text-themeColor sm:text-4xl xxs:text-2xl mb-4'>
                        <i className={icon}></i>
                        {/* {icon} */}
                    </p>
                    <h5 className='text-white sm:text-xl xxs:text-[16px] mb-2'>{title}</h5>
                    <span className='text-gray-400'>{category}</span>
                </a>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;