import React, { Component } from 'react';
import "./About.css";
/* import pfp from  pathname; */

export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div>
            <div className="split left">
              <div className="centered">
                <img
                  className="profile_image"
                  src={profile_pic}
                  alt="Profile Pic"
                // Image goes here
                ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Marcos Barrera</div>
                <div className="brief_description">
                  // I am a computer science student attending the University of Memphis
                </div>
              </div>
            </div>
          </div>
        </p>
      </div>
    )
  }
}