import React, { Component } from 'react';

class CarouselItem extends Component {
    
  handleMore = () => {
    const { handleThumbClick, data } = this.props;
    handleThumbClick(data);
  }
  
  render() {
    const { 
      title, 
      imgSmall, 
      gitLink, 
      liveLink, 
      tech, 
      imgBig 
    } = this.props.data;
    
    return (
      <div className='item project-item'>
        <div className='item-info'>
          <h2>{title}</h2>
          <div className='item-info--center'>
            {gitLink && <a href={gitLink} target="_blank" rel="noopener noreferrer">github</a>}
            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">live</a>}
            {imgBig && 
              <a 
                className='modalButton' 
                onClick={this.handleMore}>
                more
              </a>}
          </div>
          <h3>{tech}</h3>
        </div>
        <img src={require('../../../' + imgSmall)} alt={title}/>
      </div>
    );
  }
}

export default CarouselItem;