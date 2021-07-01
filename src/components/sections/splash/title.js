import React, { Component } from 'react';
import reveal from '../../utils/reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Title extends Component {
  render () {
    return <div className="title">
      I'm Augusto, a <AnchorLink href="#projects" className="sliding-url">software engineer</AnchorLink> that used to be a <AnchorLink offset='-300' href="#projects" className="sliding-url">designer</AnchorLink>, based in Manchester, UK.
    </div>
  }
}
export default reveal(Title, {delay: 300});