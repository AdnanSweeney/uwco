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

        
      </div>
    );

  }

}

export default App;
