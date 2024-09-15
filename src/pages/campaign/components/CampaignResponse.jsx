import React from "react";
import { Mark } from "../../../components/icons";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const CampaignResponse = (setIsModalOpen) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white flex flex-col items-center gap-12">
            <Mark />

            <p className="text-sm font-medium text-[#666666]">
                Campaign Successfully Created!
            </p>

            <Button
                variant="solid"
                size="wide"
                colorScheme="primary"
                classes="font-syne"
                onClick={() => navigate("/campaigns")}
            >
                Go Back to campaign list
            </Button>
        </div>
    );
};

export default CampaignResponse;
