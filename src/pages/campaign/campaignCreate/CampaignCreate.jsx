import React, { useState } from "react";
import Button from "../../../components/Button";
import PageTitle from "../../../components/PageTitle";
import TagsInput from "../../../components/TagsInput";
import Select from "../../../components/Select";

const CampaignCreate = () => {
    const [tags, setTags] = useState([]);
    const [enableDailyDigest, setEnableDailyDigest] = useState(true);
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

    const submit = (e) => {
        e.preventDefault();

        console.log(campaignData);
    };

    return (
        <div className="space-y-4">
            <PageTitle size="sm" title="Create New Campaign" />

            <form
                className="flex flex-col gap-4 w-full md:max-w-[684px]"
                onSubmit={submit}
            >
                <div className="space-y-1">
                    <label htmlFor="campaignName" className="form-label block">
                        Campaign Name{" "}
                        <small className="text-[10px] text-redd">*</small>
                    </label>
                    <input
                        type="text"
                        name="campaignName"
                        id="campaignName"
                        value={campaignData.campaignName}
                        onChange={handleFormChange}
                        placeholder="e.g. The Future is now"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="campaignDescription"
                        className="form-label block"
                    >
                        Campaign Description
                    </label>
                    <textarea
                        name="campaignDescription"
                        id="campaignDescription"
                        value={campaignData.campaignDescription}
                        onChange={handleFormChange}
                        placeholder="Please add a description to your campaign"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="startDate" className="form-label block">
                            Start Date{" "}
                            <small className="text-[10px] text-redd">*</small>
                        </label>
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            value={campaignData.startDate}
                            onChange={handleFormChange}
                            placeholder="dd/mm/yyyy"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="endDate" className="form-label block">
                            End Date{" "}
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            id="endDate"
                            value={campaignData.endDate}
                            onChange={handleFormChange}
                            placeholder="dd/mm/yyyy"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center gap-4">
                    <label htmlFor="dailyDigest" className="form-label block">
                        Want to receive daily digest about the campaign?
                    </label>
                    <div
                        id="dailyDigest"
                        onClick={toggleDailyDigest}
                        className={`w-16 h-8 flex-none flex items-center rounded-full p-1 cursor-pointer ${
                            enableDailyDigest ? "bg-[#6E0080]" : "bg-gray-300"
                        }`}
                    >
                        <div
                            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                                enableDailyDigest
                                    ? "translate-x-8"
                                    : "translate-x-0"
                            }`}
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="linkedKeywords"
                        className="form-label block"
                    >
                        Linked Keywords{" "}
                        <small className="text-[10px] text-redd">*</small>
                    </label>

                    <TagsInput
                        tags={tags}
                        setTags={setTags}
                        campaignData={campaignData}
                        setCampaignData={setCampaignData}
                        id="linkedKeywords"
                    />
                </div>

                {enableDailyDigest && (
                    <div className="space-y-1">
                        <label
                            htmlFor="dailyDigest"
                            className="form-label block"
                        >
                            Kindly select how often you want to receive daily
                            digest
                        </label>

                        <div className="w-full md:max-w-44 px-2 border border-gray-300 rounded-md">
                            <select
                                id="dailyDigest"
                                name="dailyDigest"
                                className={`w-full py-2 bg-white text-gray-700 focus:outline-none `}
                                value={campaignData.dailyDigest}
                                onChange={handleFormChange}
                            >
                                <option value="">Select</option>
                                <option value="Once">Once</option>
                                <option value="Twice">Twice</option>
                                <option value="3 Times">3 Times</option>
                                <option value="4 Times">4 Times</option>
                            </select>
                        </div>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-6 mt-6">
                    <Button size="lg" variant="outline" colorScheme="primary">
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        size="lg"
                        variant="solid"
                        colorScheme="primary"
                    >
                        Create Campaign
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CampaignCreate;
