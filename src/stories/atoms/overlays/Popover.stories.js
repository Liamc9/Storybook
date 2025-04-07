import React from 'react';
import styled from 'styled-components';
import Popover from '../../../components/atoms/overlays/popovers/Popover';

export default {
  title: 'Atoms/Overlays/Popovers',
  component: Popover,
  tags: ['autodocs'],
};

const Container = styled.div`
  padding: 100px;
`;

const TriggerButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6; /* Equivalent to Tailwind's bg-blue-500 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  padding: 16px;
`;

export const XPopover = () => (
  <Container>
    <Popover trigger={<TriggerButton>Click Me</TriggerButton>}>
      <ContentWrapper>
        <p>This is the popover content.</p>
      </ContentWrapper>
    </Popover>
  </Container>
);
