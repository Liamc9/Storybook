// src/components/Typography.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Base styled component that applies the primary font family.
 */
const Base = styled.span`
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
`;

/**
 * H1 Component
 * Usage: Primary Page Titles
 */
export const H1 = ({ children, ...props }) => (
  <Base
    as="h1"
    style={{
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: '16px',
      lineHeight: '1.2',
    }}
    {...props}
  >
    {children}
  </Base>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * H2 Component
 * Usage: Section Headers
 */
export const H2 = ({ children, ...props }) => (
  <Base
    as="h2"
    style={{
      fontSize: '24px',
      fontWeight: 500,
      marginBottom: '14px',
      lineHeight: '1.3',
    }}
    {...props}
  >
    {children}
  </Base>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * BodyText Component
 * Usage: Main Content
 */
export const BodyText = ({ children, ...props }) => (
  <Base
    as="p"
    style={{
      fontSize: '16px',
      fontWeight: 400,
      marginBottom: '12px',
      lineHeight: '1.5',
    }}
    {...props}
  >
    {children}
  </Base>
);

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Caption Component
 * Usage: Supplementary Information
 */
export const Caption = ({ children, ...props }) => (
  <Base
    as="span"
    style={{
      fontSize: '12px',
      fontWeight: 300,
      color: '#666666',
      display: 'block',
      marginBottom: '8px',
      lineHeight: '1.4',
    }}
    {...props}
  >
    {children}
  </Base>
);

Caption.propTypes = {
  children: PropTypes.node.isRequired,
};
