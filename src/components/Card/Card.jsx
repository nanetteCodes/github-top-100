import React from 'react';
import './card.scss';

const Card = ({ repoName, repoUrl, starCount, children }) => {
   return (
      <div className='card-body'>
         <h5 className='card-title'>{repoName}</h5>
         <a
            className='card-url'
            target='_blank'
            rel='noopener noreferrer'
            href={repoUrl}
         >
            View Repository
         </a>
         <p className='card-stars'>{starCount}</p>
      </div>
   );
};

export default Card;
