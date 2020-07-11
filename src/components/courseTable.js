import React, { useState } from "react";
import '../App.css';

export default function CourseTable(props) {

    // Amalgamate all course info for each course (merge multiple lectures / instructors into one object structure)
    // Iterate through and create list of objects for each course that we can display easier in the table below
    // Figure out a way to expand information so that we can see instructors, campus, other information

    return (
        <div className="centered-flex-container">
            <div style={{ width: "87.5%", minHeight: "60%", marginBottom: "10%" }}>
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Section</th>
                            <th>Time</th>
                            {/* <th>Room</th> */}
                            <th>Capacity</th>
                            <th>Instructor</th>
                        {/* <th>Campus</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(courseInfo => {

                            let courseCode = courseInfo.subject + courseInfo.catalog_number
                            // let campus = courseInfo.campus
                            let online = courseInfo.campus === "ONLN ONLINE"
                            let courseSlot = online ? "ONLINE" : courseInfo.classes[0].date.start_time ? courseInfo.classes[0].date.start_time + " - " + courseInfo.classes[0].date.end_time + " " + courseInfo.classes[0].date.weekdays : "TBD"
                            let courseRoom = online ? "ONLINE" : courseInfo.classes[0].location.building ? courseInfo.classes[0].location.building + courseInfo.classes[0].location.room : "TBD"
                            let courseEnrollment = courseInfo.enrollment_total + "/" + courseInfo.enrollment_capacity
                            let instructorName = courseInfo.classes[0].instructors.length ? courseInfo.classes[0].instructors[0]: "TBD"
                            let instructorSplit = instructorName.split(/([,\s])/)
                            let instructorInitials = instructorSplit[0] !== "TBD" ? instructorSplit[instructorSplit.length - 1][0] + ". " + instructorSplit[0] : "TBD"

                            return (<tr>
                                        {/* <td> {courseInfo.subject + courseInfo.catalog_number + ": " + courseInfo.title}</td> */}
                                        <td> {courseCode}</td>
                                        <td> {courseInfo.section}</td>
                                        <td> {courseSlot}</td>
                                        {/* <td> {courseRoom}</td> */}
                                        <td> {courseEnrollment}</td>
                                        <td> {instructorInitials}</td>
                                        {/* <td> {courseInfo.classes[0].instructors[0]}</td>
                                    <td> {courseInfo.campus}</td> */}
                                    </tr>)
                        }

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}