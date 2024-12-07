// ModernBathroom.js
import React from 'react';
import './ModernBathroom.css'; // Import CSS file for styling


const ModernBathroom = () => {
    return (
        <div className="modern-bathroom-container"> {/* Main container */}
            <header className="modern-bathroom-header">
                <h1 className="main-heading">Modern Bathroom with Smart Amenities</h1> {/* Heading at the top */}
            </header>
            
            <div className="modern-bathroom-content">
                <div className="content">
                    <p>
                        Enhance your daily routine with our modern bathroom featuring smart amenities. 
                        Designed for comfort and functionality, this space is ideal for the contemporary homeowner.
                    </p>
                    <h3>Company: XYZ Constructions</h3>
                    <h4>Designer: John Smith</h4>
                    <p>Email: <a href="mailto:john.smith@example.com">john.smith@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container"> {/* Box container for image and related text */}
                    <div className="image-container">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D" 
                            alt="Modern Bathroom" 
                            className="bathroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>This modern bathroom is equipped with high-tech amenities that provide both luxury and convenience.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3" 
                            alt="Luxurious Bathtub" 
                            className="bathroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Experience ultimate relaxation with our freestanding bathtub, designed for both comfort and style.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3" 
                            alt="Smart Bathroom Mirror" 
                            className="bathroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A smart mirror with integrated lighting and voice control makes your morning routine easier and more enjoyable.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3" 
                            alt="Modern Shower" 
                            className="bathroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>The spacious walk-in shower features rainfall and handheld options, giving you a luxurious spa-like experience at home.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModernBathroom;
