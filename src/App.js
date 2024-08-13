import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/aboutme';
import Project from './components/projects/projects';
import Sidebar from './components/sidebar/Sidebar';
import { SidebarProvider } from './context/SidebarContext';


function App() {
  return (
    <SidebarProvider>
      <Router>
          <div className="App">
              <Sidebar />
              <div className="main-content">
                  <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/aboutme" element={<About />} />
                      <Route path="/projects" element={<Project />} />
                  </Routes>
              </div>
          </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;