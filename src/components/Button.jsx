import React from "react";

const Button = ({ children, variant, icon, size, colorScheme, ...rest }) => {
    return (
        <button
            className={`flex items-center justify-center gap-[10px] text-sm font-semibold py-[10px] px-4 rounded-[4px] min-w-24 border 
            ${size === "lg" && "w-[196px]"} 
            max-w-[196px] 
            ${(variant === "solid" && colorScheme === "primary") && "bg-primary border-primary text-white hover:bg-teal-600"} 
            ${(variant === "solid" && colorScheme === "teal") && "bg-[#F0F4F4] border-[#F0F4F4] text-primary hover:bg-teal-50"} 
            ${(variant === "outline" && colorScheme === "primary") && "bg-ptransparent border-primary text-primary hover:"} 
            ${(variant === "solid" && colorScheme === "red") && "bg-maroon border-maroon text-white hover:bg-red-700"} 
            ${(variant === "outline" && colorScheme === "red") && "bg-transparent border-maroon text-maroon hover:"} 
            ${(variant === "solid" && colorScheme === "black") && "bg-black border-black text-white hover:"} 
            ${(variant === "outline" && colorScheme === "black") && "bg-transparent border-black text-black hover:"} 
            ${variant === "outline" && ""}
            
            `}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
