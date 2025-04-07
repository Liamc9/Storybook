import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../components/atoms/overlays/modals/Modal";
import DeleteCard from "../../../components/atoms/cards/DeleteCard";

export default {
  title: "Atoms/Overlays/Modals",
  component: Modal,
  tags: ["autodocs"],
};

const Container = styled.div`
  padding: 100px;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.variant === "danger" ? "#dc2626" : "#2563eb"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
`;

const ModalContent = styled.div`
  padding: 20px;
  `;

// Default Modal Story
export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <StyledButton onClick={() => setIsOpen(true)}>Open Modal</StyledButton>
      <Modal
  isModalOpen={isOpen}
  closeModal={handleClose}
  animate={true}
  rounded={false}         // Set to false for square corners
  fullScreen={true}      // Set to true for a full-screen modal
  //width="500px"           // Custom width
  //height="300px"          // Custom height
  maxWidth="600px"        // Custom max-width
  maxHeight="1000px"        // Custom max-height
  showCloseButton={true}  // Toggle X button visibility
>
  <ModalContent>
  <p>This modal can now be fully customized!</p>
  </ModalContent>
</Modal>
    </Container>
  );
};

// Delete Modal Story using the DeleteCard component
export const DeleteModalCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => setIsOpen(false);
  const handleConfirm = () => {
    // perform delete action here
    setIsOpen(false);
  };

  return (
    <Container>
      <StyledButton variant="danger" onClick={() => setIsOpen(true)}>
        Open Delete Modal
      </StyledButton>
      <Modal isModalOpen={isOpen} closeModal={handleCancel} animate={true}>
        <DeleteCard onCancel={handleCancel} onConfirm={handleConfirm} />
      </Modal>
    </Container>
  );
};
