import React, { Component } from 'react';

class MenuOverlayer extends Component {
  render() {
    const { menuOpen, overlayerClick } = this.props;
    const menuClasses = menuOpen 
      ? 'menu-overlayer open'
      : 'menu-overlayer';
      
    return <div 
        className={menuClasses}
        onClick={overlayerClick}
      >
      <div className="menu-item-wrapper">
        <ul>
          <li className="item-1"><a className="menu-item" href="#projects"><h3>Projects</h3></a></li>
          <li className="item-2"><a className="menu-item" href="#experience"><h3>Experience</h3></a></li>
          <li className="item-3"><a className="menu-item" href="#contact"><h3>Contact</h3></a></li>
        </ul>
      </div>
    </div>
  }
}

export default MenuOverlayer;  