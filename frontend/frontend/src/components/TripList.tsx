import { useState } from "react";
import TripDayComponent, { DayProps } from "./TripDayComponent";


interface TripListProps{
    days: DayProps[];
}


export default function TripList({days}: TripListProps) {
    return <div id="trips-list">
        {days.map((day, index) => {
            return <TripDayComponent key={index} dayName={day.dayName} dayActivities={day.dayActivities}/>
        })}
    </div>
}