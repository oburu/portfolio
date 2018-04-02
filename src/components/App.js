import React, { Component, Fragment } from 'react';
import Splash from './sections/splash/';
import TopNav from './sections/top-nav/';
import Awards from './sections/awards/';
import Experience from './sections/experience/';
import Contact from './sections/contact/';
import Projects from './sections/projects/';
import MenuOverlayer from './sections/menu-overlayer/';
import Preloader from './sections/preloader/';
import ProjectView from './sections/project-view/';

class App extends Component {
  state = {
    loaded: false,
    menuOpen: false,
    selectedData: void 0,
    projectViewOpen: false,
  }
  
  componentWillMount() {
    window.addEventListener('load', () => {
      this.setState({loaded: true})
    });
  }
  
  handleSelectedData = (item) => {
    this.setState({selectedData: item});
    this.toggleViewOpen();
  }
  
  toggleViewOpen = () => {
    if (document.body.classList.contains('no-scroll')){
      document.body.classList.remove('no-scroll');
    } else {
      document.body.className += "no-scroll";
    }
    
    this.setState({
      projectViewOpen: !this.state.projectViewOpen
    });
  }
  
  toggleMenuOpen = () => {
    // this is to stop scrolling when the over layer is showing
    if (document.body.classList.contains('no-scroll')){
      document.body.classList.remove('no-scroll');
    } else {
      document.body.className += "no-scroll";
    }
    
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  
  render() {
    const { 
      loaded, 
      menuOpen, 
      projectViewOpen,
      selectedData
    } = this.state;
    
    const bodyWrapperClasses = projectViewOpen 
      ? 'body-wrapper scale-body-wrapper' 
      : 'body-wrapper';
    
    return (
      <Fragment>
        <Preloader ready={loaded} />
        <ProjectView 
          open={projectViewOpen} 
          toggleViewOpen={this.toggleViewOpen}
          data={selectedData}
        />
        <div className={bodyWrapperClasses}>
          <MenuOverlayer 
            menuOpen={menuOpen}
            overlayerClick={this.toggleMenuOpen}
          />
          <TopNav 
            burgerClick={this.toggleMenuOpen}
          />
          <Splash />
          <Projects 
            handleSelectedData={this.handleSelectedData}
          />
          <Awards />
          <Experience />
          <Contact />
        </div>
      </Fragment>
    );
  }
}

export default App;
