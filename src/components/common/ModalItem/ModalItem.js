import React from "react";

import './styles.scss';

const ModalItem = ({ openItem, setOpenItem }) => {
  const closeModal = (e) => {
    if(e.target.id === 'overlay') {
      setOpenItem(null)
    }
  }

  if(!openItem) return null;

  return(
    <div className="overlay" id="overlay" onClick={closeModal}>
      <div className="modal">
        <div className="modal-banner">
          <img className="modal-banner__img" src={openItem.img} alt={openItem.name} />
        </div>
        {openItem.name}
      </div>
    </div>
  )
}
export default ModalItem;