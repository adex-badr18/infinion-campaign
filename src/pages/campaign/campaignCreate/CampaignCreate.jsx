import React, { useState } from "react";
import PageTitle from "../../../components/PageTitle";
import Modal from "../../../components/Modal";
import CampaignResponse from "../components/CampaignResponse";
import CampaignForm from "../components/CampaignForm";

const CampaignCreate = () => {
    const [tags, setTags] = useState([]);
    const [enableDailyDigest, setEnableDailyDigest] = useState(true);
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [campaignData, setCampaignData] = useState({
        campaignName: "",
        campaignDescription: "",
        startDate: "",
        endDate: "",
        digestCampaign: enableDailyDigest,
        linkedKeywords: tags,
        dailyDigest: "",
    });

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setCampaignData((prev) => ({
            ...prev,
            linkedKeywords: tags,
            digestCampaign: enableDailyDigest,
            [name]: elementValue,
        }));
    };

    const toggleDailyDigest = () => {
        setEnableDailyDigest(!enableDailyDigest);

        setCampaignData((prev) => ({
            ...prev,
            digestCampaign: !enableDailyDigest,
        }));
    };

    return (
        <div className="space-y-4">
            <PageTitle size="sm" title="Create New Campaign" />

            {message && (
                <div className="w-full bg-red-200 text-maroon px-2 py-1 text-sm font-semibold rounded">
                    {message}
                </div>
            )}

            <CampaignForm
                campaignData={campaignData}
                setCampaignData={setCampaignData}
                handleFormChange={handleFormChange}
                tags={tags}
                setTags={setTags}
                enableDailyDigest={enableDailyDigest}
                toggleDailyDigest={toggleDailyDigest}
                formIntent="create"
                setMessage={setMessage}
                setIsModalOpen={setIsModalOpen}
            />

            <Modal isOpen={isModalOpen}>
                <div className="overflow-y-auto w-full max-w-[550px] py-14 rounded-lg shadow-md bg-white z-50">
                    <div className="w-full">
                        <CampaignResponse
                            message={message}
                            setIsModalOpen={setIsModalOpen}
                            intent="create"
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CampaignCreate;
