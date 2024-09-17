import React from "react";
import { Mark } from "../../../components/icons";
import Button from "../../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const CampaignResponse = ({ message, setIsModalOpen }) => {
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
            <Mark />

            <p className="text-sm font-medium text-[#666666]">
                {message}
                {/* Campaign Successfully Created! */}
            </p>

            <Button
                variant="solid"
                size="wide"
                colorScheme="primary"
                classes="font-syne"
                onClick={gotoCampaignList}
                // onClick={() => navigate("/campaigns")}
            >
                Go Back to campaign list
            </Button>
        </div>
    );
};

export default CampaignResponse;
