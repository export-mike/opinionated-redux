import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { actions } from './state';
import { connect } from './lib/opinionated-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.user.isLoading && <h2> Please Wait...</h2> }
	  {this.props.user.errorLoading && <h2> An Error Occured Loading </h2>}
	  {this.props.user.name && <h1> Hello {this.props.user.name} </h1>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, { fetchUser: actions.user.fetchUser })(App);
