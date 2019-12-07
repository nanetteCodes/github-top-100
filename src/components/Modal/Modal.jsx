import React from 'react';
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

export default Modal;
