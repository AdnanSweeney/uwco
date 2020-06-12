import React, { useState } from "react";
import '../App.css';

export default function InputRadio(props) {

    return (
        <div className="centered-flex-container even-container-margin" >
            <div className="centered-flex-container" style={{ borderRadius: "5.5vh/50%", width: "11vh", height: "11vh", backgroundColor: "white" }}>
                <div style={{ color: "#FF4E8D", fontSize: "5vh" }}>
                    {props.label}
                </div>
            </div>
        </div>
    )
}