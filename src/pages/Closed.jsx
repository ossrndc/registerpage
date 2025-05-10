import React from 'react'
import './Closed.css'

const Closed = () => {
  return (
    <div className="closed-container">
      <div className="closed-content">
        <h1 className="title">Commit 2.0</h1>
        <h2 className="subtitle">Team OSS</h2>
        
        <div className="project-info">
          <p>Registration for COMMIT 2.0 is now officially closed.</p>
          <p>Thank you for your overwhelming interest and support!</p>
          <p>For updates and future events, stay connected with us:</p>
          <p className='text-[#60efff]'><a target='blank' href="https://www.instagram.com/team__oss/?hl=en">@team__oss</a></p>
        </div>
      </div>
    </div>
  )
}

export default Closed
