import React, { Component } from 'react';
import RepoItem from '../RepoItem/RepoItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default class Repos extends Component {
  state = {
    repos: [],
    loading: false,
    errMsg: '',
  };
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await fetch(
        'https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=100',
      );
      const data = await res.json();
      if (!res.ok) {
        this.setState({ errMsg: res.statusText, loading: false });
        throw Error(res.statusText);
      }
      this.setState({ repos: data.items, loading: false });
    } catch (err) {
      this.setState({ errMsg: err });
      console.log(err);
    }
  }

  render() {
    const { repos, loading, errMsg } = this.state;
    return (
      <>
        {loading ? <LoadingSpinner /> : null}
        {errMsg !== '' ? <h1 className='err'>Error</h1> : null}
        <div className='container grid'>
          <RepoItem repos={repos} />
        </div>
      </>
    );
  }
}
