import React, { Component } from 'react';
import PolarChart from './polar-chart';

const AWARD_LIST = [
  {
    title: 'Winner of the Motor Trader’s Dealer Product of the Year Award',
    company: 'iVendi ltd',
    role: 'Head Designer',
  },
  {
    title: 'Winner of the International Auto Finance Awards Best product or service innovation',
    company: 'iVendi ltd',
    role: 'Designer',
  },
  {
    title: 'Winner of the IAF Awards Runner-up in Motor Finance Point of Sale',
    company: 'iVendi ltd',
    role: 'Designer',
  },
  {
    title: 'Finalist of the Motor Trader’s Industry Award',
    company: 'iVendi ltd',
    role: 'Designer',
  }
];

class Splash extends Component {
  
  renderAwardList = () => {
    return AWARD_LIST.map((award, i) => (
      <li key={i}>
        <p className="bold-paragraph">{award.title}</p>
        <p className="indeted-paragraph">
          Company: {award.company}<br />
          Role: {award.role}
        </p>
      </li>
    ));
  }
  
  render() {
    return (
      <div className="awards-section">
        <div className="central-panel">
          <h2>Skills/Awards</h2>
          <h3>These are some of my skillz</h3>
          <div className="sections skills-chart">
            <h3>Skillz</h3>
            <PolarChart />
          </div>
          <div className="sections awards-wrapper">
            <h3>Awards</h3>
            <p className="indeted-paragraph dark">2020</p>
            <ul className="lists">
            <li>
              <p className="bold-paragraph">Innovation Award and The Best Service for Dealers Awards at the Car Finance Awards
              </p>
              <p className="indeted-paragraph">
                Company: iVendi ltd<br />
                Role: Software Engineer 
              </p>
            </li>
            </ul>
            <p className="indeted-paragraph dark">2015</p>
            <ul className="lists">
              {this.renderAwardList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;