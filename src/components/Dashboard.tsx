import React, { useState } from 'react';
import { EnergyCounter } from './EnergyCounter';
import { IncrementButton } from './ui-elements/IncrementButton';
import { Upgrades } from './Upgrades';
import { Workers } from './Workers';

export const Dashboard: React.FC = () => {
    const [totalEnergy, setTotalEnergy] = useState(0);

    const [power, setPower] = useState(100);

    const incrementCounter = (inc: number) => {
        setTotalEnergy(totalEnergy + inc);
    };

    return (
        <div>
            <div>
                <EnergyCounter totalEnergy={totalEnergy} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <IncrementButton amount={power} increment={incrementCounter} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Workers />
            </div>
            <Upgrades
                totalEnergy={totalEnergy}
                power={power}
                setPower={setPower}
                setTotalEnergy={setTotalEnergy}
            />
        </div>
    );
};
