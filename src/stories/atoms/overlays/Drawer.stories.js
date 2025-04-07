// src/stories/Drawer.stories.jsx

import React, { useState } from "react";
import styled from "styled-components";
import Drawer from "../../../components/atoms/overlays/drawers/Drawer";

export default {
  title: "Atoms/Overlays/Drawer",
  component: Drawer,
  argTypes: {
    side: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    transitionDuration: { control: "number" },
    width: { control: "text" },
    maxWidth: { control: "text" },
    height: { control: "text" },
    maxHeight: { control: "text" },
    noRoundedCorners: { control: "boolean" },
    hideHandle: { control: "boolean" },
  },
};

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>This is the content inside the side drawer.</p>
      </Drawer>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  side: "left",
  transitionDuration: 300,
  width: "70%",
  maxWidth: "500px",
  height: "100%",
  maxHeight: "100%",
  noRoundedCorners: false,
};

export const RightDrawer = Template.bind({});
RightDrawer.args = {
  side: "right",
  transitionDuration: 300,
  width: "70%",
  maxWidth: "500px",
  height: "100%",
  maxHeight: "100%",
  noRoundedCorners: false,
};
