import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import {courseOptions} from './assets/courseCodes.js'
import fallIcon from './assets/fall.svg'
import winterIcon from './assets/winter.svg'
import springIcon from './assets/spring.svg'

function App() {

  let currentYear = new Date().getFullYear();

  let dateOptions = []

  for (let i = currentYear; i > currentYear - 5; i--) {

    dateOptions.unshift( {value: i, label: i})
  }

  return (

    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p> Schedule Explorer </p>

      </header>

      <div className="body">

        <div className="selector-row">

          <p className="flex-selector"> Subject</p>
          <p className="flex-selector"> Course Code</p>
          <p className="flex-selector"> Year</p>

        </div>

        <div className="selector-row">

          <div className="flex-selector">
            <Select options={courseOptions}
                    defaultValue={courseOptions[35]} />
          </div>
          
          <input className="flex-selector" type="text" />

          <div className="flex-selector">

            <Select options={dateOptions}
                    defaultValue={dateOptions[4]} />
          
          </div>
        </div>

        <div className="selector-row">

          <div className="flex-selector"> 
            
            {/* I need to make a component out of this and recurse*/}

            <label>
                <input type="radio" checked="checked" name="Season" value="fall"/>
                <img class="flex-even-spread" src={fallIcon} width="100" height="100" />
            </label>

          </div> 

          <div className="flex-selector"> 
            
            <label>
                <input type="radio" checked="checked" name="Season" value="fall"/>
                <img class="flex-even-spread" src={winterIcon} width="100" height="100" />
            </label>

          </div>

          <div className="flex-selector"> 
            
            <label>
                <input type="radio" checked="checked" name="Season" value="fall"/>
                <img class="flex-even-spread" src={springIcon} width="100" height="100" />
            </label>

          </div>
                
        </div>




      </div>
    </div>
  );
}

export default App;
