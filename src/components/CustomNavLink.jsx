import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ title, href, icon: NavIcon }) => {
    return (
        <NavLink
            to={href}
            className="flex items-center gap-2 px-6 py-[10px] w-full max-w-[196px] rounded"
            style={({isActive}) => {
                return {
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    color: isActive ? "#247B7B" : "#455454"
                }
            }}
        >
            {({ isActive }) => (
                <>
                    <NavIcon fill={isActive ? "#247B7B" : "#455454"} />
                    <span className="text-sm font-semibold text-nowrap">{title}</span>
                </>
            )}
        </NavLink>
    );
};

export default CustomNavLink;
