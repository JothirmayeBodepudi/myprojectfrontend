import React, { useState, useContext } from 'react';
import { DataContext } from './context/DataContext';
import './ContactUs.css';

const ContactUs = () => {
  const { setSubmissions } = useContext(DataContext);

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    message: '',
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    images: [], // For storing uploaded images
    imagePreviews: [], // For showing previews of uploaded images
  });

  // Handle text and dimension changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['length', 'width', 'height'].includes(name)) {
      setFormData({
        ...formData,
        dimensions: {
          ...formData.dimensions,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const imagePreviews = files.map((file) => URL.createObjectURL(file));
      setFormData({
        ...formData,
        images: files,
        imagePreviews,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form Data:', formData);

    // Save submission data to the shared context
    setSubmissions((prev) => [...prev, formData]);

    alert('Thank you for your submission!');

    // Reset the form after submission
    setFormData({
      name: '',
      phonenumber: '',
      email: '',
      message: '',
      dimensions: { length: '', width: '', height: '' },
      images: [],
      imagePreviews: [],
    });
  };

  return (
    <div className="contactus-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>

        {/* Dimensions */}
        <div className="dimensions-container">
          <label>Length:</label>
          <input type="number" name="length" value={formData.dimensions.length} onChange={handleChange} required />
          <label>Width:</label>
          <input type="number" name="width" value={formData.dimensions.width} onChange={handleChange} required />
          <label>Height:</label>
          <input type="number" name="height" value={formData.dimensions.height} onChange={handleChange} required />
        </div>

        {/* Image Upload Section */}
        <div className="image-upload-container">
          <label>Upload Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
          <div className="image-previews">
            {formData.imagePreviews &&
              formData.imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  className="image-preview"
                />
              ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
