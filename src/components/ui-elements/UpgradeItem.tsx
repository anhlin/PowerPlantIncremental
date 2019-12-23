import React, { useState } from 'react';

interface UpgradeItemProps {
    type: string;
    totalEnergy: number;
    power: number;
    setPower: (arg: number) => void;
    setTotalEnergy: (arg: number) => void;
}

export const UpgradeItem: React.FC<UpgradeItemProps> = props => {
    const { type, totalEnergy, power, setPower, setTotalEnergy } = props;

    const multiplier = 1.05;

    const [upgradeCost, setUpgradeCost] = useState(1000);
    const [upgradeValue, setUpgradeValue] = useState(power * multiplier);

    const [level, setLevel] = useState(1);

    const onUpgradePurchase = () => {
        if (totalEnergy >= upgradeCost) {
            setPower(power * multiplier);
            setTotalEnergy(totalEnergy - upgradeCost);
            setUpgradeCost(upgradeCost * multiplier);
            setUpgradeValue(upgradeValue * multiplier);
            setLevel(level + 1);
        }
    };

    return (
        <div>
            <h2>{`${type} (${level})`}</h2>
            <h3>Cost: {Math.floor(upgradeCost)}</h3>
            <h3>Value: {Math.floor(upgradeValue)}</h3>
            <button onClick={onUpgradePurchase}>Buy</button>
        </div>
    );
};
