import React from 'react';
import Sidebar from '../sidebar/Sidebar'; // Adjust the import path if needed
import './AboutMe.css';

function AboutMe() {
    return (
        <div>
            <Sidebar />
            <header>
                <button className="menu-btn">
                    <i className="fas fa-bars"></i>
                </button>
            </header>
            <aside className="sidebar">
                <button className="menu-btn-close">
                    <i className="fas fa-times"></i>
                </button>
                <nav>
                    <a href="/">Main</a>
                    <a href="/projects">Projects</a>
                </nav>
            </aside>
            <section className="about-me">
                <div className="container mx-auto p-5 text-center">
                    <h2>Welcome to My Corner of the Web!</h2>
                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        <img src="mepic.jpg" alt="Amanda Jolyn Welt" className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" />
                        <p>I'm Amanda Welt, a Full Stack Software Engineer with a knack for crafting innovative solutions and bringing ideas to life through code. With a solid foundation in Computer Science and hands-on experience in both front-end and back-end development, I'm dedicated to pushing the boundaries of what's possible in the digital world.</p>
                        <p>My journey in software engineering began at Saint Petersburg College, where I pursued my Associate in Science in Computer Science. With my formal education, internship and experience in the United States Army Intelligence community, I've honed a diverse skill set and a deep understanding of technology's power to drive change.</p>
                        <p>Proficient in JavaScript, Python, HTML and CSS, I thrive in dynamic environments where creativity meets complexity. Whether I'm developing web-based applications using React.js and MongoDB or crafting RESTful APIs with Node.js and Express.js, I'm constantly seeking out new challenges and opportunities to grow.</p>
                        <p>But software engineering isn't just about lines of code and algorithms—it's about making connections and building communities. As someone who grew up with a love for art and creativity, I've always believed in the power of blending different mediums to create something truly unique. I bring a creative insight and passion into every project.</p>
                        <p>As I continue on this journey, my sights are set on creating impactful software solutions that make a difference in people's lives. Whether it's revolutionizing the way we work, connecting communities across the globe, or simply bringing a smile to someone's face, I'm excited to be at the forefront of innovation and change.</p>
                        <p>I'm always on the lookout for new opportunities to collaborate and create. Whether you're a fellow developer, a potential employer, or just someone with a shared passion for technology, I'd love to connect! Feel free to reach out via email at <a href="mailto:amanda.jolyn@gmail.com" className="underline">amanda.jolyn@gmail.com</a></p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Amanda Welt - All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default AboutMe;

