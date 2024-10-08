import React from "react";
import { ChevronNext } from "./icons";
import { ChevronPrevious } from "./icons";

const Pagination = ({ table, tableData }) => {
    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex + 1;

    // Calculate the range of pages to display
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(pageCount, currentPage + 3);

    // Get an array of page numbers to display
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="mt-4 flex flex-col lg:flex-row md:items-center justify-between gap-4 px-6 pb-6">
            {/* <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <span className="font-medium text-sm text-custom-green">
                    {`Page ${
                        table.getState().pagination.pageIndex + 1
                    } of ${table.getPageCount()}`}
                </span>

                <span className="flex items-center gap-1 text-sm">
                    Go to page:
                    <input
                        type="number"
                        min="1"
                        max={table.getPageCount()}
                        className="border border-primary text-sm p-1 rounded-sm w-10 bg-transparent text-center outline-none"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            table.setPageIndex(page);
                        }}
                    />
                </span>

                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                    className="p-2 text-sm bg-transparent outline-none"
                >
                    {generateMultiplesOf10(tableData.length).map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div> */}

            <div className="flex items-center gap-6">
                <button
                    onClick={() => {
                        table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                    className="disabled:opacity-30"
                >
                    <ChevronPrevious />
                </button>

                <div className="flex items-center gap-6 text-[#666666] font-medium">
                    {startPage > 1 && (
                        <span className="w-8 h-8 rounded-full text-[#666666]">...</span>
                    )}

                    {pages.map((page) => (
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
                    ))}

                    {endPage < pageCount && (
                        <span className="w-8 h-8 rounded-full text-[#666666]">...</span>
                    )}
                </div>

                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className="disabled:opacity-30"
                >
                    <ChevronNext />
                </button>
            </div>

            <div className="">
                <span className="text-sm font-medium text-nowrap">
                    {`Showing ${table.getRowModel().rows.length} of ${table.getFilteredRowModel().rows.length} results`}
                </span>
            </div>
        </div>
    );
};

export default Pagination;
