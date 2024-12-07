import React from 'react';
import './ModernPujaMandiram.css'; // Import CSS file for styling

const ModernPujaMandiram = () => {
    return (
        <div className="modern-puja-mandiram-container"> {/* Main container */}
            <header className="modern-puja-mandiram-header">
                <h1 className="main-heading">Modern Puja Mandiram with Spiritual Serenity</h1> {/* Heading at the top */}
            </header>

            <div className="modern-puja-mandiram-content">
                <div className="content">
                    <p>
                        Experience divine tranquility with our modern Puja Mandiram designs. 
                        Designed with aesthetics and spirituality in mind, it is the perfect sacred space for prayer and meditation.
                    </p>
                    <h3>Company: Divine Spaces</h3>
                    <h4>Designer: Aarti Sharma</h4>
                    <p>Email: <a href="mailto:aarti.sharma@example.com">aarti.sharma@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container"> 
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKT7tJMtoOn84iJhOuZS9z1MwM7_Q7OuUKQ&s" 
                            alt="Modern Puja Mandiram Interior" 
                            className="puja-mandiram-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>An elegantly designed modern Puja Mandiram that blends simplicity and spirituality for a perfect sacred space.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwHo_Knu9hyzxpwy2o-ZG3qCwIwehQ1EedA&s" 
                            alt="Prayer Altar with Ritual Space" 
                            className="puja-mandiram-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Features a dedicated prayer altar space with ample lighting and traditional spiritual design elements.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvPwU5J-1FUvuKbmrRfbRrC1TC8JUD64thA&s" 
                            alt="Serene Meditation Corner" 
                            className="puja-mandiram-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A peaceful meditation corner designed to encourage mindfulness and focused prayers.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://m.media-amazon.com/images/I/81X2ZFrIrBL.jpg" 
                            alt="Traditional Ritual Accents" 
                            className="puja-mandiram-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Modern design with traditional accents, combining both heritage and contemporary spirituality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernPujaMandiram;
