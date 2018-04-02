import React, { Component } from 'react';
import Subtitle from './subtitle';
import Title from './title';
import SplashFooter from './splash-footer';

class Splash extends Component {
  render() {
    return (
      <div className="splash-page" id="topPage">
        <div className="splash-page-content">
          <Subtitle />
          <Title />
        </div>
        <SplashFooter />
      </div>
    );
  }
}

export default Splash;


