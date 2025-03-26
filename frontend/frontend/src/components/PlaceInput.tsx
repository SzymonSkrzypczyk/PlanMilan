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
    const verify = () => {
        if (destination === "" || duration === "") {
            return;
        }
        setStarted(true);
        setReady(false);
    }
    return <div className="input-container">
        <div className="input-field" id="rounded-input">
            <h4>Gdzie jedziesz?</h4>
            <input id="destination" placeholder="Muqibabë..." value={destination} onChange={(e) => setDestination(e.target.value)}/>
        </div>
        <div className="input-field">
            <h4>Na ile dni?</h4>
            <input id="duration" placeholder="1..." value={duration} onChange={(e) => setDuration(e.target.value)}/>
        </div>
        <button id="confirm" onClick={verify}>Planuj!</button>
    </div>
}