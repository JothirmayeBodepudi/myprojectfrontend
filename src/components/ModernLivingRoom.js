// ModernLivingRoom.js
import React from 'react';
import './ModernLivingRoom.css'; // Import CSS file for styling

const ModernLivingRoom = () => {
    return (
        <div className="modern-living-room-container"> {/* Main container */}
            <header className="modern-living-room-header">
                <h1 className="main-heading">Modern Living Room with Elegant Design</h1> {/* Heading at the top */}
            </header>

            <div className="modern-living-room-content">
                <div className="content">
                    <p>
                        Transform your living space with our modern living room design. 
                        Combining elegance with comfort, this space is crafted to suit your lifestyle.
                    </p>
                    <h3>Company: XYZ Interiors</h3>
                    <h4>Designer: Jane Doe</h4>
                    <p>Email: <a href="mailto:jane.doe@example.com">jane.doe@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container"> {/* Box container for image and related text */}
                    <div className="image-container">
                        <img 
                            src="https://www.oppeinhome.com/upload/images/ueditor/20230710/10-modern-living-room-ideas-3.webp" 
                            alt="Modern Living Room" 
                            className="living-room-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A modern living room with sleek furniture and ample natural light for a cozy ambiance.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSF0dFfuZGmgQDZVm75P-e6kGOZIlK9hLr2qtk3jLZXX4G00FiWfKnhXvIN82r6sBMXa-fv38iss4WM_h8ct6aosEIQMKIAzI4w9SnJhJ0" 
                            alt="Elegant Sofa" 
                            className="living-room-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Our elegant sofa combines comfort and modern aesthetics, perfect for your living space.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GYNis8S0EToqSt1Yn7phNIf36IqFNo9Vhw&s" 
                            alt="Smart Entertainment System" 
                            className="living-room-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Enjoy immersive entertainment with a smart system integrated seamlessly into the room design.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZbqciSW9HzNoDmq3ZKntumobO830DEdR6A&s" 
                            alt="Modern Coffee Table" 
                            className="living-room-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>The centerpiece of the living room, a modern coffee table complements the overall decor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernLivingRoom;
