import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({
   author,
   commitLink,
   date,
   handleClose,
   id,
   imgUrl,
   show,
   message,
}) => {
   const showHideClass = show ? 'modal display-block' : 'modal display-none';

   return (
      <div className={showHideClass}>
         <div className='modal-main' id={id}>
            <h1 className='modal-title'>Commits Made Since {date} </h1>
            <div style={{ overflow: 'auto', height: '68vh' }}>
               <div className='modal-item'>
                  <img src={imgUrl} alt={message} />
                  <div style={{ display: 'grid' }}>
                     <h2>{author}</h2>
                     <h4>Time: {date}</h4>
                     <p>
                        <strong>Message:</strong> {message}
                     </p>
                     <a
                        href={commitLink}
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        View Commit
                     </a>
                  </div>
               </div>
            </div>
            <button onClick={handleClose}>close</button>
         </div>
      </div>
   );
};

Modal.propTypes = {
   author: PropTypes.string,
   commitLink: PropTypes.string,
   date: PropTypes.string,
   handleClose: PropTypes.func.isRequired,
   id: PropTypes.string.isRequired,
   imgUrl: PropTypes.string,
   show: PropTypes.bool.isRequired,
   message: PropTypes.string,
};

export default Modal;
