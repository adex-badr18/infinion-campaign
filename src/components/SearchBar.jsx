import React from "react";
import { Search } from "./icons";

const SearchBar = () => {
    return (
        <div className="relative border hidden md:block w-full md:w-60 lg:w-[391px] rounded-[4px]">
            <input
                type="text"
                className="text-[#666666] w-full pl-[10px] pr-6 py-3 outline-none rounded-[4px]"
                placeholder="Search..."
            />
            <Search className="absolute right-1 inset-y-4" />
        </div>
    );
};

export default SearchBar;
