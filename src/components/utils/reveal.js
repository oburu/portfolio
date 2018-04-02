import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import scrollReveal from './scrollReveal';
 
export default function reveal(WrappedComponent, conf) {
  return class RevealEnhancer extends Component {
     
    componentDidMount() {
      const domElement = ReactDOM.findDOMNode(this.component);
      scrollReveal.reveal(domElement, conf);
    }
   
    render() {
      return <WrappedComponent ref={(c) => this.component = c} />
    }
  }
}