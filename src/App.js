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

    return (

      <div className="App">

        <header className="App-header"> Schedule Explorer </header>

        <FormComponent />

      </div>
    );

  }

}

export default App;
