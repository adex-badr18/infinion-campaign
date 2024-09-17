import React from "react";
import { ChevronNext, ChevronPrevious } from "./icons";

const NewPagination = ({ table, tableData }) => {
    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex + 1;

    // Helper function to render page buttons
    const renderPageButton = (page) => (
        <button
            className={`flex justify-center items-center  ${
                currentPage === page
                    ? "bg-primary text-white w-8 h-8 rounded-full"
                    : "text-[#666666] bg-transparent"
            }`}
            key={page}
            onClick={() => table.setPageIndex(Number(page - 1))}
        >
            {page}
        </button>
    );

    // Determine the pagination structure
    const pages = [];

    // Always show the first page
    if (currentPage > 3) {
        pages.push(renderPageButton(1));
        pages.push(
            <span
                key="start-ellipsis"
                className="w-8 h-8 rounded-full text-[#666666]"
            >
                ...
            </span>
        );
    }

    // Show two pages before the current page if they exist
    for (let i = Math.max(2, currentPage - 2); i < currentPage; i++) {
        pages.push(renderPageButton(i));
    }

    // Show the current page
    pages.push(renderPageButton(currentPage));

    // Show two pages after the current page if they exist
    for (
        let i = currentPage + 1;
        i <= Math.min(currentPage + 2, pageCount - 1);
        i++
    ) {
        pages.push(renderPageButton(i));
    }

    // Show ellipsis and last page if current page is far from the last page
    if (currentPage < pageCount - 2) {
        pages.push(
            <span
                key="end-ellipsis"
                className="w-8 h-8 rounded-full text-[#666666]"
            >
                ...
            </span>
        );
        pages.push(renderPageButton(pageCount));
    } else if (currentPage < pageCount) {
        // Directly show last page if it's not far from the current page
        pages.push(renderPageButton(pageCount));
    }

    return (
        <div className="mt-4 flex flex-col lg:flex-row md:items-center justify-between gap-4 px-6 pb-6">
            <div className="flex items-center gap-6">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="disabled:opacity-30"
                >
                    <ChevronPrevious />
                </button>

                <div className="flex items-center gap-6 text-[#666666] font-medium">
                    {pages}
                </div>

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="disabled:opacity-30"
                >
                    <ChevronNext />
                </button>
            </div>

            <div className="">
                <span className="text-sm font-medium text-nowrap">
                    {`Showing ${table.getRowModel().rows.length} of ${
                        table.getFilteredRowModel().rows.length
                    } results`}
                </span>
            </div>
        </div>
    );
};

export default NewPagination;
