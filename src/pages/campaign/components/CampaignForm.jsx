import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import TagsInput from "../../../components/TagsInput";
import { updateCampaign, createCampaign } from "../api";

const CampaignForm = ({
    campaignData,
    setCampaignData,
    handleFormChange,
    tags,
    setTags,
    enableDailyDigest,
    toggleDailyDigest,
    formIntent,
    setMessage,
    setIsModalOpen,
}) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {campaignName, startDate, linkedKeywords} = campaignData;
    const isFormInvalid = !campaignName || !startDate || linkedKeywords.length === 0;

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        console.log(campaignData);

        const create = await createCampaign(campaignData);

        setIsSubmitting(false);

        if (create.success) {
            setMessage(create.success);
            setIsModalOpen(true);

            return;
        }

        setMessage(`Failed! ${create.message}`);
    };

    const updateHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setMessage("");

        const data = {
            id: campaignData.id,
            campaignName: campaignData.campaignName,
            campaignDescription: campaignData.campaignDescription,
            startDate: campaignData.startDate,
            endDate: campaignData.endDate,
            digestCampaign:
                campaignData.digestCampaign === "Yes" ? true : false,
            linkedKeywords: campaignData.linkedKeywords,
            dailyDigest: campaignData.dailyDigest,
        };

        // console.log(data);
        const update = await updateCampaign(campaignData.id, data);

        if (update.success) {
            setIsSubmitting(false);
            setMessage("Campaign Successfully Updated!");
            setIsModalOpen(true);
        }

        if (update.message) {
            setIsSubmitting(false);
            setMessage(`Update Failed! ${update.message}`);
        }
    };

    const cancel = (e) => {
        e.preventDefault();

        console.log(campaignData);

        setIsModalOpen(true);
    };

    return (
        <form
            className="flex flex-col gap-4 w-full md:max-w-[684px]"
            onSubmit={submitHandler}
        >
            <div className="space-y-1">
                <label htmlFor="campaignName" className="form-label block">
                    Campaign Name{" "}
                    {formIntent === "create" && (
                        <small className="text-[10px] text-redd">*</small>
                    )}
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
                        {formIntent === "create" && (
                            <small className="text-[10px] text-redd">*</small>
                        )}
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
                        End Date
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

            {formIntent === "create" && (
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
            )}

            <div className="space-y-1">
                <label htmlFor="linkedKeywords" className="form-label block">
                    Linked Keywords{" "}
                    {formIntent === "create" && (
                        <small className="text-[10px] text-redd">*</small>
                    )}
                </label>

                <TagsInput
                    tags={tags}
                    setTags={setTags}
                    campaignData={campaignData}
                    setCampaignData={setCampaignData}
                    id="linkedKeywords"
                    isEditable={true}
                />
            </div>

            {formIntent === "update" && (
                <div className="space-y-1">
                    <label htmlFor="digestCampaign" className="form-label block">
                        Want to receive daily digest about the campaign?
                    </label>

                    <div className="w-full px-2 border border-gray-300 rounded-md">
                        <select
                            id="digestCampaign"
                            name="digestCampaign"
                            className={`w-full py-2 bg-white text-gray-700 focus:outline-none `}
                            value={campaignData.digestCampaign}
                            onChange={handleFormChange}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
            )}

            {(enableDailyDigest || campaignData.digestCampaign) && (
                <div className="space-y-1">
                    <label htmlFor="dailyDigest" className="form-label block">
                        {formIntent === "create"
                            ? "Kindly select how often you want to receive daily digest"
                            : "Kindly select the time you want to receive daily digest"}
                    </label>

                    <div
                        className={`${
                            formIntent === "create"
                                ? "w-full md:max-w-44"
                                : "w-full"
                        } px-2 border border-gray-300 rounded-md`}
                    >
                        <select
                            id="dailyDigest"
                            name="dailyDigest"
                            className={`w-full py-2 bg-white text-gray-700 focus:outline-none `}
                            value={campaignData.dailyDigest}
                            onChange={handleFormChange}
                        >
                            <option value="">Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Twice Daily">Twice Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-weekly">Bi-weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                </div>
            )}

            {formIntent === "create" && (
                <div className="flex flex-col sm:flex-row gap-6 mt-6">
                    <Button
                        size="lg"
                        variant="outline"
                        colorScheme="primary"
                        onClick={cancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        size="lg"
                        variant="solid"
                        colorScheme="primary"
                        disabled={isFormInvalid}
                    >
                        {isSubmitting ? "Creating..." : "Create Campaign"}                        
                    </Button>
                </div>
            )}

            {formIntent === "update" && (
                <div className="flex flex-col sm:flex-row gap-6 mt-6">
                    <Button
                        size="lg"
                        variant="solid"
                        colorScheme="red"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        size="lg"
                        variant="outline"
                        colorScheme="primary"
                        onClick={updateHandler}
                        disabled={isFormInvalid}
                    >
                        {isSubmitting ? "Saving..." : "Save Changes"}
                    </Button>
                </div>
            )}
        </form>
    );
};

export default CampaignForm;
