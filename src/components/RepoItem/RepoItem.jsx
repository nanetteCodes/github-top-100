import React, { Component } from 'react';
import './repoItem.scss';

export default class RepoItem extends Component {
   state = {
      commitUrl: '',
      commitData: [],
   };

   handleClick = async commitUrl => {
      const twentyFourAgo = new Date(
         new Date().getTime() - 24 * 60 * 60 * 1000,
      );
      this.setState({ commitUrl });

      try {
         const res = await fetch(`${commitUrl}?since=${twentyFourAgo}`);
         const data = await res.json();
         if (!res.ok) {
            throw Error(res.statusText);
         }
         this.setState({ commitData: data });
      } catch (err) {
         console.log(err);
      }
      console.log(this.state);
   };

   render() {
      const { repos } = this.props;
      return (
         <div>
            {repos.map(repo => (
               <div className='card' key={repo.id}>
                  <h5 className='card-title'>{repo.name}</h5>
                  <a
                     className='card-url'
                     target='_blank'
                     rel='noopener noreferrer'
                     href={repo.html_url}
                  >
                     View Repository
                  </a>
                  <p className='card-stars'>{repo.stargazers_count}</p>
                  <button
                     className='card-url'
                     id={repo.id}
                     onClick={() =>
                        this.handleClick(repo.commits_url.split('{')[0])
                     }
                  >
                     Commits
                  </button>
               </div>
            ))}
         </div>
      );
   }
}
