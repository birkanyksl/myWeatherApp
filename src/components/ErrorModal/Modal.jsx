/* eslint-disable react/prop-types */
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
