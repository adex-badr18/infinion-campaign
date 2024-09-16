import React, { useState, useEffect } from "react";
import { TagClose } from "./icons";

const TagsInput = ({
    tags,
    setTags,
    campaignData,
    setCampaignData,
    isEditable,
}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setCampaignData(prev => ({
            ...prev,
            linkedKeywords: [...tags],
        }));
    }, [tags]);

    // Handle input changes
    const handleInputChange = (e) => {
        e.preventDefault();

        setInputValue(e.target.value);
    };

    // Handle adding new tags when Enter is pressed
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if (inputValue.trim() !== "") {
                setTags([...tags, inputValue.trim()]);
                setInputValue("");
            }
        }
    };

    // Handle removing a tag
    const removeTag = (indexToRemove) => {
        if (isEditable) {
            setTags(tags.filter((_, index) => index !== indexToRemove));
        }
    };

    return (
        <div className="border border-gray-300 rounded p-3 flex items-start flex-wrap gap-[10px] min-h-20">
            {/* Render the tags */}
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 bg-primary text-white rounded px-3 py-1 cursor-pointer"
                    onClick={() => removeTag(index)}
                >
                    <span>{tag}</span>
                    {isEditable && <TagClose />}
                </div>
            ))}

            {/* Input field for adding new tags */}
            {/* Display placeholder only when tags array is empty */}
            {isEditable && (
                <input
                    type="text"
                    className="flex-grow outline-none py-1"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={
                        tags.length === 0
                            ? "To add keywords, type your keyword and press enter"
                            : ""
                    }
                />
            )}
        </div>
    );
};

export default TagsInput;
