import React from 'react';
import VideoBackground from './homevid';
import '../home/home.css';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <VideoBackground />
            <Sidebar />
            <h1>Home Page</h1>
            <p> component pls render </p>
        </div>
    );
};

export default Home;