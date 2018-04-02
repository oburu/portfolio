import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    const preloaderClasses = this.props.ready 
      ? 'loader-overlayer hide-loader' 
      : 'loader-overlayer';
      
    return <div className={preloaderClasses}>
    <div className="loader-wrapper">
      <span className="loader circle-1"></span>
      <span className="loader circle-2"></span>
    </div>
  </div>
  }
}

export default Preloader;  