import React from "react";

const PageTitle = ({ size, title }) => {
    return (
        <h1
            className={`${
                size === "sm"
                    ? "text-[20px] font-semibold font-work-sans"
                    : "text-2xl font-bold font-general-sans"
            } text-primary`}
        >
            {title}
        </h1>
    );
};

export default PageTitle;
