import React, { Component } from 'react';
import reveal from '../../utils/reveal';

class SplashFooter extends Component {
  render () {
    return <div className="splash-page-footer">
      <h3>RECENT PROJECTS</h3>
      <div className="vertical-line" />
    </div>
  }
}
export default reveal(SplashFooter, {origin:'right', reset: true});