import './App.css';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [firstName, setFirstName] = useState('');

  // Get the data from localStorage on start
  useEffect(() => {
    const firstName = JSON.parse(localStorage.getItem('firstName'))
    if (firstName) {
      setFirstName(firstName);
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage firstName={firstName} setFirstName={setFirstName}/>} />
          <Route path='/dashboard' element={<Dashboard firstName={firstName} />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
