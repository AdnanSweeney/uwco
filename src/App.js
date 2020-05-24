import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import {courseList} from 'assets/courseCodes.js'

function App() {


                                    
  const options = []

  courseList.array.forEach(courseCode => {

    options.push( {value: courseCode, label: courseCode} )
    
  });

  return (

    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p> Schedule Explorer </p>

      </header>

      <div className="body">

        <div className="selector-container">

        <Select options={options} />
        <input type="text" />
        <Select options={options} />
          
        </div>


      </div>
    </div>
  );
}

export default App;
