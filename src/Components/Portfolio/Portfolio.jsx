import React, { useEffect, useState } from 'react'
import { filterLinks } from '../../util/portfolioData'
import FilterMenuLink from './FilterMenuLink';
import PortfolioCard from '../Portfolio/PortfolioCard';
import Modal from '../../Model/Model';

//--------------
import { useData } from "../../Reducer/DataContext";

const Portfolio = () => {

    const { getPortfolio } = useData();

    const [active, setActive] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const itemsPerPage = 6; // Number of items per page

    // Filtered projects based on active category
    const filteredProjects = getPortfolio.filter((item) => {
        if (active === 'All') {
            return true;
        }
        return item.category === active;
    });

    // Paginated projects
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage); // Calculate total pages


    // Manage body scroll based on modal visibility
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"; // Disable body scroll
        } else {
            document.body.style.overflow = "auto"; // Enable body scroll
        }

        return () => {
            document.body.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [showModal]);

    // Handle modal open with selected project
    const handleShowModal = (project) => {
        setSelectedProject(project); // Set the selected project
        setShowModal(true); // Show the modal
    };


    // Pagination Handlers
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <>
            {showModal && (
                <Modal
                    onHideModel={setShowModal}
                    project={selectedProject}
                />
            )}


            <section id='portfolio' className='w-[100%] relative py-[6.5rem] bg-gray-100'>
                <div className='w-[90%] mx-auto p-4'>
                    {/* ===== Heading ====== */}
                    <p className='text-center mb-4'><span className='py-[2px] px-[3px] bg-themeColor'>Portfolio</span></p>
                    <h2 className='text-center text-4xl font-semibold mb-4'>
                        Some of my most recent projects
                    </h2>
                    {/* ===== Heading end ====== */}

                    {/* ===== Filter menu ====== */}
                    <ul className='my-10 flex justify-center items-center w-full gap-x-10 flex-wrap'>
                        {filterLinks.map((item) => {
                            return (
                                <FilterMenuLink
                                    key={item}
                                    linkText={item}
                                    isActive={active === item}
                                    setActive={() => setActive(item)}
                                />
                            );
                        })}
                    </ul>
                    {/* ===== Filter menu end ====== */}

                    {/* ===== projects ====== */}
                    <div className='grid lg:grid-cols-3 xxs:grid-cols-2 sm:grid-cols-2 gap-6 w-full'>
                        {paginatedProjects.map((item) => {
                            return (
                                <PortfolioCard
                                    key={item.id}
                                    projectData={item}
                                    onShowModal={() => handleShowModal(item)}
                                />
                            );
                        })}
                    </div>

                    {/* Pagination Buttons */}
                    <div className="w-full mt-7 flex items-center justify-center">
                        <button
                            className={` w-10 h-10 rounded-full grid place-items-center mr-7 ${currentPage === 1
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-themeColor'
                                } text-white rounded-lg shadow-lg`}
                            disabled={currentPage === 1}
                            onClick={handlePrev}
                        >
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                            className={`w-10 h-10 rounded-full grid place-items-center ${currentPage === totalPages
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-themeColor'
                                } text-white rounded-lg shadow-lg`}
                            disabled={currentPage === totalPages}
                            onClick={handleNext}
                        >
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio