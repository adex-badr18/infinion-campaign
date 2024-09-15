import React from "react";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import DateRangePicker from "../../components/DateRangePicker";
import { Plus, Download, Calendar } from "../../components/icons";
import emptySearchImg from "../../assets/empty-search.png";

const Overview = () => {
    return (
        <div className="h-full grid grid-rows-[40px_1fr] gap-10">
            <div className="flex justify-between items-center">
                <PageTitle title="Overview" size="lg" />

                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden lg:block flex-none">
                        <DateRangePicker />
                    </div>

                    <div className="flex items-center px-2 sm:px-4 py-[10px] border rounded cursor-pointer lg:hidden">
                        <Calendar />
                    </div>

                    <Button
                        variant="solid"
                        classes="grow"
                        icon={<Download />}
                        colorScheme="teal"
                    >
                        Export
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-center lg:justify-center gap-9">
                <img
                    src={emptySearchImg}
                    alt="Empty Search"
                    className="w-full max-w-80"
                />
                <p className="text-sm">
                    No activity yet. Create a new campaign to get started
                </p>
                <Button
                    variant="solid"
                    size="lg"
                    icon={<Plus />}
                    colorScheme="primary"
                >
                    New Campaign
                </Button>
            </div>
        </div>
    );
};

export default Overview;
