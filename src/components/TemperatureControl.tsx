// components/TemperatureControl.tsx
import React, { useState, useEffect } from 'react';
import Button from './molecules/Button';

interface TemperatureControlProps {
    onTriggerApi: () => void;
}

const TemperatureControl: React.FC<TemperatureControlProps> = ({ onTriggerApi }) => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const currentHour = new Date().getHours();
            // Deaktiviere den Button zwischen 5 und 6 Uhr und zwischen 17 und 18 Uhr
            const isDisabled = (currentHour >= 5 && currentHour < 6) || (currentHour >= 17 && currentHour < 18);
            setButtonDisabled(isDisabled);
        };

        const interval = setInterval(() => {
            checkTime();
        }, 1000 * 60); // Überprüfe jede Minute

        // Überprüfe die Zeit sofort nach dem Rendern der Komponente
        checkTime();

        // Clear das Interval, wenn die Komponente unmontiert wird
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Hier kommen andere Teile der Temperatursteuerung hin */}
            <Button onClick={onTriggerApi} label="Heizung steuern" disabled={isButtonDisabled} />
        </div>
    );
};

export default TemperatureControl;
