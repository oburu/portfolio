import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { devData, designData } from './data';
import CarouselItem from './carousel-item';
import PropTypes from 'prop-types';

const OWL_OPTIONS = {
  items: 2,
  loop: true,
  dots: false,
  autoWidth: true,
  center: true,
  nav: true,
  navText: ['', ''],
  navClass: ['arrow left-arrow-development', 'arrow right-arrow-development'],
  responsive: {
    600: {
      items: 2
    }
  }
}

class Projects extends Component {
  
  handleThumbClick = (item) => {
    this.props.handleSelectedData(item);
  }
  
  renderCarrousel = (type) => {
    const currentData = type === 'dev' 
      ? devData 
      : designData;
    
    return currentData.map((item, i) => (
      <CarouselItem 
        key={i} 
        data={item} 
        handleThumbClick={this.handleThumbClick} 
      />
    ));
  }
  
  shouldComponentUpdate(nextProps, nextState){
    // this is to avoid refresh when click in the more button
    return false;
  }
  
  render() {
    // fix propTypes expecting string to array of strings
    OwlCarousel.propTypes = {
      navClass: PropTypes.arrayOf(PropTypes.string)
    }

    return (
      <div className="projects-section" id="projects">
        <div className="development-section">
          <div className="central-panel">
            <h2>Development</h2>
            <h3>react, next.js, react-native, redux, mobx, node, webpack, storybook, styled-components, sass, jss, P5.js, bootstrap</h3>
          </div>
          <OwlCarousel 
          	className="owl-carousel"
            {...OWL_OPTIONS}>
            {this.renderCarrousel('dev')}
          </OwlCarousel>
        </div>
        <div className="design-section">
          <div className="central-panel">
            <h2>Design</h2>
            <h3>ui/ux, web design, branding, svg/css3 animations, printing design</h3>
          </div>
          <OwlCarousel 
          	className="owl-carousel"
            {...OWL_OPTIONS}>
            {this.renderCarrousel('designData')}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Projects;