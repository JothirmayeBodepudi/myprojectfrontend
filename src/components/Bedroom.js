import React from 'react';
import './Bedroom.css'; // Import CSS file for styling

const Bedroom = () => {
    return (
        <div className="bedroom-container"> {/* Main container */}
            <header className="bedroom-header">
                <h1 className="main-heading">Modern Bedroom with Cozy Ambiance</h1> {/* Heading at the top */}
            </header>

            <div className="bedroom-content">
                <div className="content">
                    <p>
                        Redefine comfort with our modern bedroom designs. 
                        A perfect blend of luxury and relaxation to create your personal retreat.
                    </p>
                    <h3>Company: DreamSpace Interiors</h3>
                    <h4>Designer: Emily Clark</h4>
                    <p>Email: <a href="mailto:emily.clark@example.com">emily.clark@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?s=612x612&w=0&k=20&c=yxOoaz2IAd9zvtlXeS-Th-AiXhaCtMIxOONfGbtGeG8=" 
                            alt="Modern Bedroom" 
                            className="bedroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A serene bedroom with minimalist furniture and warm lighting for a cozy vibe.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://hips.hearstapps.com/hmg-prod/images/ceara-donnelley-charleston-house-tour-bedroom-jpg-1618427139.jpg?crop=0.8781275221953189xw:1xh;center,top&resize=1200:*" 
                            alt="Luxury Bed" 
                            className="bedroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Elegant bedding and stylish furniture for an inviting and luxurious space.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://media.architecturaldigest.com/photos/633f30fc2b9fc0b5557ab24d/16:9/w_2560%2Cc_limit/CH_ASH_Staging_West%2520Village%2520Townhouse_NYC2.jpg'f" 
                            alt="Bedroom Decor" 
                            className="bedroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Modern decor elements add charm and character to the bedroom.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://media.designcafe.com/wp-content/uploads/2024/06/29170109/contemporary-modern-master-bedroom-ideas.jpg" 
                            alt="Spacious Bedroom" 
                            className="bedroom-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A spacious bedroom with large windows allowing natural light to enhance the ambiance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bedroom;
