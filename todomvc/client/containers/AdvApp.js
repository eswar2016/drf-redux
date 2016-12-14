import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as QuesActions from '../actions/QuesActions';

class AdvApp extends Component {

  componentDidMount() {
    this.props.actions.getAdvs();
  }

  render() {
    const { advs, actions } = this.props;

    return (
      <div>
        <Header addQues={actions.addQues} />
        <MainSection ques={ques} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    advs: state.advs
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(AdvActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(AdvApp);
