import React from "react";
import { Logo } from "../icons";
import SearchBar from "../SearchBar";
import Button from "../Button";
import { Plus } from "../icons";
import CustomNavLink from "../CustomNavLink";
import { navLinkData } from "../data";
import { Overview, Campaign } from "../icons";

const SideNav = () => {
    return (
        <nav className="px-8 py-6 overflow-y-auto bg-[#F0F4F4] h-full">
            <Logo />

            <div className="mt-14 space-y-10">
                <SearchBar variant="mobile" />
                <Button
                    variant="solid"
                    size="lg"
                    icon={<Plus />}
                    colorScheme="primary"
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
            {/* <Button variant="outline" size="" colorScheme="red">New Campaign</Button>
            <Button variant="solid" size="" colorScheme="red">New Campaign</Button>
            <Button variant="outline" size="" colorScheme="black">New</Button> */}
        </nav>
    );
};

export default SideNav;
