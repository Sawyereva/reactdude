import React from 'react';
import './App.css';
import mydata from './CollegeBasketballTeams.json';

const Teaminfo = mydata.teams;

interface TeamFormat {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<TeamFormat> {
  render() {
    const thisTeam = this.props;

    return (
      <div className="card">
        <div className="container">
          <h3>{thisTeam.abbrev}</h3>
          <h4>{thisTeam.school}</h4>
          <p>Mascot: {thisTeam.name}</p>
          <p>
            Location: {thisTeam.city}, {thisTeam.state}
          </p>
        </div>
      </div>
    );
  }
}

function TeamCard() {
  return (
    <div>
      {Teaminfo.map((teamCounter) => (
        <Team {...teamCounter} />
      ))}
    </div>
  );
}

function Heading() {
  return (
    <header>
      <h1 text-align="center">Welcome to the site!!!</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamCard />
    </div>
  );
}

export default App;
