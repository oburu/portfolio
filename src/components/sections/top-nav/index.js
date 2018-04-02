import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class TopNav extends Component {
  state = {
    scrolling: false
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event) => {
    const { scrolling } = this.state;
    
    if (window.scrollY === 0 && scrolling === true) {
      this.setState({scrolling: false});
    } else if (window.scrollY !== 0 && scrolling !== true) {
      this.setState({scrolling: true});
    }
  }

  render() {
    const { scrolling } = this.state;
    const topmenuClasses = scrolling 
      ? "top-menu hidden" 
      : "top-menu";
      
    return (
      <div className={topmenuClasses}>
        <AnchorLink href="#topPage" className="menu-name sliding-url">Augusto Solorzano</AnchorLink>
        <ul>
          <li><AnchorLink offset='45'className="sliding-url" href="#projects">Projects</AnchorLink></li>
          <li><AnchorLink offset='45' className="sliding-url" href="#experience">Experience</AnchorLink></li>
          <li><AnchorLink className="sliding-url" href="#contact">Contact</AnchorLink></li>
        </ul>
        <div 
          className="burger-container" 
          onClick={this.props.burgerClick} 
        />
      </div>
    );
  }
}

export default TopNav;