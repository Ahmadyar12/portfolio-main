import React, { useState } from 'react'

const FilterMenuLink = ({ linkText, isActive, setActive }) => {

    return (
        <li onClick={setActive} className={`font-medium text-xl cursor-pointer mb-2 
        ${isActive ? 'text-black' : 'text-gray-400'} hover:text-black transition-all duration-300`}>
            <a className={isActive ? "border-b-2 border-yellow-500" : ""}>{linkText}</a>
        </li>
    )
}

export default FilterMenuLink