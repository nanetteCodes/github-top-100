import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Modal/modal.scss';

const ModalError = ({ handleClose, show, message }) => {
   const showHideClass = show ? 'modal display-block' : 'modal display-none';

   return (
      <div className={showHideClass}>
         <div className='modal-main'>
            <div style={{ overflow: 'auto', height: '75vh' }}>
               <button onClick={handleClose}>
                  <FontAwesomeIcon icon={faTimes} />
               </button>
               <h1 className='modal-title'>{message}</h1>
            </div>
         </div>
      </div>
   );
};

ModalError.propTypes = {
   handleClose: PropTypes.func.isRequired,
   show: PropTypes.bool.isRequired,
   message: PropTypes.string,
};

export default ModalError;
