import React from "react";
import { useNavigate } from "react-router-dom";
import { campaignsData } from "../../../components/data";
import TagsInput from "../../../components/TagsInput";
import Button from "../../../components/Button";
import { ISOTodate } from "../../../utils/date";

const CampaignInfo = ({ campaignData, tags, cancelHandler }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 w-full md:max-w-[684px]">
            <div className="space-y-1">
                <label htmlFor="campaignName" className="form-label block">
                    Campaign Name
                </label>
                <div
                    id="campaignName"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                    {campaignData.campaignName}
                </div>
            </div>

            <div className="space-y-1">
                <label
                    htmlFor="campaignDescription"
                    className="form-label block"
                >
                    Campaign Description
                </label>
                <div
                    id="campaignDescription"
                    className="w-full min-h-20 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                    {campaignData.campaignDescription}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label htmlFor="startDate" className="form-label block">
                        Start Date
                    </label>
                    <div
                        id="startDate"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                        {ISOTodate(campaignData.startDate)}
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="endDate" className="form-label block">
                        End Date
                    </label>
                    <div
                        id="endDate"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                        {ISOTodate(campaignData.endDate)}
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="linkedKeywords" className="form-label block">
                    Linked Keywords
                </label>

                <TagsInput
                    id="linkedKeywords"
                    tags={tags}
                    campaignData={campaignData}
                    isEditable={false}
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="dailyDigest" className="form-label block">
                    Want to receive daily digest about the campaign?
                </label>

                <div className="w-full px-2 border border-gray-300 rounded-md">
                    <select
                        id="dailyDigest"
                        className={`w-full py-2 bg-white text-gray-700 focus:outline-none `}
                    >
                        <option value={campaignData.digestCampaign}>
                            {campaignData.digestCampaign ? "Yes" : "No"}
                        </option>
                    </select>
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="dailyDigest" className="form-label block">
                    Kindly select the time you want to receive daily digest
                </label>

                <div
                    className={`w-full px-2 border border-gray-300 rounded-md`}
                >
                    <select
                        id="dailyDigest"
                        className={`w-full py-2 bg-white text-gray-700 focus:outline-none `}
                    >
                        <option value={campaignData.dailyDigest}>
                            {campaignData.dailyDigest}
                        </option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <Button
                    size="lg"
                    variant="solid"
                    colorScheme="red"
                    onClick={cancelHandler}
                >
                    Stop Campaign
                </Button>
                <Button
                    type="submit"
                    size="lg"
                    variant="outline"
                    colorScheme="primary"
                    onClick={() => navigate(`/campaigns/${campaignData.id}/edit`)}
                >
                    Edit Information
                </Button>
            </div>
        </div>
    );
};

export default CampaignInfo;
