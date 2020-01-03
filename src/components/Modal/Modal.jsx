import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './modal.scss';

const Modal = ({
   commitData, 
   handleClose, 
   show   
}) => {
   const showHideClass = show ? 'modal display-block' : 'modal display-none';

   return (
      <div className={showHideClass}>
         <div className='modal-main'>
            <button onClick={handleClose}>
               <FontAwesomeIcon icon={faTimes} />
            </button>
            <h1 className='modal-title'>Commits Made</h1>
            <div style={{ overflow: 'auto', height: '68vh' }}>  
               {commitData.map(commit => (          
                  <div className='modal-item' key ={commit.node_id} id={commit.node_id}>
                     <img src={commit.author.avatar_url} alt={commit.commit.message} />
                     <div className='modal-item--body'>
                        <h2>{commit.commit.author.name}</h2>
                        <h4>Time: {commit.commit.author.date}</h4>
                        <p>
                           <strong>Message:</strong> {commit.commit.message}
                        </p>
                        <a
                           href={commit.html_url}
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           View Commit
                        </a>
                     </div>
                  </div>       
               ))} 
            </div>
         </div>
      </div>
   );
};

Modal.propTypes = {
   commitData: PropTypes.array.isRequired,
   handleClose: PropTypes.func.isRequired,
   show: PropTypes.bool.isRequired,
};

export default Modal;
