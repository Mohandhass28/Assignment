import React from 'react'
import './Dropbox.css'
import { NavLink,Link } from 'react-router-dom'

const Dropbox = ({ array, value }) => {
    return (
        <div className="dropdown">
            <a className="dropbtn" href='#'>{value}</a>
            <div className="dropdown-content">
                {array.map((data, i) => (
                    <a href={data.link} key={i+1}>
                        {data.name}
                    </a>))}
            </div>
        </div>

    )
}

export default Dropbox