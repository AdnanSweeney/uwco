import React, { useState } from "react";
import '../App.css';

export default function InputRadio(props) {



    return (

        <div className="centered-flex-container even-container-margin" >
            <label>
                <input type="radio" name="term" value={props.label} />
                <div className="centered-flex-container" style={{ backgroundColor: "white", borderRadius: "5.5vh/50%", width: "11vh", height: "11vh" }}>
                    <div className="pink-text" style={{ fontSize: "5vh" }}>
                        {props.label}
                    </div>
                </div>
            </label>
        </div>
    )
}