import React from 'react';
import { useSidebar } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useSidebar(); //uses the hook to access values

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar} className="toggle-button">
                {isSidebarOpen ? 'Close' : 'Open'} 
            </button>
            <div className="sidebar-content">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;