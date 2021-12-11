import React from 'react';
import './App.css';
import  {UserDetailsView}  from "./components/UserDetailsView";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Julia</h1>
        <h2>Start editing to see some magic happen!</h2>
        <UserDetailsView pageNo={1}/>
      </header>
    </div>
  );
}

export default App;
