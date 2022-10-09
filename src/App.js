import './App.css';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [firstName, setFirstName] = useState('');
  const [totalBills, setTotalBills] = useState([])

  // Get the firstName from localStorage on start
  useEffect(() => {
    const firstName = JSON.parse(localStorage.getItem('firstName'))
    if (firstName) {
      setFirstName(firstName);
    }
  }, [])

  // Get the total bills on start
  useEffect(() => {
    const updatedBills = JSON.parse(localStorage.getItem('totalBills'))
    if (updatedBills) {
      setTotalBills(updatedBills)
    }
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage firstName={firstName} setFirstName={setFirstName}/>} />
          <Route path='/dashboard' element={<Dashboard firstName={firstName} setFirstName={setFirstName} totalBills={totalBills} setTotalBills={setTotalBills}/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
