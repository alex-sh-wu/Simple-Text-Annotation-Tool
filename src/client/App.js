import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
const axios = require('axios');

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    axios.get('/api/getUsername')
      .then(res => res.data)
      .then(user => this.setState({ username: user.username }));


    axios.get('/api/text_snippet')
      .then(res => console.log(res.data));

    axios.get('/api/annotation')
      .then(res => console.log(res.data));

    axios.get('/api/label')
      .then(res => console.log(res.data));

    // axios.post('/api/text_snippet', {
    //   title: "Text 4",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // })
    //   .then(res => console.log(res));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
