import { useState } from "react";
import "../assets/style/PlaceInput.css";


export default function PlaceInput() {
    return <div className="input-container">
        <div className="input-field" id="rounded-input">
            <h4>Where to?</h4>
            <input id="destination" placeholder="Country, city"/>
        </div>
        <div className="input-field">
            <h4>How long?</h4>
            <input id="duration" placeholder="days, weeks"/>
        </div>
        <button id="confirm">Confirm</button>
    </div>
}