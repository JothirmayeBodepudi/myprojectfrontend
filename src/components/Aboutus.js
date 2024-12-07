import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import './AboutUs.css'; // Import CSS for styling


const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <Sidebar />
      <div className="main-content">
        <h1>About Us</h1>
        <p>
          Welcome to our company! We are committed to adding value to middle-class residential properties by introducing
          modern amenities and high-quality upgrades that enhance the living experience without breaking the bank. Our
          mission is to bridge the gap between affordability and luxury, ensuring that everyone has access to comfortable and
          aesthetically pleasing homes.
        </p>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower homeowners by providing affordable, high-quality home improvements that increase
            property value. We believe that by making smart upgrades and integrating sustainable solutions, we can create
            homes that are both functional and beautiful, catering to the needs of modern families.
          </p>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where every homeowner can experience the luxury of a modern home, regardless of their
            budget. We strive to redefine middle-class housing, making comfort, style, and sustainability accessible to
            everyone.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/images/WhatsApp Image 2024-10-02 at 19.14.16_3ab9b389.jpg" alt="Team Member 1" />
              <p>Jothirmaye Bodepudi</p>
              <p1>Email:2200032386@kluniversity.in</p1>
            </div>
            <div className="team-card">
              <img src="/images/WhatsApp Image 2024-10-02 at 19.13.52_4389e860.jpg" alt="Team Member 2" />
              <p>Pujitha Chennamsetti</p>
              <p1>Email:2200030466@kluniversity.in</p1>
             
            </div>
            <div className="team-card">
              <img src="/images/WhatsApp Image 2024-10-02 at 19.28.58_b69c5b29.jpg" alt="Team Member 3" />
              <p>Lalitha Mounya Perla</p>
              <p1>Email:2200030793@kluniversity.in</p1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
