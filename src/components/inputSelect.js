import React, { useState } from "react";
import '../App.css';

export default function InputSelect(props) {

    return (
        <div className="centered-flex-container even-container-margin" >
            <select defaultValue={props.defaultValue} className="rect-input">
                {props.ListOfOptionNames.map(optionName => <option value={optionName}>{optionName}</option>)}
            </select>
            {/* <Select options={courseOptions} styles={{ container: (provided) => ({ ...provided, width: "80%" }), control: (provided) => ({ ...provided, height: "9vh", borderRadius: "2vh" }) }} /> */}
        </div>
    )
}