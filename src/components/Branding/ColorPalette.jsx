// src/components/ColorPalette/ColorPalette.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PaletteSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.neutralDark};
`;

const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ColorSwatch = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.neutralMedium};
`;

const ColorInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const ColorName = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${(props) => props.neutralDark};
`;

const ColorHex = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${(props) => props.neutralDark};
`;

const ColorPalette = ({ palette }) => {
  const {
    primary,
    lightPrimary,
    veryLightPrimary,
    darkPrimary,
    veryDarkPrimary,
    neutrals,
  } = palette;

  const renderColorSwatch = (color) => (
    <ColorSwatch color={color.hex} neutralMedium={neutrals.mediumGray} key={color.name}>
      <ColorInfo>
        <ColorName>{color.name}</ColorName>
        <ColorHex>{color.hex}</ColorHex>
      </ColorInfo>
    </ColorSwatch>
  );

  return (
    <PaletteContainer>
      {/* Primary Color and Shades */}
      <PaletteSection>
        <SectionTitle neutralDark={neutrals.darkGray}>Primary Color and Shades</SectionTitle>
        <ColorsWrapper>
          {renderColorSwatch({
            name: 'Primary - Warm Taupe',
            hex: primary,
          })}
          {renderColorSwatch({
            name: 'Light Warm Taupe',
            hex: lightPrimary,
          })}
          {renderColorSwatch({
            name: 'Very Light Warm Taupe',
            hex: veryLightPrimary,
          })}
          {renderColorSwatch({
            name: 'Dark Warm Taupe',
            hex: darkPrimary,
          })}
          {renderColorSwatch({
            name: 'Very Dark Warm Taupe',
            hex: veryDarkPrimary,
          })}
        </ColorsWrapper>
      </PaletteSection>

      {/* Neutral Colors */}
      <PaletteSection>
        <SectionTitle neutralDark={neutrals.darkGray}>Neutral Colors</SectionTitle>
        <ColorsWrapper>
          {Object.entries(neutrals).map(([key, hex]) =>
            renderColorSwatch({
              name: key,
              hex,
            })
          )}
        </ColorsWrapper>
      </PaletteSection>
    </PaletteContainer>
  );
};

ColorPalette.propTypes = {
  palette: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    lightPrimary: PropTypes.string.isRequired,
    veryLightPrimary: PropTypes.string.isRequired,
    darkPrimary: PropTypes.string.isRequired,
    veryDarkPrimary: PropTypes.string.isRequired,
    neutrals: PropTypes.shape({
      white: PropTypes.string.isRequired,
      lightGray: PropTypes.string.isRequired,
      mediumGray: PropTypes.string.isRequired,
      darkGray: PropTypes.string.isRequired,
      black: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ColorPalette;
