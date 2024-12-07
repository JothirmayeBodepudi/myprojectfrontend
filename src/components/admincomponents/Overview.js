import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import './Overview.css';

const Overview = () => {
  const { submissions } = useContext(DataContext);

  const openReplyWindow = (submission) => {
    const popup = window.open(
      '',
      'ReplyWindow',
      'width=500,height=600,resizable=yes,scrollbars=yes'
    );

    popup.document.write(`
      <html>
      <head>
        <title>Admin Reply</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #f4f4f4;
          }
          h2 {
            text-align: center;
          }
          input, textarea {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          button {
            background-color: #007bff;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: block;
            width: 100%;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <h2>Reply to ${submission.name}</h2>
        
        <!-- Input for the recipient email -->
        <label for="recipientEmail">To (Recipient Email):</label>
        <input type="email" id="recipientEmail" value="${submission.email}" required />
        
        <label for="replyText">Reply Message:</label>
        <textarea id="replyText" placeholder="Type your reply here..."></textarea>
        
        <button onclick="sendReply()">Send Reply</button>
        
        <script>
          function sendReply() {
            const recipientEmail = document.getElementById('recipientEmail').value;
            const replyText = document.getElementById('replyText').value;

            if (!recipientEmail) {
              alert('Please enter a valid recipient email.');
              return;
            }

            if (replyText.trim() === '') {
              alert('Please enter a valid reply text.');
              return;
            }

            window.opener.postMessage(
              { email: recipientEmail, reply: replyText },
              '*'
            );
            alert('Reply sent successfully to: ' + recipientEmail);
          }
        </script>
      </body>
      </html>
    `);
  };

  const downloadImage = (imageFile, name) => {
    const url = URL.createObjectURL(imageFile);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}-image.jpg`; // Set the default download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overview-container">
      <h1>Admin Overview</h1>
      <h3>All Submissions</h3>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="submissions-list">
          {submissions.map((submission, index) => (
            <div className="submission-card" key={index}>
              <div className="submission-header">
                <h4>{submission.name}</h4>
              </div>
              <div className="submission-details">
                <p><strong>Phone:</strong> {submission.phonenumber}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Message:</strong> {submission.message}</p>
                <p>
                  <strong>Dimensions:</strong> Length: {submission.dimensions.length}m, Width: {submission.dimensions.width}m, Height: {submission.dimensions.height}m
                </p>
              </div>
              {submission.images?.length > 0 && (
                <div className="image-container">
                  <img
                    src={URL.createObjectURL(submission.images[0])}
                    alt={`Uploaded by ${submission.name}`}
                    className="submission-image"
                  />
                  <button
                    className="btn-download"
                    onClick={() => downloadImage(submission.images[0], submission.name)}
                  >
                    Download Image
                  </button>
                </div>
              )}
              <div className="reply-container">
                <button
                  className="btn-reply"
                  onClick={() => openReplyWindow(submission)}
                >
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Overview;
