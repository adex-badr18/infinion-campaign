import React, { forwardRef, useState, useEffect } from "react";

import { formatDateToDDMMYYYY, ISOTodate } from "../utils/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Search, ChevronDown, CloseCircle } from "./icons";

const Filter = ({
    columnFilters,
    setColumnFilters,
    globalFilter,
    setGlobalFilter,
    tableData,
    table,
    activeRowsCount,
    inactiveRowsCount,
}) => {
    const [startDate, setStartDate] = useState();
    const [filterValue, setFilterValue] = useState(globalFilter);

    // Run 0.5s after setting value in state
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setGlobalFilter(filterValue);
        }, 500);

        return () => clearTimeout(timeOut);
    }, [filterValue]);

    const handleChange = (id, value) => {
        if (!id && !value) {
            // Clear all filters if id and value are empty
            setColumnFilters([]);
        }

        if (value) {
            setColumnFilters((prev) =>
                prev.filter((f) => f.id !== id).concat({ id, value })
            );
        }

        if (!value) {
            setColumnFilters((prev) => prev.filter((f) => f.id !== id));
        }
    };

    const handleDateChange = (id, value) => {
        setColumnFilters((prev) =>
            prev.filter((f) => f.id !== id).concat({ id, value })
        );
    };

    const removeDateFilter = () => {
        setStartDate();
        setColumnFilters((prev) => prev.filter((f) => f.id !== "startDate"));
    };

    const statusFilterButtons = [
        { id: "", value: "", text: `All (${tableData.length})` },
        {
            id: "campaignStatus",
            value: "Inactive",
            text: `Inactive (${inactiveRowsCount})`,
        },
        {
            id: "campaignStatus",
            value: "Active",
            text: `Active (${activeRowsCount})`,
        },
    ];

    const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
        <div
            className="flex justify-between items-center gap-4 relative px-[10px] py-3 border rounded cursor-pointer"
            onClick={onClick}
            ref={ref}
        >
            <span className="text-sm text-nowrap text-[#999999]">
                {value ? value : "Filter by date"}
            </span>

            {value ? (
                <CloseCircle
                    className="absolute -right-2 -top-3"
                    onClick={removeDateFilter}
                />
            ) : (
                <ChevronDown fill="#666666" />
            )}
        </div>
    ));

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-medium text-sm w-full">
            <div className="flex items-center gap-4">
                {statusFilterButtons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => handleChange(button.id, button.value)}
                        className="text-sm font-medium text-nowrap p-[10px] bg-transparent border border-[#2A9D8F] rounded"
                    >
                        {button.text}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className={`relative border w-full max-w-[244px] rounded`}>
                    <input
                        type="text"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="text-[#666666] w-full pl-[10px] pr-6 py-3 outline-none rounded"
                        placeholder="Search..."
                    />
                    <Search className="absolute right-1 inset-y-3" />
                </div>

                <DatePicker
                    selected={startDate}
                    dateFormat="dd/MM/yyyy"
                    todayButton="Today"
                    onSelect={(date) => {
                        const formattedDate = ISOTodate(date);
                        setStartDate(formattedDate);
                        handleDateChange("startDate", formattedDate);
                    }}
                    customInput={<CustomDateInput />}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </div>

            {/* {columnFilters.length !== 0 && (
                <div className="p-4">
                    <IoMdCloseCircle
                        className="hidden md:block text-red-600 size-6 cursor-pointer"
                        onClick={() => setColumnFilters([])}
                    />

                    <button
                        className="md:hidden p-2 text-center bg-red-600 text-white rounded-lg"
                        onClick={() => setColumnFilters([])}
                    >
                        Clear Filters
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default Filter;
