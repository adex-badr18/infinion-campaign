import React from "react";

const Button = ({ children, variant, icon, size, colorScheme, ...rest }) => {
    return (
        <button
            className={`flex items-center justify-center gap-[10px] text-sm font-semibold py-[10px] px-4 rounded-[4px] min-w-24 border 
            ${size === "lg" && "w-[196px]"} 
            max-w-[196px] 
            ${(variant === "solid" && colorScheme === "primary") && "bg-primary border-primary text-white"} 
            ${(variant === "outline" && colorScheme === "primary") && "bg-ptransparent border-primary text-primary"} 
            ${(variant === "solid" && colorScheme === "red") && "bg-maroon border-maroon text-white"} 
            ${(variant === "outline" && colorScheme === "red") && "bg-transparent border-maroon text-maroon"} 
            ${(variant === "solid" && colorScheme === "black") && "bg-black border-black text-white"} 
            ${(variant === "outline" && colorScheme === "black") && "bg-transparent border-black text-black"} 
            ${variant === "outline" && ""}
            
            `}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
