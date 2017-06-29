import React, {Component} from 'react'
import logo from './logo.svg'
import schedule from './data/schedule.json'
import teams from './data/teams.json'
import byes from './data/byes.json'
import Standings from './components/standings.js'
import './App.css'

class App extends Component {
  state = {
    predictions: {},
    currentWeek: 1,
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Standings teams={teams.NFLTeams} predictions={this.state.predictions} />
        </div>
      </div>
    );
  }
}

export default App
