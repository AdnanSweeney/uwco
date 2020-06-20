import React, { useState } from "react";
import '../App.css';

export default function InputRadio(props) {
    return (

        <div className="centered-flex-container even-container-margin" >
            <label style={{outlineStyle: "none"}}>
                <input type="radio"
                    name="term"
                    defaultChecked={props.defaultChecked}
                    value={props.label}
                    onClick={() => { props.setSelectedTerm(props.label) }}
                />

                <div className="centered-flex-container" style={{outline: "none", backgroundColor: "white", borderRadius: "5.5vh/50%", width: "11vh", height: "11vh" }}>
                    <div className="pink-text" style={{ userSelect: "none", fontSize: "5vh" }}>
                        {props.label}
                    </div>
                </div>
            </label>
        </div>
    )
}