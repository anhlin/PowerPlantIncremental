import React from 'react';
import { UpgradeItem } from './ui-elements/UpgradeItem';

interface UpgradesProps {
    totalEnergy: number;
    power: number;
    setPower: (arg: number) => void;
    setTotalEnergy: (arg: number) => void;
}

export const Upgrades: React.FC<UpgradesProps> = props => {
    return (
        <div>
            <h1>Upgrades</h1>
            <UpgradeItem
                type={'Button'}
                totalEnergy={props.totalEnergy}
                power={props.power}
                setPower={props.setPower}
                setTotalEnergy={props.setTotalEnergy}
            />
        </div>
    );
};
