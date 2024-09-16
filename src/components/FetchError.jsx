import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const FetchError = ({ error }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full px-16 md:px-0 h-[80vh] flex items-center justify-center">
            <div className="bg-white border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg">
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-maroon mt-4">
                    Error!
                </p>
                <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
                    {error.message ||
                        "Sorry, something went wrong while fetching the data."}
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                    <Button variant="outline" colorScheme="primary" onClick={() => navigate("/")}>Return Home</Button>
                    <Button variant="solid" colorScheme="teal" onClick={() => navigate(-1)}>Go Back</Button>
                    <Button variant="solid" colorScheme="primary" onClick={() => window.location.reload()}>Refresh</Button>
                </div>
            </div>
        </div>
    );
};

export default FetchError;
