import React from "react";
import { ModalContainer } from "./modal.styles";

type ModalProps = {
    children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
    return <ModalContainer>{children}</ModalContainer>;
};

export default Modal;
