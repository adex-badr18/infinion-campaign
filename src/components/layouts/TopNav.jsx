import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { Bell, ChevronDown, HorizontalDivider, Hamburger, Close } from "../icons";
import Modal from "../Modal";
import SideNav from "./SideNav";
import avatar from "../../assets/avatar.png";

const TopNav = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-[85px] py-6 border-b flex-none h-[92px]">
            <Hamburger
                className="block md:hidden"
                onClick={() => setIsSideNavOpen(true)}
            />

            <SearchBar variant="desktop" />

            <div className="flex items-center gap-5">
                <Bell />
                <HorizontalDivider />
                <div className="flex items-center gap-3">
                    <img src={avatar} alt="Avatar" />
                    <div className="flex gap-2 items-center">
                        <span className="">BigTech</span>
                        <ChevronDown />
                    </div>
                </div>
            </div>

            {/* Side Nav */}
            <Modal isOpen={isSideNavOpen}>
                <div className="overflow-y-auto w-[292px] absolute top-0 left-0">
                    <div className="relative h-screen">
                        <Close className="absolute top-3 right-3 text-2xl" onClick={() => setIsSideNavOpen(false)} />
                        <SideNav />
                    </div>
                </div>
            </Modal>
        </nav>
    );
};

export default TopNav;
