import React, { useState } from 'react';
import './App.css';

interface EnergyCounterProps {
    totalEnergy: number;
}

export const EnergyCounter: React.FC<EnergyCounterProps> = props => {
    const { totalEnergy } = props;

    return (
        <div style={{ flex: 1, justifyContent: 'center' }}>
            <h1 className="counter_text">{Math.floor(totalEnergy)}</h1>
        </div>
    );
};
