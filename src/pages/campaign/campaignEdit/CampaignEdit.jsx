import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import CampaignResponse from "../components/CampaignResponse";
import ConfirmCampaignDelete from "../components/ConfirmCampaignDelete";
import PageTitle from "../../../components/PageTitle";
import CampaignForm from "../components/CampaignForm";
import TagsInput from "../../../components/TagsInput";
import { BackArrow } from "../../../components/icons";
import { Link } from "react-router-dom";

const CampaignEdit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [campaignData, setCampaignData] = useState({
        id: 1,
        campaignName: "MTN Campaign",
        campaignDescription: "MTN Campaign description.",
        startDate: "2024-05-12",
        endDate: "2025-05-12",
        digestCampaign: true,
        linkedKeywords: ["MTN", "subscribe", "ISP"],
        dailyDigest: "Monthly",
        campaignStatus: "Active",
    });

    const [tags, setTags] = useState(campaignData.linkedKeywords);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setCampaignData((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    };

    const updateCampaign = (e) => {
        e.preventDefault();

        console.log(campaignData);
    };

    const stopCampaign = () => {
        console.log(campaignData);
    };

    return (
        <div className="space-y-4">
            <Link to=".." className="flex items-center gap-1 text-[#333333]">
                <BackArrow /> Back
            </Link>

            <div className="w-full md:max-w-[684px] space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <PageTitle size="sm" title="Edit Campaign Information" />

                    <div className="flex items-center px-4 py-2 bg-[#EDF0F0] rounded">
                        <span className="text-sm font-medium text-nowrap pr-4 border-r border-r-[#999999]">
                            Campaign Status
                        </span>
                        <span className="text-sm font-medium text-[#009918] pl-4">
                            {campaignData.campaignStatus}
                        </span>
                    </div>
                </div>

                <CampaignForm
                    campaignData={campaignData}
                    setCampaignData={setCampaignData}
                    handleFormChange={handleFormChange}
                    tags={tags}
                    setTags={setTags}
                    submitHandler={updateCampaign}
                    cancelHandler={stopCampaign}
                    formIntent="update"
                />
            </div>

            <Modal isOpen={isModalOpen}>
                <div className="overflow-y-auto w-full max-w-[550px] py-14 rounded-lg shadow-md bg-white z-50">
                    <div className="w-full">
                        {/* <CampaignResponse goToCampaigns={goToCampaigns} /> */}
                        <ConfirmCampaignDelete
                            setIsModalOpen={setIsModalOpen}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CampaignEdit;
