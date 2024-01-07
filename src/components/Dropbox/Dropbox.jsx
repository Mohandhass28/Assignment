import React from 'react'
import './Dropbox.css'
import { NavLink,Link } from 'react-router-dom'

const Dropbox = ({ array, value }) => {
    return (
        <div className="dropdown">
            <a className="dropbtn" href='#'>{value}</a>
            <div className="dropdown-content">
                {array.map((data, i) => (
                    <NavLink to={data.link} key={i+1}>
                        {data.name}
                    </NavLink>))}
            </div>
        </div>

    )
}

export default Dropbox