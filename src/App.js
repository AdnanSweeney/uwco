import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Select from 'react-select'
import { courseOptions } from './assets/courseCodes.js'
import fallIcon from './assets/fall.svg'
import winterIcon from './assets/winter.svg'
import springIcon from './assets/spring.svg'
import FormComponent from './components/formComponent'

class App extends Component {

  render() {

    // Calculate Current year
    let currentYear = new Date().getFullYear();

    let dateOptions = []

    for (let i = currentYear; i > currentYear - 5; i--) {

      dateOptions.unshift({ value: i, label: i })
    }

    return (

      <div className="App">

        <header className="App-header"> Schedule Explorer </header>

        <FormComponent />

        <div className="slide-container" id="slide-container">
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
                defaultValue={dateOptions[4]}
              />

            </div>
          </div>

          <div className="selector-row">

            {/* I need to make a component out of this and recurse*/}

            <div className="flex-selector">
              <label>
                <input type="radio" name="Season" value="fall" />
                <img src={fallIcon} width="75px" height="75px" />
              </label>
            </div>
            <div className="flex-selector">
              <label>
                <input type="radio" name="Season" value="fall" />
                <img src={winterIcon} width="75px" height="75px" />
              </label>
            </div>
            <div className="flex-selector">
              <label>
                <input type="radio" name="Season" value="fall" />
                <img src={springIcon} width="75px" height="75px" />
              </label>
            </div>







          </div>

          <div className="selector-row">
            <input type="button" value="Submit" className="submit-button"
              onClick={() => { alert("whatup") }}
            // disabled={this.props.calculateDisabled} 
            />
          </div>


        </div>
      </div>
    );

  }

}

export default App;
