import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button } from "keep-react";
import { GiFallingEye } from "react-icons/gi";

export const ModalComp = ({ showModal, responseInfo, onClose }) => {
  const [showModalX, setShowModalX] = useState(false);

  useEffect(() => {
    setShowModalX(showModal);
  }, [showModal]);

  return (
    <Modal
      icon={<GiFallingEye size={48} color="#f39e9e" />}
      size="md"
      show={showModalX}
      position="center"
    >
      <Modal.Header>{responseInfo.title}</Modal.Header>
      {/* <Modal.Body>
        <div className="space-y-6">
          <p className="flex flex-wrap text-body-5 md:text-body-4 leading-relaxed text-metal-500">
            Size: {responseInfo.size}
          </p>
        </div>
      </Modal.Body> */}
        <div className="flex flex-row gap-4 justify-end">
      <Modal.Footer>
          <Button
            className="hover:text-red-300 hover:border-red-300 hover:bg-white"
            type="outlineGray"
            onClick={onClose}
          >
            Close
          </Button>
          <a href={responseInfo.link} download={responseInfo.title} rel="noopener noreferrer">
            <Button
              className="hover:text-red-300 hover:border-red-300 hover:bg-white"
              type="outlineGray"
              onClick={onClose}
            >
              Descargar
            </Button>
          </a>
      </Modal.Footer>
        </div>
    </Modal>
  );
};
