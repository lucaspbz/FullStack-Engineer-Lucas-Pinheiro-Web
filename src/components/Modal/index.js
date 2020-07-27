import React from 'react';
import Modal from 'react-modal';

import { Link } from 'react-router-dom';

export default function CustomModal({ data, isOpen, setIsOpen }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '80vw',
      maxHeight: '80vh',
      overflowY: 'auto',
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  if (data === undefined) {
    return <div>loading</div>;
  } else {
    return (
      <div className="container">
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          appElement={document.getElementById('root')}
        >
          <div dangerouslySetInnerHTML={{ __html: data.enunciado }}></div>

          <Link
            to={{ pathname: '/edit', state: { question: data } }}
            className="card-link text-success"
          >
            Editar
          </Link>
        </Modal>
      </div>
    );
  }
}
