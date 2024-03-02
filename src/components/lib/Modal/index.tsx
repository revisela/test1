import { PropsWithChildren } from "react";
import { Modal as BModal } from "react-bootstrap";

interface ModalProps extends PropsWithChildren {
  handleClose: () => void;
  show: boolean;
}

function Modal({ handleClose, show, children }: ModalProps) {
  return (
    <>
      <BModal centered show={show} onHide={handleClose}>
        <BModal.Header closeButton></BModal.Header>
        <BModal.Body>{children}</BModal.Body>
      </BModal>
    </>
  );
}

export default Modal;
