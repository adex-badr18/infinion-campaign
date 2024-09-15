import React from "react";
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";
import { campaignsData } from "../../components/data";

const Campaigns = () => {
    const campaignColumns = [
        { id: "s/n", header: "S/N" },
        { id: "campaignName", header: "Campaign Name" },
        { id: "startDate", header: "Start Date" },
        { id: "campaignStatus", header: "Status" },
        { id: "actions", header: "Actions" },
    ];

    return (
        <div className="">
            <div className="w-full space-y-4">
                <PageTitle size="sm" title="All Campaigns" />
                <Table tableData={campaignsData} cols={campaignColumns} />
            </div>
        </div>
    );
};

export default Campaigns;
