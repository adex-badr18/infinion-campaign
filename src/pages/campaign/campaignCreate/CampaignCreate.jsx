import React, { useState } from "react";
import Button from "../../../components/Button";
import PageTitle from "../../../components/PageTitle";
import TagsInput from "../../../components/TagsInput";
import Modal from "../../../components/Modal";
import CampaignResponse from "../components/CampaignResponse";
import Select from "../../../components/Select";
import CampaignForm from "../components/CampaignForm";

import { useNavigate } from "react-router-dom";
import ConfirmCampaignDelete from "../components/ConfirmCampaignDelete";

const CampaignCreate = () => {
    const [tags, setTags] = useState([]);
    const [enableDailyDigest, setEnableDailyDigest] = useState(true);
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
    const navigate = useNavigate();

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

    const submit = (e) => {
        e.preventDefault();

        console.log(campaignData);

        setIsModalOpen(true);
    };

    const cancel = (e) => {
        e.preventDefault();

        console.log(campaignData);

        setIsModalOpen(true);
    };

    return (
        <div className="space-y-4">
            <PageTitle size="sm" title="Create New Campaign" />

            <CampaignForm
                campaignData={campaignData}
                setCampaignData={setCampaignData}
                handleFormChange={handleFormChange}
                tags={tags}
                setTags={setTags}
                enableDailyDigest={enableDailyDigest}
                toggleDailyDigest={toggleDailyDigest}
                formIntent="create"
                submitHandler={submit}
                cancelHandler={cancel}
            />

            <Modal isOpen={isModalOpen}>
                <div className="overflow-y-auto w-full max-w-[550px] py-14 rounded-lg shadow-md bg-white z-50">
                    <div className="w-full">
                        {/* <CampaignResponse message={`Campaign Successfully Created!`} /> */}
                        <ConfirmCampaignDelete
                            setIsModalOpen={setIsModalOpen}
                            campaign={`Campaign`}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CampaignCreate;
