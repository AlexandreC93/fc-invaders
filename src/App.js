import React from 'react'
import "./App.css"
import Windows from './components/Windows'
import Start from './components/Start'
import Bullet from './components/Bullet'
import Monster from './components/Monster.jsx'
import Score from './components/Score'
import Ship from './components/Ship'
import Over from './components/over'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <>

        <Start />
        <br></br><br></br><br></br><br></br>

        <Windows>
          <h1>Coucou</h1>
        </Windows>
        <br></br><br></br><br></br><br></br>

          <Over/>
      </>

    );
  }
}

export default App;