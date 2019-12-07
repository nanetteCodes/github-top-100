import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
   const showHideClass = show ? 'modal display-block' : 'modal display-none';

   return (
      <div className={showHideClass}>
         <div className='modal-main'>
            {children}
            <button onClick={handleClose}>close</button>
         </div>
      </div>
   );
};

Modal.propTypes = {
   handleClose: PropTypes.func.isRequired,
   show: PropTypes.bool.isRequired,
   children: PropTypes.array,
};

export default Modal;
