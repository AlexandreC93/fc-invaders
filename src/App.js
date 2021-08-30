import React from 'react'
import "./App.css"
import Windows from './components/Windows'
import Start from './components/Start'


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