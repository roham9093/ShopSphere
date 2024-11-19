import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/ErrorPage.css"; // مسیر فایل CSS

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default ErrorPage;
