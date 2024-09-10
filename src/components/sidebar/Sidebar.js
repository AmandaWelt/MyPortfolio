import React from 'react';
import { useSidebar } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useSidebar(); //uses the hook to access values

    return (
        <>
            <button onClick={toggleSidebar} className="toggle-button">
                {isSidebarOpen ? <FaTimes /> : <FaBars />} 
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-content">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;