import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import ProfileCardTemplate from './profile-card-template.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="responsive-container">
        <div className='main'>
          <Navbar />
          <div className="body">
            <div className="section-1">
              <div className="container">
                <h1>National <b>Directory</b></h1>
                <p>of Soil Science Professionals</p>
                <div className="actions">
                  <button className='primary'>Explore Directory</button>
                  <button className='secondary'>Get Listed</button>
                </div>
                
              </div>
            </div>
            <div className="section-2">
              <div className="section-header">
                <div className="section-title">
                  <h3>Listed Professionals</h3>
                  <h4 id='no-of-professionals'>49 Professionals Found</h4>
                </div>
                <div className="filters">
                </div>
              </div>
              <div className="listing">
                <ProfileCardTemplate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
