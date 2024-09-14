import React from "react";
import { Calendar, ChevronDown } from "./icons";

const DatePicker = () => {
    return (
        <div className="flex items-center px-2 py-[10px] border rounded cursor-pointer">
            <div className="flex items-center gap-2 pr-2 border-r border-[#ECECEC]">
                <Calendar />
                <span className="text-[12px] text-[#333333]">Date Range</span>
            </div>

            <div className="flex items-center gap-2 pl-2">
                <span className="text-[12px] text-[#666666]">Nov 1, 2022 - Nov 7, 2022.</span>
                <ChevronDown />
            </div>
        </div>
    );
};

export default DatePicker;
