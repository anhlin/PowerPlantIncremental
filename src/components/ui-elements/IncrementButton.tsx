import React from 'react';
import './elements.css';

interface IncrementButtonProps {
    amount: number;
    increment: (arg: number) => void;
}

export const IncrementButton: React.FC<IncrementButtonProps> = props => {
    const { amount, increment } = props;

    const onIncrement = () => {
        increment(amount);
    };

    return (
        <button className="inc_button" onClick={onIncrement}>
            Add {Math.floor(amount)} energy
        </button>
    );
};
