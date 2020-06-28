import * as React from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#app");

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  contentLabel?: string;
}

const Modal = ({ children, isOpen, onAfterOpen, onRequestClose }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
