import React from "react";
import { Mark } from "../../../components/icons";
import Button from "../../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const CampaignResponse = ({ message, setIsModalOpen, intent }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const gotoCampaignList = () => {
        setIsModalOpen(false);

        if (pathname === "/campaigns") {
            navigate(0); // Navigates to the current page and refreshe the page to update the table
        }

        navigate("/campaigns");
    };

    return (
        <div className="flex flex-col items-center gap-12 w-full max-w-[229px] mx-auto">
            {(intent === "delete" || intent === "update") ? (
                <div className="space-y-4 w-full">
                    <h3 className="font-semibold text-[#333333] text-center">
                        {intent === "delete" ? "Campaign Deleted" : "Campaign Updated"}
                    </h3>
                    <div className="h-[1px] bg-[#F0F4F4]"></div>
                </div>
            ) : (
                <Mark />
            )}

            <p className="text-sm font-medium text-[#666666] w-full text-center">
                {message}
            </p>

            <Button
                variant="solid"
                size="wide"
                colorScheme="primary"
                classes="font-syne"
                onClick={gotoCampaignList}
            >
                Go Back to campaign list
            </Button>
        </div>
    );
};

export default CampaignResponse;
