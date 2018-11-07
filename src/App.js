import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { handleInitialData } from './actions/shared';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';

class App extends React.PureComponent {
  // Populate Redux state tree
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" component={PostList} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

// Connect component to Redux store
export default connect()(App);
