import React, { Component } from 'react';
import "./About.css";
/* import pfp from  pathname; */
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Marcos Barrera</div>
            <div className="brief_description">
              // Details about you goes here
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}