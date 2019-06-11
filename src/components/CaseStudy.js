import React, { Component } from 'react';
import './CaseStudy.css';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne headingCaseStudy'>Case Study</h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Directions</span>
            </a>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Food</span>
            </a>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Gas</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
