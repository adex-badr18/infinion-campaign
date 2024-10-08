import React, { useState } from "react";
import Button from "../../../components/Button";
import CampaignResponse from "./CampaignResponse";
import { deleteCampaign } from "../api";

const ConfirmCampaignDelete = ({ setIsModalOpen, campaign }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isFetchError, setIsFetchError] = useState(false);

    const deleteHandler = async () => {
        setIsDeleting(true);

        const deletedCampaign = await deleteCampaign(campaign.id);

        if (deletedCampaign.success) {
            setIsDeleting(false);
            setIsSubmitted(true);

            return;
        }

        if (deletedCampaign.message) {
            setIsDeleting(false);
            setIsFetchError(true);
        }
    };

    return !isSubmitted ? (
        <div className="bg-white flex flex-col items-center justify-center gap-12 w-full max-w-[416px] mx-auto">
            <div className="space-y-4 w-full">
                <h3 className="font-semibold text-[#333333] text-center">Stop Campaign</h3>
                <div className="h-[1px] bg-[#F0F4F4]"></div>
            </div>

            {isFetchError ? (
                <p className="">{`Failed to delete campaign. Please try again.`}</p>
            ) : (
                <div className="space-y-1">
                    <p className="text-sm font-medium text-[#666666] text-center">
                        {`Are You sure you want to delete ${campaign.campaignName}? `}
                    </p>
                    <p className="text-sm font-medium text-[#666666] text-center">
                        This action cannot be undone.
                    </p>
                </div>
            )}

            <div className="flex flex-col gap-4 md:flex-row w-4/5">
                <Button
                    variant="outline"
                    colorScheme="black"
                    onClick={() => setIsModalOpen(false)}
                >
                    Cancel
                </Button>
                <Button
                    variant="solid"
                    colorScheme="red"
                    size="l"
                    classes=""
                    onClick={deleteHandler}
                >
                    {isDeleting ? "Deleting..." : "Delete Campaign"}
                </Button>
            </div>
        </div>
    ) : (
        <CampaignResponse
            message={`${campaign.campaignName} has been deleted!`}
            setIsModalOpen={setIsModalOpen}
            intent="delete"
        />
    );
};

export default ConfirmCampaignDelete;
