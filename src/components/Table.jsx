import React, { forwardRef, useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    createColumnHelper,
    flexRender,
} from "@tanstack/react-table";

import Modal from "./Modal";
import Pagination from "./Pagination";
import Filter from "./Filter";
import PageTitle from "./PageTitle";
import TableActions from "./TableActions";
import { ISOTodate, formatDateToDDMMYYYY } from "../utils/date";

const Table = ({ tableData, cols }) => {
    const [data] = useState(tableData);
    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // const [activeLength, setActiveLength] = useState();
    // const [inactiveLength, setInactiveLength] = useState();

    const columnHelper = createColumnHelper();
    const columns = cols.map((col) => {
        if (col.id === "s/n") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => <span>{`${info.row.index + 1}.`}</span>,
                filterFn: "includesString",
            });
        }

        if (col.id === "startDate") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => <span>{info.getValue()}</span>,
                filterFn: "includesString",
            });
        }

        if (col.id === "campaignStatus") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => {
                    const value = info.getValue();

                    return (
                        <span
                            className={`text-xs uppercase font-bold font-syne ${
                                value === "Active"
                                    ? "text-[#009918]"
                                    : "text-maroon"
                            }`}
                        >
                            {value}
                        </span>
                    );
                },
                filterFn: "equalsString",
            });
        }

        if (col.id === "actions") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: TableActions,
                filterFn: "includesString",
            });
        }

        return columnHelper.accessor(col.id, {
            id: col.id,
            header: col.header,
            cell: (info) => (
                <span className="capitalize">
                    {info.getValue() ? info.getValue() : "-"}
                </span>
            ),
            filterFn: "includesString",
        });
    });

    // Table instance
    const table = useReactTable({
        data,
        columns,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        state: {
            columnFilters,
            globalFilter,
        },
    });

    // Get the lengths of active and inactive campaigns in the table
    const activeRowsCount = useMemo(() => {
        return table
            .getFilteredRowModel()
            .rows.filter(
                (campaign) => campaign.getValue("campaignStatus") === "Active"
            ).length;
    }, [table.getFilteredRowModel().rows]);

    const inactiveRowsCount = useMemo(() => {
        return table
            .getFilteredRowModel()
            .rows.filter(
                (campaign) => campaign.getValue("campaignStatus") === "Inactive"
            ).length;
    }, [table.getFilteredRowModel().rows]);

    console.log(activeRowsCount)
    console.log(inactiveRowsCount)

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* <div className="flex flex-row justify-between items-start md:items-center gap-6">
                <div className="hidden md:flex">
                    <Filter
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                        tableData={tableData}
                    />
                </div>

                <div className="md:hidden">
                    <MdFilterList
                        onClick={() => setIsFilterOpen(true)}
                        className="text-3xl text-[#343C6A]"
                    />
                </div>
            </div> */}

            <Filter
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                tableData={tableData}
                table={table}
                activeRowsCount={activeRowsCount}
                inactiveRowsCount={inactiveRowsCount}
            />

            <div className="overflow-auto rounded">
                <table className="w-full ">
                    <thead className="bg-[#F0F4F4] dark:bg-gray-700 w-full px-[10px] py-3 rounded">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr className="rounded" key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="th">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className="bg-white divide-y w-full divide-[#F1F1F1] dark:bg-gray-800 dark:divide-gray-700">
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row, i) => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="table-data"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr className="text-center h-32">
                                <td colSpan={12}>No record found!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <Pagination table={table} tableData={tableData} />

            {/* Mobile Filter Modal */}
            {/* <Modal isOpen={isFilterOpen}>
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Filter</h3>
                    <MdClose
                        className="absolute top-0 right-4 text-2xl"
                        onClick={() => setIsFilterOpen(false)}
                    />
                    <Filter
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                    />
                </div>
            </Modal> */}
        </div>
    );
};

export default Table;
