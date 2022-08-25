import './App.css';
import LandingPage from './Components/LandingPage';
import { useState } from 'react';


function App() {

  const [firstName, setFirstName] = useState();

  return (
    <div className="App">
     <LandingPage firstName={firstName} setFirstName={setFirstName} />
    </div>
  );
}

export default App;
