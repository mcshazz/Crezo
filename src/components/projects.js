import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="blogs-section section" id="Projects">
        <div className="container">
          <div className="section-head">
            <h2>Projects</h2>
          </div>
          <ul
            className={`blogs-list ${data.edges.length < 5 ? "few-blogs" : ""}`}
          >
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <Link className="link" to= {item.node.slug} />


                    {item.node.featureImage ? (
                      <Img
                        fluid={item.node.featureImage.fluid} /*was fluid*/
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    ) : (
                      <div className="no-image"></div>
                    )}
                    <div className="details">
                      <h3 className="title">{item.node.title}</h3>
                      
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="see-more">
            <Link to="/projects">
              <span>More Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
