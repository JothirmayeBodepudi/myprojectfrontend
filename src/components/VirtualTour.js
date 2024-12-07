import React from 'react';
import './VirtualTour.css'; // Import CSS for styling

const VirtualTour = () => {
    // Array of video data
    const videos = [
        {
            src: '/videos/video1.mp4',
            description: 'Explore the main lobby and reception area.',
        },
        {
            src: '/videos/video2.mp4',
            description: 'Take a look at our luxurious guest rooms.',
        },
        {
            src: '/videos/video3.mp4',
            description: 'Discover our dining options and restaurant ambiance.',
        },
        {
            src: '/videos/video4.mp4',
            description: 'Experience our beautiful outdoor spaces.',
        },
        {
            src: '/videos/video5.mp4',
            description: 'Enjoy a glimpse of our interior.',
        },
        {
            src: '/videos/video6.mp4',
            description: 'Check out our vibrant event spaces outdoor.',
        },
    ];

    return (
        <div className="virtual-tour-container">
            <h1 className="tour-heading">Explore Our Virtual Tour</h1>
            <div className="tour-videos">
                {videos.map((video, index) => (
                    <div className="tour-frame-container" key={index}>
                        <video className="tour-frame" controls>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="tour-description">{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VirtualTour;
