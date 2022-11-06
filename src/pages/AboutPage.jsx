import React from 'react'
import Card from 'react-bootstrap/Card';

const calendar= require('../components/shared/calendar1.png');
const mp= require('../components/shared/megaphone.png');
const connect= require('../components/shared/connect.png');



function AboutPage() {
  return (
    <>
    <div className='cont'>
         <div className='abt' >
            <h1>Ab<span style = {{color:'#FB2576'}}>o</span>ut Us...</h1>   
            <p>Imagine having a single platform to connect all the schools and colleges in the campus area. A platform that brings together like-minded individuals under a community,  
    With Zone, we could bring all of them under a single roof, keep them updated on all the events that they might be interested in.</p>         

        

         </div>
         <h2 style={{padding:'0 1em'}}>Key Features</h2>
           <hr style={{left:'1em',color:'#FB2576',width:'20vw',height:'10px'}}/>
         <div className='features'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mp} />
                        <Card.Body>
                                <Card.Title>Announcements</Card.Title>
                                <Card.Text>
                                A Feed which keeps the user updated with activities of his/her interest.
                                </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={calendar} />
                        <Card.Body>
                                <Card.Title>Event calendar</Card.Title>
                                <Card.Text>
                                Event calendar that lets us track all upcoming events so that we wont miss out on one.
                                </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={connect} style={{}}/>
                        <Card.Body>
                                <Card.Title>Connects students</Card.Title>
                                <Card.Text>
                                Zone brings togeather students of all 5 colleges and 3 schools in the campus perimeter.
                                </Card.Text>
                         </Card.Body>
                    </Card>
        </div>
         </div>
    </>
    
  )
}

export default AboutPage