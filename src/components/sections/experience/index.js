import React, { Component } from 'react';
import ExpFooter from './exp-footer';


const EXPERIENCE_LIST = [
  {
    date: '07/2017 - Current',
    title: 'Front-End Developer at Gather digital. Manchester, UK',
    description: 'Development of several web/native apps and platform for RailDiary, Ecolab, Sisuphycology in React, React native, MobX and Redux.',
  },
  {
    date: '01/2017 - 07/2017',
    title: 'Freelance Designer & Front-End Developer. Manchester, UK',
    description: 'Web design and development in Sketch, HTML5, CSS3, React.js and wordpress for skinnyflakk.com, knnect.com, etc',
  },
  {
    date: '2012 - 10/2016',
    title: 'Front-End Designer/ Developer, iVendi Limited. Manchester, UK',
    description: 'Designer of all UI and UX interfaces, applications and assets in Adobe CS, HTML5, CSS3, Angular and React',
  },
  {
    date: '2010 - 2012',
    title: 'Web Designer & Front-End Developer, EkoPlc. Mallorca, Spain',
    description: 'Designer and developer of several web applications, banners, brochures and posters',
  },
  {
    date: '2008 - 2010',
    title: 'Web Designer & Front-End Developer, Bankoi. Vigo, Spain',
    description: 'Responsible for the design, maintenance and development of several web sites. Instrumental in creating ATLAS, a lightweight php framework for the development of customized web pages',
  },
  {
    date: '2007',
    title: 'Game Design Course in Flash and ActionScript. Ourense, Spain',
    description: 'Confederación Empresarial de Ourense',
  },
  {
    date: '2006',
    title: 'Software System Technical Engineer. Ourense, Spain',
    description: 'IES A Carballeira',
  },
];

export class Experience extends Component {
  
  renderExperienceList = () => {
    return EXPERIENCE_LIST.map((exp, i) => {
      return (
        <li key={i}>
          <p className="indeted-paragraph">{exp.date}</p>
          <p className="bold-paragraph">{exp.title}</p>
          <p className="indeted-paragraph">{exp.description}</p>
        </li>
      );
    })
  }
  
  render() {
    return (
      <div className="experience-section" id="experience">
        <div className="central-panel">
          <div className="experience-titles">
            <h2>Experience</h2>
            <h3>education and work</h3>
          </div>
          <div className="experience-wrapper">
            <ul className="lists">
              {this.renderExperienceList()}
            </ul>
          </div>
        </div>
        <ExpFooter />
      </div>
    );
  }
}

export default Experience;