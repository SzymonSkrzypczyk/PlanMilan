import React from "react";
import "../assets/style/WaitComponent.css";

interface WaitComponentProps {
    loading: boolean;
}

export default function WaitComponent({ loading }: WaitComponentProps) {
    return (
        <div className={`wait-container ${loading ? "visible" : ""}`} style={{ display: loading ? "flex" : "none" }}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
}
