import React, { Component } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import './repoItem.scss';

export default class RepoItem extends Component {
   state = {
      commitUrl: '',
      commitData: [],
      modal: false,
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
         this.setState({ commitData: data, modal: true });
      } catch (err) {
         console.log(err);
      }
      console.log(this.state);
   };

   hideModal = () => {
      this.setState({ modal: false });
      console.log(this.state.modal);
   };

   render() {
      const { repos } = this.props;
      const { commitData } = this.state;
      return (
         <div>
            {repos.map(repo => (
               <div className='card' key={repo.id}>
                  <Card
                     repoName={repo.name}
                     repoUrl={repo.html_url}
                     starCount={repo.stargazers_count}
                  />
                  <button
                     className='card-url'
                     id={repo.id}
                     onClick={() =>
                        this.handleClick(repo.commits_url.split('{')[0])
                     }
                  >
                     Commits
                  </button>
                  <Modal show={this.state.modal} handleClose={this.hideModal}>
                     {commitData && <h1>No Commits Made For 24 Hours</h1>}
                     {commitData.map(commit => (
                        <div key={commit.node_id}>
                           <img
                              src={commit.author.avatar_url}
                              alt={commit.commit.message}
                           />
                           <h2>{commit.commit.author.name}</h2>
                           <span>{commit.commit.author.date}</span>
                           <a
                              href={commit.html_url}
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              view
                           </a>
                           <p>{commit.commit.message}</p>
                        </div>
                     ))}
                  </Modal>
               </div>
            ))}
         </div>
      );
   }
}
