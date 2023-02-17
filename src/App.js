import './App.css';
import {useState, createContext} from 'react';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

export const Context = createContext(); 

function App() {
  const [username, setUsername] = useState("Abdelkarim")
  return (
    <div className="App">
        <Context.Provider value= {{username, setUsername}}>
        <Router>
        <Navbar />
              <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/profile" element={<Profile />}/>
               <Route path="/contact" element={<Contact />}/>
               <Route path="*" element={<h1>page not found</h1>}/>
              </Routes>
        </Router>
        </Context.Provider>
    </div>
  );
}

export default App;