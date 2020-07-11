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

export default function FormComponent(props) {

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

    // States for selected form input values
    const [selectedSubject, setSelectedSubject] = useState("CS")
    const [selectedCode, setSelectedCode] = useState("")
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const [selectedTerm, setSelectedTerm] = useState("F")

    function createApiRequest(subject, courseCode, year, term) {

        const apiKey = "7a59e500684580cef438e8d6a4892100"
        const termMap = {
            "F": 9,
            "W": 1,
            "S": 5,
        }

        let termCode = "1" + year.toString().slice(-2) + termMap[term]

        return ( "https://api.uwaterloo.ca/v2/terms/" + termCode + "/" + subject + (courseCode ? "/" + courseCode : courseCode) + "/schedule.json?key=" + apiKey)
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
                    <form onSubmit={(e) => { toggleStatus(status); props.searchSchedules(createApiRequest(selectedSubject, selectedCode, selectedYear, selectedTerm), e)}}>
                        <div className="centered-flex-container" >
                            <InputLabel label="Subject" />
                            <InputLabel label="Course Code" />
                            <InputLabel label="Year" />
                        </div>

                        <div className="centered-flex-container">
                            <InputSelect defaultValue={selectedSubject} ListOfOptionNames={courseList} onChange={setSelectedSubject} />
                            <div className="centered-flex-container even-container-margin" >
                                <input pattern="[0-9]*" inputmode="numeric" placeholder="135" className="rect-input" onChange={(e) => { setSelectedCode(e.target.value) }} ></input>
                            </div>
                            <InputSelect defaultValue={currentYear} ListOfOptionNames={yearList} onChange={setSelectedYear} />

                        </div>

                        <div className="centered-flex-container">
                            <InputRadio label="F" setSelectedTerm={setSelectedTerm} defaultChecked="true" />
                            <InputRadio label="W" setSelectedTerm={setSelectedTerm} />
                            <InputRadio label="S" setSelectedTerm={setSelectedTerm} />
                        </div>
                        <div className="centered-flex-container">
                            <button type="submit" className="centered-flex-container even-container-margin white-text input-label secondary-border" style={{ outline: "none", outlineColor: "transparent", width: "90vw", height: "9vh", borderRadius: "5vh/50%" }} > Submit </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <BlurFilter /> */}

        </div >
    )
}