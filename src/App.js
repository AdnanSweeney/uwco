import React, { Component, useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Select from 'react-select'
import { courseOptions } from './assets/courseCodes.js'
import fallIcon from './assets/fall.svg'
import winterIcon from './assets/winter.svg'
import springIcon from './assets/spring.svg'
import FormComponent from './components/formComponent'
import CourseTable from './components/courseTable'

export default function App() {

  let [schedules, setSchedules] = useState([])

  const searchSchedules = async (query, e) => {
    e.preventDefault();
    
                
    try {

        const res = await fetch(query);
        const data  = await res.json();
        
        console.log(data.data)
        setSchedules(data.data)

    }catch(err){
        console.error(err);
    }
}

  return (

    <div className="App">

      <header className="App-header"> Schedule Explorer </header>
      {/* <div> {String(schedules)} </div> */}
      <FormComponent searchSchedules={searchSchedules}/>
      <CourseTable data={schedules}/>
    </div>
  );



}