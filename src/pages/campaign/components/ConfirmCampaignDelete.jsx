import React, {useState} from "react";
import Button from "../../../components/Button";
import CampaignResponse from "./CampaignResponse";

const ConfirmCampaignDelete = ({setIsModalOpen, campaign}) => {
    const [isDeleted, setIsDeleted] = useState(false);

    console.log(campaign);

    const deleteHandler = () => {
        setTimeout(() => {
            setIsDeleted(true);
        }, 2000);
    }

    return !isDeleted ? (
        <div className="bg-white flex flex-col items-center gap-12 w-full max-w-[416px] mx-auto">
            <h3 className="font-semibold text-[#333333]">Stop Campaign</h3>

            <p className="text-sm font-medium text-[#666666] text-center">
                {`Are You sure you want to delete ${campaign.campaignName}? This action cannot
                be undone.`}
            </p>

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
                    Delete Campaign
                </Button>
            </div>
        </div>
    ) : (
        <CampaignResponse message={`Campaign Successfully Deleted!`} setIsModalOpen={setIsModalOpen} />
    );
};

export default ConfirmCampaignDelete;
