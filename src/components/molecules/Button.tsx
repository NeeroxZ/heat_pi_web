// components/molecules/Button.tsx
import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean; // Optional, da du sie in einigen Fällen nicht setzen möchtest
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
