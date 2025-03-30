import TripDayComponent, { DayProps } from "./TripDayComponent";
import "../assets/style/TripList.css";


interface TripListProps{
    days: DayProps[];
    finished: boolean;
}


export default function TripList({days, finished}: TripListProps) {
    return <div className="trip-layout">
        {finished && <h2>Twój plan:</h2>}
        <div id="trips-list">
            {days.map((day, index) => {
                return <TripDayComponent key={index} dzień={day.dzień} aktywnosci={day.aktywnosci}/>
            })} 
        </div>
    </div>
}