import React from 'react';
import './Kitchen.css'; // Import CSS file for styling

const Kitchen = () => {
    return (
        <div className="kitchen-container"> {/* Main container */}
            <header className="kitchen-header">
                <h1 className="main-heading">Modern Kitchen with Sleek Designs</h1> {/* Heading at the top */}
            </header>

            <div className="kitchen-content">
                <div className="content">
                    <p>
                        Elevate your cooking experience with our modern kitchen designs. 
                        Featuring stylish aesthetics and functional layouts, our kitchens are tailored to your needs.
                    </p>
                    <h3>Company: Gourmet Interiors</h3>
                    <h4>Designer: Emily Davis</h4>
                    <p>Email: <a href="mailto:emily.davis@example.com">emily.davis@example.com</a></p>
                </div>

                {/* First Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://5.imimg.com/data5/SELLER/Default/2022/6/QM/JF/NB/3009658/b29dd3a6748fc994f024a7e0cfaa269e-500x500.jpg" 
                            alt="Modern Kitchen Setup" 
                            className="kitchen-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>A contemporary kitchen setup with sleek countertops and state-of-the-art appliances.</p>
                    </div>
                </div>

                {/* Second Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://interiosplash.com/in/wp-content/uploads/2024/10/modern-kitchen-4.webp" 
                            alt="Minimalist Kitchen Design" 
                            className="kitchen-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Minimalist kitchen design that combines simplicity with modern functionality.</p>
                    </div>
                </div>

                {/* Third Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://5.imimg.com/data5/SELLER/Default/2022/10/EF/BV/KV/149055324/modern-kitchen-design-service-500x500.jpg" 
                            alt="Custom Storage Solutions" 
                            className="kitchen-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>Innovative storage solutions that maximize space and maintain a clutter-free environment.</p>
                    </div>
                </div>

                {/* Fourth Image Box */}
                <div className="box-container">
                    <div className="image-container">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4nd9I-mVoiTmKa5GOybjLyz1e2hO6M5ZHg&s" 
                            alt="Open Kitchen Layout" 
                            className="kitchen-image" 
                        />
                    </div>
                    <div className="image-text">
                        <p>An open kitchen layout perfect for hosting and creating a seamless dining experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kitchen;
