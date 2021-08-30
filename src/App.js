import React from 'react'
import "./App.css"
import Windows from './components/Windows'
import Start from './components/Start'
import Bullet from './components/Bullet'
import Monster from './components/Monster'

import Score from './components/Score'
import Ship from './components/Ship'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <>
        <Windows>
          <h1>Coucou</h1>
        </Windows>
        <Start/>
      
      </>

    );
  }
}

export default App;