import React, { Component } from 'react';
import RepoItem from '../RepoItem/RepoItem';

export default class Repos extends Component {
   state = {
      repos: [],
   };
   async componentDidMount() {
      try {
         const res = await fetch(
            'https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=100',
         );
         const data = await res.json();
         if (!res.ok) {
            throw Error(res.statusText);
         }
         this.setState({ repos: data.items });
      } catch (err) {
         console.log(err);
      }
      console.log(this.state);
   }

   render() {
      const { repos } = this.state;
      return <RepoItem repos={repos} />;
   }
}
