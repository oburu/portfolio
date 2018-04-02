import React, { Component } from 'react';
import reveal from '../../utils/reveal';

class Subtitle extends Component {
  render () {
    return <div 
      className="subtitle">
        HEY THERE
    </div>
  }
}
export default reveal(Subtitle, {
  duration: 500, 
  origin:'top', 
  reset: true
});