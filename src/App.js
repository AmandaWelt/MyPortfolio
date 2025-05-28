import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/aboutme';
import Sidebar from './components/sidebar/Sidebar';
import { SidebarProvider } from './context/SidebarContext';
import { NotesProvider } from './context/noteContext';
import './App.css';


function App() {

  return (
    <SidebarProvider>
      <NotesProvider>
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/aboutme" element={<About />} />
                    </Routes>
                </div>
            </div>
        </Router>
      </NotesProvider>
    </SidebarProvider>
  );
};

export default App;