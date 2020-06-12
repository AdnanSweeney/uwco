import React, { useState } from "react";
import { ReactComponent as BlurFilter } from "../assets/blurFilter.svg"
import { ReactComponent as CloseIcon } from "../assets/close.svg"
import { ReactComponent as SearchIcon } from "../assets/search.svg"
import Select from 'react-select'
import '../App.css';
import { courseList, courseOptions } from '../assets/courseCodes.js'
import InputLabel from './inputLabel'
import InputSelect from './inputSelect'
import InputRadiofrom from './inputRadio'
import InputRadio from "./inputRadio";

export default function FormComponent() {

    // Change element class name when form elements are toggled
    const [status, setStatus] = useState("form-open");

    function toggleStatus(status) {

        if (status === "form-open") {

            setStatus("form-closed")

        } else {

            setStatus("form-open")
        }
    }

    // Calculate current year and create list of years for form input
    let currentYear = new Date().getFullYear();

    let yearOptions = []
    let yearList = []

    for (let i = currentYear; i > currentYear - 5; i--) {

        yearOptions.unshift({ value: i, label: i })
        yearList.unshift(i)

    }

    return (

        <div className="bigblob">
            <div className={"blob " + status} onClick={() => toggleStatus(status)}>
                <div className={status + "-icon-margin centered-flex-container"} >
                    {status === "form-open" ? <CloseIcon /> : <SearchIcon />}
                </div>
            </div>
            <div className={"glob " + status} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div className={"centered-flex-container"} style={{ flexDirection: "column", marginTop: "5vh" }}>

                    <div className="centered-flex-container" >
                        <InputLabel label="Subject" />
                        <InputLabel label="Course Code" />
                        <InputLabel label="Year" />
                    </div>

                    <div className="centered-flex-container">
                        <InputSelect defaultValue="CS" ListOfOptionNames={courseList} />
                        <div className="centered-flex-container even-container-margin" >
                            <input pattern="[0-9]*" inputmode="numeric" placeholder="135" className="rect-input" ></input>
                        </div>
                        <InputSelect defaultValue={currentYear} ListOfOptionNames={yearList} />

                    </div>

                    <div className="centered-flex-container">
                        <InputRadio label="F" />
                        <InputRadio label="W" />
                        <InputRadio label="S" />
                    </div>
                    <div className="centered-flex-container">
                        <div className="centered-flex-container even-container-margin" style={{ width: "90vw", height: "9vh", backgroundColor: "white", borderRadius: "5vh/50%" }}>
                            <p className="input-label pink-text"> Submit </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <BlurFilter /> */}

        </div >
    )
}