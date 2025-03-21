import { useState } from "react";
import "../assets/style/TripDayComponent.css";

export interface Activity {
    activityName: string;
    activityDescription: string;
    activityTimeFrame?: string;
}

export interface DayProps {
    dayName: string;
    dayActivities: Activity[];
}

export default function TripDayComponent({ dayName, dayActivities }: DayProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev); 
    };

    return (
        <div className="tripDay">
            <h2 className="day-name" onClick={toggleAccordion} style={{ cursor: "pointer" }}>
                {dayName}
            </h2>
            <div className="horizontal-line"></div>

            <div
                className={`activities-list ${isOpen ? "open" : "closed"}`}
            >
                {dayActivities && dayActivities.map((day, index) => (
                    <div key={index} className="activity-item">
                        <h1 className="activity-name">{day.activityName}</h1>
                        <p>{day.activityDescription}</p>
                        {day.activityTimeFrame ? (
                            <p>{day.activityTimeFrame}</p>
                        ) : (
                            <p>?</p> 
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
