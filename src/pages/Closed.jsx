import React from 'react'
import './Closed.css'

const Closed = () => {
  return (
    <div className="closed-container">
      <div className="closed-content">
        <h1 className="title">Commit 2.0</h1>
        <h2 className="subtitle">Team OSS</h2>
        
        <div className="project-info">
          <p>Registration for Commit 2.0 is now closed.</p>
          <p>Thank you for your interest!</p>
          <p>For onspot registration, contact us at:</p>
          <p className='text-[#60efff]'><a target='blank' href="https://www.instagram.com/team__oss/?hl=en">@team__oss</a></p>
          <p className='text-[#60efff]'> <a href="tel:+918840267636">+91-8840267636</a>  </p>
        </div>
      </div>
    </div>
  )
}

export default Closed
