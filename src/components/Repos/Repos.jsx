import React, { Component } from 'react';
import RepoCards from '../RepoCards/RepoCards';

export default class Repos extends Component {
   state = {
      repos: [],
   };
   componentDidMount() {
      fetch(
         'https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=100',
      )
         .then(res => res.json())
         .then(data => {
            this.setState({ repos: data.items });
            console.log(this.state);
         })
         .catch(console.log);
   }

   render() {
      const { repos } = this.state;
      return <RepoCards repos={repos} />;
   }
}
