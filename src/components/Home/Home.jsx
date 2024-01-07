import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="main-section">
      <div className="head-div">
        <div className="contant-section">
          <div className="head">
            <p className='underline'>Real Estate Agency</p>
          </div>
          <div className="middle-head">
            <h1><strong>The Best Way To Find Your Home</strong></h1>
          </div>
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet, in the consectetur elit, sed do eiusmod
              tempor adipisicing incididunt ut labore.
            </p>
          </div>
          <div className="btn">Make An Enquiry</div>
        </div>
        <div className="img-div">
          <div className="imges-div">
            <img
              src="https://solverwp.com/demo/html/mingrand/assets/img/banner/4.png"
              alt="house"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home