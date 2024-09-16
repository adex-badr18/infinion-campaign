import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons";
import SearchBar from "../SearchBar";
import Button from "../Button";
import NeedHelp from "../NeedHelp";
import { Plus } from "../icons";
import CustomNavLink from "../CustomNavLink";
import { navLinkData } from "../data";

const SideNav = () => {
    const navigate = useNavigate();

    return (
        <nav className="px-8 py-6 overflow-y-auto bg-[#F0F4F4] h-full">
            <Logo />

            <div className="my-10 space-y-8">
                <SearchBar variant="mobile" />
                <Button
                    variant="solid"
                    size="lg"
                    icon={<Plus />}
                    colorScheme="primary"
                    onClick={() => navigate("/campaigns/create")}
                >
                    New Campaign
                </Button>

                <div className="">
                    {navLinkData.map((link) => (
                        <CustomNavLink
                            key={link.id}
                            title={link.title}
                            href={link.href}
                            icon={link.icon}
                        />
                    ))}
                </div>
            </div>

            <NeedHelp />
        </nav>
    );
};

export default SideNav;
