import React, { Component } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import ModalError from '../ModalError/ModalError';
import PropTypes from 'prop-types';

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
         alert(err);
      }
   };

   hideModal = () => {
      this.setState({ modal: false });
   };

   render() {
      const { repos } = this.props;
      const { commitData } = this.state;
      const emptyMsg = 'No Commits Made For 24 Hours';
      return (
         <>
            {repos.map(repo => (
               <Card
                  key={repo.id}
                  repoName={repo.name}
                  repoUrl={repo.html_url}
                  starCount={repo.stargazers_count}
                  handleClick={() =>
                     this.handleClick(repo.commits_url.split('{')[0])
                  }
               />
            ))}
            {commitData.length ? (               
                  <Modal
                     commitData={commitData}
                     show={this.state.modal}
                     handleClose={this.hideModal}
                  />               
            ) : (
               <ModalError
                  message={emptyMsg}
                  show={this.state.modal}
                  handleClose={this.hideModal}
               />
            )}
         </>
      );
   }
}

RepoItem.propTypes = {
   repos: PropTypes.array.isRequired,
};
