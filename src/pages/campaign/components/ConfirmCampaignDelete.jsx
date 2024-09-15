import React from "react";
import Button from "../../../components/Button";

const ConfirmCampaignDelete = ({setIsModalOpen}) => {
    return (
        <div className="bg-white flex flex-col items-center gap-12 w-full max-w-[416px] mx-auto">
            <h3 className="font-semibold text-[#333333]">Stop Campaign</h3>

            <p className="text-sm font-medium text-[#666666] text-center">
                Are You sure you want to delete MTN campaign? This action cannot
                be undone.
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
                >
                    Delete Campaign
                </Button>
            </div>
        </div>
    );
};

export default ConfirmCampaignDelete;
