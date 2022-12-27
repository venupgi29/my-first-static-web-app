import React from 'react';
import * as msTeams from '@microsoft/teams-js';



function App() {
  const value = 'iSpacian';
  const date = '01DEC22'
  return <><div>Welcome {value}</div><h1>Today is {date}</h1>
  <button onClick={alert("Hello")}>TEST</button></>
}

export default App;
