// ModernHomeTheater.js
import React from 'react';
import './ModenHometheater.css'; // Import CSS file for styling

const ModernHomeTheater = () => {
    return (
        <div className="modern-home-theater-container"> {/* Main container */}
            <header className="modern-home-theater-header">
                <h1 className="main-heading">Modern Home Theater with Advanced Features</h1> {/* Heading at the top */}
            </header>

            <div className="modern-home-theater-content">
                <div className="content">
                    <p>
                        Experience the ultimate cinematic experience with our modern home theater designs. 
                        Combining advanced technology with comfort, this space is tailored for movie enthusiasts.
                    </p>
                    <h3>Company: XYZ Home Designs</h3>
                    <h4>Designer: John Carter</h4>
                    <p>Email: <a href="mailto:john.carter@example.com">john.carter@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container"> {/* Box container for image and related text */}
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCYsYk7B15MobU1-y5Fatrt7y54TS-0aS0A&s" 
                            alt="Home Theater Seating" 
                            className="home-theater-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Comfortable seating options with plush recliners, designed for ultimate relaxation during movie nights.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sdiR_6I6GrWF5E5hs_PywZVhkvAryVybPw&s" 
                            alt="Large TV Screen" 
                            className="home-theater-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>State-of-the-art large screens bring your favorite movies and shows to life with stunning clarity.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCFVhI8NKFECp7VZBNJ-7tiSiI8x8yarkCQ&s" 
                            alt="Surround Sound System" 
                            className="home-theater-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Advanced surround sound systems provide an immersive auditory experience to complement your visuals.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkB-rQ-Okl9Mpx5VIbc7xFKMM7PhpINa9Ag&s" 
                            alt="Modern Media Console" 
                            className="home-theater-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>The sleek modern media console keeps all your devices and accessories organized and accessible.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernHomeTheater;
