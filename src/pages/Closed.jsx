import React, { useState, useEffect } from 'react';
import './Closed.css';
import LoadingAnimation from './LoadingAnimation';

const Closed = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="closed-container">
      <div className="closed-content">
        <h1 className="title">COMMIT 3.0</h1>
        <h2 className="subtitle">Team OSS</h2>

        <div className="project-info">
          <p>Registration for COMMIT 3.0 is now officially closed.</p>
          <p>Thank you for your overwhelming interest and support!</p>
          <p>For updates and future events, stay connected with us:</p>


          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/team__oss/?hl=en"
              className="neon-link"
            >
              @team__oss
            </a>
          </p>
          <p className="text-red-600">
            <strong>📢Important Update:</strong>
            <br />
            On-spot registrations will be available only for boys and day scholar girls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Closed;