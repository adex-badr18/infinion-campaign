import React, { useState } from "react";
import Modal from "../../../components/Modal";
import ConfirmCampaignDelete from "../components/ConfirmCampaignDelete";
import CampaignResponse from "../components/CampaignResponse";
import PageTitle from "../../../components/PageTitle";
import CampaignForm from "../components/CampaignForm";
import FetchError from "../../../components/FetchError";
import { BackArrow } from "../../../components/icons";
import { useNavigate, useLoaderData } from "react-router-dom";
import { getCampaign } from "../api";
import { ISOTodate, formatDateToYYYYMMDD } from "../../../utils/date";

export const loader = async ({ params }) => {
    const campaignResponse = await getCampaign(params.id);

    if (campaignResponse.message || campaignResponse.status) {
        return campaignResponse;
    }
    
    const formattedDataDates = {
        ...campaignResponse,
        id: params.id,
        startDate: formatDateToYYYYMMDD(
            ISOTodate(campaignResponse.startDate)
        ),
        endDate: formatDateToYYYYMMDD(ISOTodate(campaignResponse.endDate)),
    };
    return formattedDataDates;
};

const CampaignEdit = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const [campaignData, setCampaignData] = useState(data.status ? {} : data);
    const [message, setMessage] = useState("")
    const [tags, setTags] = useState(campaignData.linkedKeywords);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setCampaignData((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    };

    return data.message || data.status ? (
        <FetchError error={data} />
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

                {
                    message && (
                        <div className="w-full bg-red-200 text-maroon px-2 py-1 text-sm font-semibold rounded">{message}</div>
                    )
                }

                <CampaignForm
                    campaignData={campaignData}
                    setCampaignData={setCampaignData}
                    handleFormChange={handleFormChange}
                    tags={tags}
                    setTags={setTags}
                    // submitHandler={updateHandler}
                    // cancelHandler={stopCampaign}
                    formIntent="update"
                    setMessage={setMessage}
                    setIsModalOpen={setIsModalOpen}
                />
            </div>

            <Modal isOpen={isModalOpen}>
                <div className="overflow-y-auto w-full max-w-[550px] py-14 rounded-lg shadow-md bg-white z-50">
                    <div className="w-full">
                        <CampaignResponse message={message} setIsModalOpen={setIsModalOpen} intent="update" />
                        {/* <ConfirmCampaignDelete
                            setIsModalOpen={setIsModalOpen}
                        /> */}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CampaignEdit;
