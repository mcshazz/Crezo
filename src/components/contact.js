import React, { Component } from "react";
import Mymap from './map.js'
import Img from "gatsby-image";

export default class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact Us</h2>
             
          </div>

  <ul className="details">
              <li>
                <strong>Phone</strong>
                <p>{data.phone}</p>
              </li>
              <li>
                <strong>Fax</strong>
                <p>{data.fax}</p>
              </li>
              <li>
                <strong>Address</strong>
                <p className="onmob">{data.address}</p>
              </li>
              <li>
                <strong>Email</strong>
                
                  <p>{data.email}</p>
                
              </li>
            </ul>

          
            <form method="post" name="contactform" action={`https://formspree.io/f/xleowbpw`}>
             
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>


          





          <Mymap />

        </div>
      </div>
      
      
      </React.Fragment>
    );
  }
}
