import React from 'react';
import './Balcony.css'; // Import CSS file for styling

const Balcony = () => {
    return (
        <div className="balcony-container"> {/* Main container */}
            <header className="balcony-header">
                <h1 className="main-heading">Modern Balcony with Scenic Views</h1> {/* Heading at the top */}
            </header>

            <div className="balcony-content">
                <div className="content">
                    <p>
                        Experience the beauty of outdoor living with our modern balcony designs. 
                        Perfectly blending aesthetics with functionality, these spaces are ideal for relaxation and social gatherings.
                    </p>
                    <h3>Company: Elegant Spaces</h3>
                    <h4>Designer: Sarah Smith</h4>
                    <p>Email: <a href="mailto:sarah.smith@example.com">sarah.smith@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container"> 
                    <div className="image-container">
                        <img 
                            src="https://interiosplash.com/in/wp-content/uploads/2024/09/29-optimized_11zon.webp" 
                            alt="Modern Balcony Seating" 
                            className="balcony-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Cozy seating arrangements perfect for enjoying morning coffee with a view.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://media.designcafe.com/wp-content/uploads/2020/08/29114113/balcony-interior-design-guide-before-furniture.jpg" 
                            alt="Greenery on Balcony" 
                            className="balcony-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Incorporate natural greenery to create a serene oasis on your balcony.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://img.staticmb.com/mbcontent//images/uploads/2022/11/Balcony-decor-ideas.jpg" 
                            alt="Modern Glass Railings" 
                            className="balcony-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Glass railings add elegance while ensuring safety and unobstructed views.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://i.pinimg.com/originals/02/c5/cf/02c5cfa48645c8cacaf843aca59b4af3.png" 
                            alt="Elegant Balcony Dining" 
                            className="balcony-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Enjoy a fine dining experience under the open sky with a beautifully designed balcony setup.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balcony;
