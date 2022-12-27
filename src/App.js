import React from 'react';
import * as msTeams from '@microsoft/teams-js';



function App() {
  msTeams.initialize();
  const value = 'iSpacian';
  const date = '28DEC22'
  return <><div>Welcome {value}</div><h1>Today is {date}</h1>
  <button onClick={alert("Hello")}>HACKATHON IN TEAMS</button></>
}

export default App;
