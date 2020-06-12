import React, { useState } from "react";
import { ReactComponent as BlurFilter } from "../assets/blurFilter.svg"
import { ReactComponent as CloseIcon } from "../assets/close.svg"
import { ReactComponent as SearchIcon } from "../assets/search.svg"
import Select from 'react-select'
import '../App.css';
import { courseList, courseOptions } from '../assets/courseCodes.js'
import InputLabel from './inputLabel'

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

    let dateOptions = []
    let dates = []

    for (let i = currentYear; i > currentYear - 5; i--) {

        dateOptions.unshift({ value: i, label: i })
        dates.unshift(i)

    }

    return (

        <div className="bigblob">
            <div className={"blob " + status} onClick={() => toggleStatus(status)}>
                <div className={status + "-icon-margin centered-flex-container"} >
                    {status === "form-open" ? <CloseIcon /> : <SearchIcon />}
                </div>
            </div>
            <div className={"glob " + status} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                {/* <div className={(status === "form-closed" ? "hidden-class" : "") + " centered-flex-container"} style={{ flexDirection: "column", marginTop: "5vh" }}> */}
                <div className={"centered-flex-container"} style={{ flexDirection: "column", marginTop: "5vh" }}>
                    <div className="centered-flex-container" >
                        <InputLabel label="Subject" />
                        <InputLabel label="Course Code" />
                        <InputLabel label="Year" />
                    </div>

                    <div className="centered-flex-container">
                        <div className="centered-flex-container even-container-margin" >
                            <select defaultValue="CS" className="rect-input">
                                {courseList.map(course => <option value={course}>{course}</option>)}
                            </select>
                            {/* <Select options={courseOptions} styles={{ container: (provided) => ({ ...provided, width: "80%" }), control: (provided) => ({ ...provided, height: "9vh", borderRadius: "2vh" }) }} /> */}
                        </div>
                        <div className="centered-flex-container even-container-margin" >
                            {/* <div style={{ borderRadius: "2vh", width: "80%", height: "9vh", border: "none", backgroundColor: "white" }}></div> */}
                            <input pattern="[0-9]*" inputmode="numeric" placeholder="135" className="rect-input" ></input>
                        </div>
                        <div className="centered-flex-container even-container-margin" >
                            {/* <Select options={dateOptions} styles={{ container: (provided) => ({ ...provided, width: "80%" }), control: (provided) => ({ ...provided, height: "9vh", borderRadius: "2vh" }) }} /> */}
                            <select defaultValue={currentYear} className="rect-input">
                                {dates.map(date => <option value={date}>{date}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="centered-flex-container">
                        <div className="centered-flex-container even-container-margin" >
                            <div className="centered-flex-container" style={{ borderRadius: "5.5vh/50%", width: "11vh", height: "11vh", backgroundColor: "white" }}>
                                <div style={{ color: "#FF4E8D", fontSize: "5vh" }}>F</div>
                            </div>
                        </div>
                        <div className="centered-flex-container even-container-margin" >
                            <div className="centered-flex-container" style={{ borderRadius: "5.5vh/50%", width: "11vh", height: "11vh", backgroundColor: "white" }}>
                                <div style={{ color: "#FF4E8D", fontSize: "5vh" }}>W</div>
                            </div>
                        </div>
                        <div className="centered-flex-container even-container-margin" >
                            <div className="centered-flex-container" style={{ borderRadius: "5.5vh/50%", width: "11vh", height: "11vh", backgroundColor: "white" }}>
                                <div style={{ color: "#FF4E8D", fontSize: "5vh" }}>S</div>
                            </div>
                        </div>
                    </div>
                    <div className="centered-flex-container">
                        <div className="centered-flex-container" style={{ marginTop: "2vh", width: "90vw", height: "9vh", backgroundColor: "white", borderRadius: "5vh/50%" }}>
                            <p className="input-label pink-text"> Submit </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <BlurFilter /> */}

        </div >
    )
}