import React from "react";

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-[#D9D9D9] opacity-70"></div>
            {children}
        </div>
    );
};

export default Modal;
