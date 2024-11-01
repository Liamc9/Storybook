// src/components/Logo/Logo.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Import logo assets
import primaryLogo from '../assets/logo-primary.png';
import secondaryLogo from '../assets/logo-secondary.png';
import faviconLogo from '../assets/favicon.ico';

const StyledImg = styled.img`
  display: inline-block;
  width: ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return '150px';
      case 'favicon':
        return '32px';
      case 'primary':
      default:
        return '200px';
    }
  }};
`;

const Logo = ({ variant, alt }) => {
  let logoSrc;

  switch (variant) {
    case 'secondary':
      logoSrc = secondaryLogo;
      break;
    case 'favicon':
      logoSrc = faviconLogo;
      break;
    case 'primary':
    default:
      logoSrc = primaryLogo;
      break;
  }

  return <StyledImg src={logoSrc} alt={alt} variant={variant} />;
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'favicon']),
  alt: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
