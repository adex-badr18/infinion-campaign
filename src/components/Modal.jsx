import React from "react";

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 lg:hidden">
            <div className="fixed inset-0 bg-[#D9D9D9] opacity-50"></div>
            {children}
            {/* <div className="overflow-y-auto w-full h-screen z-50 absolute top-0 left-0">
                <div className="">{children}</div>
            </div> */}
        </div>
    );
};

export default Modal;
