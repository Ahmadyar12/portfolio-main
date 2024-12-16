import React from 'react'

const Modal = ({ onHideModel, project }) => {
    const { title, image: project_img, description, technologies, date, gitHub: github, liveDemoUrl } = project;


    return (
        <div className='fixed inset-0 top-0 left-0 w-full bg-black/30 py-10 z-50 overflow-y-scroll flex justify-center items-center'>
            <div className='w-[90%] mx-auto p-4 bg-white rounded-lg relative'>
                <h2 className='text-xl font-medium text-center mb-6'>{title}</h2>
                <div className='grid sm:grid-cols-2 xxs:grid-cols-1 gap-10'>
                    <div className='xxs:order-2 sm:order-1'>
                        {/* =====  Project Carousel ===== */}
                        <div className='relative'>
                            {/* ===== Carousel Image ===== */}
                            <div className='h-80 w-full '>
                                <img className='w-full h-full bg-contain' src={project_img} alt="" />
                            </div>
                        </div>
                        <div className='mt-6'>
                            {github && <a className='px-5 py-2 border-2 border-black bg-black text-white rounded-sm mr-3' href={github} target="_blank">GitHub</a>}


                            {liveDemoUrl && <a className='px-3 py-2 text-black border-2 border-black rounded-sm mr-3' href={liveDemoUrl} target="_blank">Live Demo</a>}

                        </div>
                    </div>
                    {/* =====  Project Detail ===== */}
                    <div className='xxs:order-1 sm:order-2'>
                        <h4 className='text-xl font-medium mb-4'> Project Info:</h4>
                        <p className='text-gray-500 text-[16px] mb-4'>{description}</p>
                        <h4 className='text-xl font-medium mb-4'>Project Details:</h4>
                        <ul>
                            <li className='py-2 border-b-[1px] border-gray-400 mb-2'>
                                <span className='font-semibold mr-4'>Technologies:</span>
                                {technologies}
                            </li>
                            <li className='py-2 border-b-[1px] border-gray-400 mb-2'>
                                <span className='font-semibold mr-4'>Date:</span>
                                {date}
                            </li>
                        </ul>


                        {/* =====  Project Share Options ===== */}
                        <div className='flex items-center gap-2 mt-5'>
                            <p className='font-semibold mr-4'>Share:</p>
                            <div>
                                <ul className="flex gap-3">
                                    <li className="text-xl">
                                        <a href="http://www.facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="text-xl">
                                        <a href="http://www.twitter.com/" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="text-xl">
                                        <a href="http://www.google.com/" target="_blank">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                    <li className="text-xl">
                                        <a href="http://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="text-xl">
                                        <a href="https://mail.google.com/" target="_blank">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <button onClick={() => onHideModel(false)} type="button" className="absolute top-2 right-7 text-2xl">×</button>
            </div>
        </div>
    )
}

export default Modal