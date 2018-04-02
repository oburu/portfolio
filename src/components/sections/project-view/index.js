import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProjectView extends Component {
  
  // scroll this component to his top, for every new view
  componentWillReceiveProps(nextProps) {
    if (nextProps.open){
      const myView = ReactDOM.findDOMNode(this.myView);
      myView.scrollTo(0, myView.offsetTop);
    }
  }
  
  render() {
    const { open, toggleViewOpen, data } = this.props;
    
    const wrapperClasses = open 
      ? "modal-wrapper show-modal" 
      : "modal-wrapper";
      
    return (
      <div className={wrapperClasses} ref={(d) => this.myView = d}>
        <div className="modal-header">
          <div className="close-modal" onClick={toggleViewOpen}>
            <span className="close" />
            <h3 className="sliding-url">back to projects</h3>
          </div>
        </div>
        <div className="modal-dark-section">
            <div className="content-wrapper">
              <h3 className="modal-company">
                {data && data.tech}
              </h3>
              {data && <div className="work-img-title">
                <img 
                  src={require(`../../../${data.imgTop}`)}
                  alt={data.description} 
                  className="work-img" 
                  style={{backgroundColor:`${data.bkgColor}`}}
                />
                <div className="title design-name">{data.title}</div>
              </div>}
              <p className="work-description modal-description">
                {data && data.description}
              </p>
              <div className="modal-line">
                <div className="vertical-line"></div>
              </div>
            </div>
        </div>
        {data && <div className="modal-light-section" 
            style={{backgroundColor:`${data.bkgColor}`}}
          >
          <div className="modal-image-center">
            <img 
              src={require(`../../../${data.imgBig}`)} 
              alt={data.title} 
              className="work-img2" 
            />
          </div>
        </div>}
        <div className="modal-footer">
          <span 
            className="footer-link" 
            onClick={toggleViewOpen}>
              back to projects
          </span>
        </div>
      </div>
    );
  }
}

export default ProjectView;  