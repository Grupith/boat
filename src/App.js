import './App.css';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import { useState } from 'react';


function App() {

  const [firstName, setFirstName] = useState();

  return (
    <div className="App">
     {/* <LandingPage firstName={firstName} setFirstName={setFirstName} /> */}
     <Dashboard />
    </div>
  );
}

export default App;
