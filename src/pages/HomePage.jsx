import React from 'react'
import Button from 'react-bootstrap/Button'
const homeImg = require('../components/shared/group.jpg') 
const overlay = require('../components/shared/overlay.png') 

function HomePage() {
  return (
    <>
    <div>
        <div className="landing-bg"  style = {{background: '', height :'100vh',width:'100vw' }} >
           
            <div className='vl'>

            </div>
            <div className='intro'>
                <h1>Welcome to <span style = {{color:'#FB2576'}}>O</span>ur Community</h1>
                <p>ZONE is NOT a social media platform. Its more like a platform which encourages you to take part in activities which is contrary to a typical "social media".</p>
            </div>
            <div className='intro-1'>
                 <Button variant="primary" className="align-middle" size="lg" href="/about">Know More About Us</Button>
            </div>
           
        </div>
    </div>    
    </>
    
  )
}

export default HomePage

