import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";
import FetchError from "../../components/FetchError";
import { getCampaigns } from "./api";
import { ISOTodate } from "../../utils/date";

export const loader = async () => {
    const campaignsResponse = await getCampaigns();

    if (!campaignsResponse.status) {
        const formattedDataDates = campaignsResponse.map((dataItem) => ({
            ...dataItem,
            startDate: ISOTodate(dataItem.startDate),
            endDate: ISOTodate(dataItem.endDate),
        }));
        return formattedDataDates;
    }

    return campaignsResponse;
};

const Campaigns = () => {
    const campaignColumns = [
        { id: "s/n", header: "S/N", isSort: false },
        { id: "campaignName", header: "Campaign Name", isSort: true },
        { id: "startDate", header: "Start Date", isSort: false },
        { id: "campaignStatus", header: "Status", isSort: true },
        { id: "actions", header: "Actions", isSort: false },
    ];

    const data = useLoaderData();
    const [tableData, setTableData] = useState(data.status ? {} : data);

    return data.status ? (
        <FetchError error={data} />
    ) : (
        <div className="">
            <div className="w-full space-y-4">
                <PageTitle size="sm" title="All Campaigns" />
                <Table tableData={tableData} cols={campaignColumns} />
            </div>
        </div>
    );
};

export default Campaigns;
