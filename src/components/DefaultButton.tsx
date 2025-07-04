import React from "react";

interface ButtonProps {
    label: string;
    onClick?: ()=> void;
    textSize: string;
}

const DefaultButton: React.FC<ButtonProps> = ({label, onClick, textSize}) => {
    const baseClasses = "font-thin text-${textSize} rounded-xl p-1 transistion delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-violet-500 hover:border-2 hover:font-medium active:scale-50";
    const addedClasses = `text-${textSize} ${baseClasses}`;
    return (
        <button onClick={onClick} className={addedClasses} >
            {label}
        </button>
    )
}

export default DefaultButton;