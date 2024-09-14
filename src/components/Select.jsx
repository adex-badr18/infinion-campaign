import React from "react";
import dropdownIcon from "../assets/dropdown-arrow.png"

const Select = () => {
    return (
        <select className={`w-full border border-gray-300 rounded-md p-3 pr-10 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-[url("${dropdownIcon}")] bg-no-repeat bg-right bg-[length:1.5rem]`}>
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    );
};

export default Select;
