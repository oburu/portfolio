import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return <div className="contact-section" id="contact">
      <div className="central-panel">
        <h3>say hello</h3>
        <a href="mailto:jaugustost@gmail.com" className="sliding-url">jaugustost@gmail.com</a>
        <div className="social-media" id="socialMedia">
          <ul>
            <li>
              <a href="https://twitter.com/oburusolo" 
                target="_blank" 
                rel="noopener noreferrer">
                <span className="twitter social-icons" />
              </a>
            </li>
            <li>
              <a href="https://github.com/oburu" 
                target="_blank" 
                rel="noopener noreferrer">
                <span className="github social-icons" />
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/oburu" 
                target="_blank" 
                rel="noopener noreferrer">
                <span className="soundcloud social-icons" />
              </a>
            </li>
            <li>
              <a href="augusto-cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer">
                <span className="pdf social-icons"/>
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">&copy; {(new Date()).getFullYear()} Augusto Solorzano.</p>
      </div>
    </div>
  }
}

export default Contact;