import React from 'react'
import './Closed.css'

const Closed = () => {
  return (
    <div className="closed-container">
      <div className="closed-content">
        <h1 className="title">HOUR OF CODE 4.0</h1>
        <h2 className="subtitle">Team OSS</h2>
        
        <div className="project-info">
          <p>Registration for HOUR OF CODE 4.0 is now officially closed.</p>
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
        </div>
      </div>
    </div>
  )
}

export default Closed
