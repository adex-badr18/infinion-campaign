import React, { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import CampaignResponse from "../components/CampaignResponse";
import ConfirmCampaignDelete from "../components/ConfirmCampaignDelete";
import PageTitle from "../../../components/PageTitle";
import CampaignForm from "../components/CampaignForm";
import CampaignInfo from "../components/CampaignInfo";
import TagsInput from "../../../components/TagsInput";
import { BackArrow } from "../../../components/icons";
import { getCampaign } from "../api";
import { ISOTodate } from "../../../utils/date";
import FetchError from "../../../components/FetchError";

export const loader = async ({ params }) => {
    const campaignResponse = await getCampaign(params.id);

    if (!campaignResponse.status) {
        const formattedDataDates = {
            ...campaignResponse,
            id: params.id,
            startDate: ISOTodate(campaignResponse.startDate),
            endDate: ISOTodate(campaignResponse.endDate),
        };
        return formattedDataDates;
    }

    return campaignResponse;
};

const CampaignView = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const campaignData = useLoaderData();

    const stopCampaign = () => {
        setIsModalOpen(true);
    };

    return campaignData.status ? (
        <FetchError error={campaignData} />
    ) : (
        <div className="space-y-4">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 text-[#333333]"
            >
                <BackArrow /> Back
            </button>

            <div className="w-full md:max-w-[684px] space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <PageTitle size="sm" title="Campaign Information" />

                    <div className="flex items-center px-4 py-2 bg-[#EDF0F0] rounded">
                        <span className="text-sm font-medium text-nowrap pr-4 border-r border-r-[#999999]">
                            Campaign Status
                        </span>
                        <span className="text-sm font-medium text-[#009918] pl-4">
                            {campaignData.campaignStatus}
                        </span>
                    </div>
                </div>

                <CampaignInfo
                    campaignData={campaignData}
                    tags={campaignData.linkedKeywords}
                    cancelHandler={stopCampaign}
                />
            </div>

            <Modal isOpen={isModalOpen}>
                <div className="overflow-y-auto w-full max-w-[550px] py-14 rounded-lg shadow-md bg-white z-50">
                    <div className="w-full">
                        <ConfirmCampaignDelete
                            setIsModalOpen={setIsModalOpen}
                            campaign={campaignData}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CampaignView;
