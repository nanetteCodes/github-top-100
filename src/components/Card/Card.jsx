import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './card.scss';

const Card = ({ repoName, repoUrl, starCount }) => {
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
         <div className='card-star--container'>
            <FontAwesomeIcon icon={faStar} />
            <span className='card-stars'>{starCount}</span>
         </div>
      </div>
   );
};

Card.propType = {
   repoName: PropTypes.string.isRequired,
   repoUrl: PropTypes.string.isRequired,
   starCount: PropTypes.string.isRequired,
};

export default Card;
