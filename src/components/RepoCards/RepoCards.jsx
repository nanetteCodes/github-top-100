import React from 'react';

const RepoCards = ({ repos }) => {
   return (
      <div>
         {repos.map(repo => (
            <div className='card' key={repo.id}>
               <div className='card-body'>
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
                  <a
                     className='card-url'
                     target='_blank'
                     rel='noopener noreferrer'
                     href={repo.commits_url.split('{')[0]}
                  >
                     {repo.commits_url.split('{')[0]}
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
};

export default RepoCards;
