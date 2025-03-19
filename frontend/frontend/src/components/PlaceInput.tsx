import { useState } from "react";
import "../assets/style/PlaceInput.css";

interface InputProps {
    destination: string;
    setDestination: (destination: string) => void;
    duration: string;
    setDuration: (duration: string) => void;
    setStarted: (started: boolean) => void;
    setReady: (ready: boolean) => void;
}


export default function PlaceInput({destination, setDestination, duration, setDuration, setStarted, setReady}: InputProps) {
    return <div className="input-container">
        <div className="input-field" id="rounded-input">
            <h4>Where to?</h4>
            <input id="destination" placeholder="Country, city" value={destination} onChange={(e) => setDestination(e.target.value)}/>
        </div>
        <div className="input-field">
            <h4>How long?</h4>
            <input id="duration" placeholder="days, weeks" value={duration} onChange={(e) => setDuration(e.target.value)}/>
        </div>
        <button id="confirm" onClick={() => {setStarted(true); setReady(false)}}>Confirm</button>
    </div>
}