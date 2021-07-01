import React, { Component } from 'react';
import reveal from '../../utils/reveal';

class ExpFooter extends Component {
  render () {
    return <div className="experience-section-footer">
      <h3>Wish to Contact me?</h3>
      <div className="vertical-line" />
    </div>
  }
}
export default reveal(ExpFooter, {distance: '50px',origin:'right',reset: true});