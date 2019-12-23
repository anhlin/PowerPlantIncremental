import React, { useState } from 'react';
import './ui-elements/elements.css';

interface WorkerButtonProps {
    setTotalEnergy: (arg: number) => void;
}

export const Workers: React.FC = () => {
    const [numWorkers, setNumWorkers] = useState(0);

    return <button className="inc_button">Hire Worker ({numWorkers})</button>;
};
