import React, { Component } from 'react';
import reveal from '../../utils/reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Title extends Component {
  render () {
    return <div className="title">
      Im Augusto Solorzano, a front end <AnchorLink href="#projects" className="sliding-url">developer</AnchorLink> and UX/UI <AnchorLink offset='-300' href="#projects" className="sliding-url">designer</AnchorLink> in Manchester, UK.
    </div>
  }
}
export default reveal(Title, {delay: 500});