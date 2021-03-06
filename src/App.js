import React from 'react'
import "./App.css"
import Windows from './components/Windows'
import Start from './components/Start'
import Bullet from './components/Bullet'
import Monster from './components/Monster.jsx'
import Score from './components/Score'
import Ship from './components/Ship'
import Over from './components/over.jsx'
import Winner from './components/Winner'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "start"
    }
  }

  startClick = () => {
    this.setState({
      stage: "playing"
    })
  }



  render() {
    return (

      <>

        {this.state.stage === "start" &&
          <Start click={this.startClick} />}

        {
          this.state.stage === "playing" &&
          <Windows />
        }



       



      </>

    );
  }
}

export default App;