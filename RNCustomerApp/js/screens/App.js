import React from 'react';
import { connect } from 'react-redux';
import createRouter from '../routes';

class App extends React.Component {
  render() {
    const Router = createRouter(this.props.isLogin);
    return <Router />;
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin
});

export default connect(mapStateToProps)(App);
