import React from 'react';
import './Lawn.css'; // Import CSS file for styling

const Lawn = () => {
    return (
        <div className="lawn-container"> {/* Main container */}
            <header className="lawn-header">
                <h1 className="main-heading">Modern Lawn with Serene Landscape</h1> {/* Heading at the top */}
            </header>

            <div className="lawn-content">
                <div className="content">
                    <p>
                        Enhance your outdoor space with our modern lawn designs. 
                        Featuring lush greenery and innovative layouts, our lawns bring nature closer to home.
                    </p>
                    <h3>Company: GreenScape Designs</h3>
                    <h4>Designer: John Green</h4>
                    <p>Email: <a href="mailto:john.green@example.com">john.green@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://cdn.shopify.com/s/files/1/2908/9628/files/Garden-planters-600x400_2048x2048.jpg?v=1595529724" 
                            alt="Modern Lawn Landscape" 
                            className="lawn-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A well-maintained modern lawn with vibrant greenery and elegant pathways.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://media.designcafe.com/wp-content/uploads/2020/04/14091037/home-garden-design-perfect-for-a-continental-feast.jpg" 
                            alt="Lawn Seating Area" 
                            className="lawn-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Comfortable seating arrangements surrounded by lush greenery for relaxation.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://wpmedia.roomsketcher.com/content/uploads/2023/04/03133847/backyard-ideas.jpg" 
                            alt="Decorative Lawn Lighting" 
                            className="lawn-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Modern lighting that highlights the lawn's features during the evening.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKprxTYR1PLaeFLd3yGrL1KzMwWaR3aO6qqQ&s" 
                            alt="Outdoor Lawn Design" 
                            className="lawn-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>An open lawn design ideal for gatherings, blending nature with modern aesthetics.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lawn;
