import React from 'react'
import './Headimage.css'
import backgroundimg from '../../assets/6.png'

const Headimage = ({dynamicClass,name}) => {
  return (
    <div className={dynamicClass}>
      <div className="image-outdiv">
        <div className="image-innerdiv">
          <h2 className='title'>Left Sidebar</h2>
          <p className='home'>Home><span>{name}</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Headimage