import { useState } from "react";
import "../assets/style/TripDayComponent.css";

export interface Activity {
    nazwa_aktywnosci: string;
    opis_aktywnosci: string;
    kiedy?: string;
}

export interface DayProps {
    "dzień": string;
    "aktywnosci": Activity[];
}

export default function TripDayComponent({ dzień, aktywnosci }: DayProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev); 
    };

    return (
        <div className="tripDay">
            <h2 className="day-name" onClick={toggleAccordion} style={{ cursor: "pointer" }}>
                {dzień}
            </h2>
            <div className="horizontal-line"></div>

            <div
                className={`activities-list ${isOpen ? "open" : "closed"}`}
            >
                {aktywnosci && aktywnosci.map((day, index) => (
                    <div key={index} className="activity-item">
                        <h1 className="activity-name">{day.nazwa_aktywnosci}</h1>
                        <p>{day.opis_aktywnosci}</p>
                        {day.kiedy ? (
                            <p>{day.kiedy}</p>
                        ) : (
                            <p>?</p> 
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
