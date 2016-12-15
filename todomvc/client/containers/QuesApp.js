import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuesSection from '../components/QuesSection';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as QuesActions from '../actions/QuesActions';

class QuesApp extends Component {

  componentDidMount() {
        this.props.actions.getQues();
      }

  render() {
            const { ques, actions } = this.props;
            if (ques);
            {
                var questions = ques.map(function(ques,i){return <li> {ques.question}</li>})
            }


    return (
      <div>
        <Header addQues={actions.addQues} />
        <QuesSection ques={ques}/>

      </div>
    );
  }
}

function mapState(state) {
  return {
    ques: state.ques
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(QuesActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(QuesApp);
