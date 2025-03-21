import TripDayComponent, { DayProps } from "./TripDayComponent";
import "../assets/style/TripList.css";


interface TripListProps{
    days: DayProps[];
}


export default function TripList({days}: TripListProps) {
    return <div className="trip-layout">
        <h2>Here's your plan:</h2>
        <div id="trips-list">
            {days.map((day, index) => {
                return <TripDayComponent key={index} dayName={day.dayName} dayActivities={day.dayActivities}/>
            })} 
        </div>
    </div>
}