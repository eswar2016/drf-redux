import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';


export default class QuesSection extends Component {


  render() {
    const { question, i ,actions } = this.props;
    console.log('in ListSection',this.props);


    return (
              <div className='ListSection'>

                <ul><p><Link to={`/quiz/${question.id}`}>{i+1} {question.question}</Link></p></ul>


              </div>
            );
    }
}