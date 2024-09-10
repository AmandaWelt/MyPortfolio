import React from 'react';
import { Link } from 'react-router-dom';


const VideoBackground = () => {
    return (
            <Link to="/aboutme"> {/* Navigation to /projects */}
            <video autoPlay muted loop id="video-background">
                <source src="/amandaweltvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Link>
    );
};

export default VideoBackground;