// DateInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const DateInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  min,
  max,
  autoFocus,
  readOnly,
  className,
}) => (
  <InputWrapper className={className}>
    <Label htmlFor={name}>{label}</Label>
    <Input
      type="date"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      min={min}
      max={max}
      autoFocus={autoFocus}
      readOnly={readOnly}
    />
  </InputWrapper>
);

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // Format: YYYY-MM-DD
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

DateInput.defaultProps = {
  placeholder: '',
  required: false,
  disabled: false,
  min: undefined,
  max: undefined,
  autoFocus: false,
  readOnly: false,
  className: '',
};

export default DateInput;
