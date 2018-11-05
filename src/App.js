import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { handleInitialData } from './actions/shared';

class App extends React.PureComponent {
  // Populate Redux state tree
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default connect()(App);
