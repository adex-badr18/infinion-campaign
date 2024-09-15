import React, { useState } from "react";
import { Delete, Edit, Preview } from "./icons";
import Modal from "./Modal";
import ConfirmCampaignDelete from "../pages/campaign/components/ConfirmCampaignDelete";
import { useNavigate } from "react-router-dom";

const TableActions = ({ row }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const campaign = row.original;
    const navigate = useNavigate();

    const preview = () => {
        navigate(`/campaigns/${campaign.id}`);
    };

    const edit = () => {
        navigate(`/campaigns/${campaign.id}`);
    };

    return (
        <div className="flex items-center gap-4 md:gap-6">
            <Preview className="cursor-pointer" onClick={preview} />
            <Edit className="cursor-pointer" onClick={edit} />
            <Delete className="cursor-pointer" onClick={() => setIsModalOpen(true)} />

            <Modal isOpen={isModalOpen}>
                <div className="overflow-y-auto w-full max-w-[550px] py-14 rounded-lg shadow-md bg-white z-50">
                    <div className="w-full">
                        <ConfirmCampaignDelete
                            setIsModalOpen={setIsModalOpen}
                            campaign={campaign}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TableActions;
