import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


export default function BlogNav() {
    return (
        <div>
          <header className="header">
            <div className="header-left">
                <img alt="./download.jpeg" src={logo} className="logo"/>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    {/* <li><Link to ="/">JavaScript</Link></li> */}
                    <li><Link to="/Post1">JavaScript</Link></li>
                    <li><Link to="/Post2">Algorithm</Link></li>
                    <li><Link to="/Post3">Data Structures</Link></li>
                    <li><Link to="/Post4">Computer Networks</Link></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="Search here" className="search-input"/>
                    <button className="search-button">Search</button>
                </div>
            </nav>
        </header>
        </div>
    )
}
