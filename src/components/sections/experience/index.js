import React, { Component } from 'react';
import ExpFooter from './exp-footer';


const EXPERIENCE_LIST = [
  {
    date: '08/2018 - PRESENT',
    title: 'Software engineer at iVendi Ltd. Manchester, UK',
    description: 'Development of the juhu.auto platform and web apps mainly in React with custom hooks, Next.js, MobX, Redux, TypeScript, JSS, Storybook, styled components,',
  },
  {
    date: '07/2017 - 07/2018',
    title: 'Frontend developer at Gather Digital. Manchester, UK',
    description: 'Development of several web/native apps and platform for RailDiary, Ecolab, Sisupsychology in React, React native, MobX and Redux',
  },
  {
    date: '01/2017 - 07/2017',
    title: 'Freelance frontend developer. Manchester, UK',
    description: 'Web design and development in Sketch, HTML5, CSS3, React and wordpress for skinnyflakk.com and knnect.com',
  },
  {
    date: '11/2012 - 10/2016',
    title: 'Frontend designer, iVendi Ltd. Manchester, UK',
    description: 'Designer of all UI and UX interfaces, applications and assets in Adobe CS, HTML5, CSS3, Angular and React',
  },
  {
    date: '10/2010 - 03/2012',
    title: 'Web designer, EkoPlc. Mallorca, Spain',
    description: 'Designer and developer of several web applications, banners, brochures and posters',
  },
  {
    date: '06/2008 - 10/2010',
    title: 'Web designer, Bankoi. Vigo / Mallorca, Spain',
    description: 'Responsible for the design, maintenance and development of several web sites. Instrumental in creating ATLAS, a lightweight php framework for the development of customized web pages',
  },
  {
    date: '2007',
    title: 'Game design course in Flash and ActionScript. Ourense, Spain',
    description: 'Confederación Empresarial de Ourense',
  },
  {
    date: '10/2004 - 05/2006',
    title: 'Computer science technical degree. Ourense, Spain',
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