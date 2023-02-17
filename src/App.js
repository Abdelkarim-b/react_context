import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

function App() {
  const [username, setUsername] = useState("Abdelkarim")
  return (
    <div className="App">
        
        <Router>
        <Navbar />
              <Routes>
               <Route path="/" element={<Home username={username} />}/>
               <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>}/>
               <Route path="/contact" element={<Contact />}/>
               <Route path="*" element={<h1>page not found</h1>}/>
              </Routes>
        </Router>
    </div>
  );
}

export default App;