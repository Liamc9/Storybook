// Checkbox.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #333;
`;

// Checkbox Component
const Checkbox = ({ label, ...props }) => {
  return (
    <CheckboxWrapper>
      <StyledInput type="checkbox" {...props} />
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
    </CheckboxWrapper>
  );
};

export default Checkbox;
