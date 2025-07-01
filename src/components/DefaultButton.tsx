import React from "react";

interface ButtonProps {
    label: string;
    onClick?: ()=> void;
}

const DefaultButton: React.FC<ButtonProps> = ({label, onClick}) => {
    return (
        <button onClick={onClick} className="font-thin text-3xl rounded-xl p-1 transistion delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-violet-400/40">
            {label}
        </button>
    )
}

export default DefaultButton;