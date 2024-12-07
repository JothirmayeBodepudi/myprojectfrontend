import React from 'react';
import './ModernPlayroom.css'; // Import CSS file for styling

const ModernPlayroom = () => {
    return (
        <div className="modern-playroom-container"> {/* Main container */}
            <header className="modern-playroom-header">
                <h1 className="main-heading">Modern Playroom with Creativity and Fun</h1> {/* Heading at the top */}
            </header>

            <div className="modern-playroom-content">
                <div className="content">
                    <p>
                        Create a fun and imaginative space with our modern playroom designs. 
                        Designed to inspire creativity and play, this space offers comfort and functionality for children of all ages.
                    </p>
                    <h3>Company: Creative Interiors</h3>
                    <h4>Designer: Alex Johnson</h4>
                    <p>Email: <a href="mailto:alex.johnson@example.com">alex.johnson@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container"> 
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fP2j_zt8TNqf76YMZe3fo7gOCVE3G5R2-w&s" 
                            alt="Modern Playroom with Toy Storage" 
                            className="playroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A modern playroom with organized toy storage and a cozy space for creative play.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuWk5H5-3TBr8M98MCrpiwwRw5q_2_lFGxA&s" 
                            alt="Fun Kids Play Area" 
                            className="playroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Features a fun and colorful play area with slides and climbing structures.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiX2-K0B8GHjd9R0i-OzOvJml2y-zilM3OA&s" 
                            alt="Play Mat and Reading Nook" 
                            className="playroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A cozy reading nook with a soft play mat designed for relaxation and learning.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/3d48c6143831351.6282195add1c5.jpg" 
                            alt="Kids Gaming and Creativity Space" 
                            className="playroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A dedicated creative play and gaming space for children to explore their imagination.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernPlayroom;
