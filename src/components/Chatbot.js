// Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    // Bot response logic
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  const getBotResponse = (userMessage) => {
    // Check if the message is related to property value improvement
    if (userMessage.toLowerCase().includes('add value') || userMessage.toLowerCase().includes('increase value')) {
      return 'To add value to a middle-class residential property, consider the following tips: \n' +
             '1. Renovate key areas like kitchens and bathrooms.\n' +
             '2. Add curb appeal by improving landscaping and painting the exterior.\n' +
             '3. Ensure the property is energy-efficient with smart devices and insulation.\n' +
             '4. Upgrade flooring and install modern fixtures.\n' +
             '5. Increase storage options like built-in wardrobes or shelving.';
    } else if (userMessage.toLowerCase().includes('what improvements increase property value')) {
      return 'Improvements that can increase property value include:\n' +
             '1. Kitchen remodels (new countertops, updated appliances).\n' +
             '2. Bathroom upgrades (new tiling, modern fixtures).\n' +
             '3. Adding a home office or extra bedroom.\n' +
             '4. Installing energy-efficient features (solar panels, smart thermostats).';
    } else if (userMessage.toLowerCase().includes('property value tips')) {
      return 'Here are some tips to increase the value of your middle-class residential property:\n' +
             '1. Keep your property well-maintained with regular cleaning and repairs.\n' +
             '2. Make sure all systems (HVAC, plumbing, electrical) are in good working order.\n' +
             '3. Create an open-plan layout that appeals to modern buyers.\n' +
             '4. Add extra amenities such as a garden, balcony, or smart home technology.';
    } else if (userMessage.toLowerCase().includes('hours')) {
      return 'Our branches are open from 9 AM to 5 PM, Monday to Saturday.';
    } else if (userMessage.toLowerCase().includes('contact')) {
      return 'You can contact us at +91-1234567890 or email us at support@ourbranch.com.';
    } else {
      return "I'm here to help! Please ask another question or provide more details.";
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
