import React, { useState } from 'react';
import TabGroup from '../../components/navigation/TabGroup';

export default {
  title: 'Navigation/Tabs/TabGroup',
  component: TabGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### TabGroup Component (Controlled)

\`TabGroup\` can be used in a controlled manner by supplying \`activeIndex\` and \`onTabChange\` props.

**Props:**
- \`tabs\` (required): Array of strings representing tab names.
- \`activeColor\` (optional): Color for the active tab text and underline. Defaults to \`#007bff\`.
- \`activeIndex\` (optional): Currently active tab index for controlled usage.
- \`onTabChange\` (optional): Callback when a tab is clicked. Should update the \`activeIndex\` in the parent.

**Usage:**

\`\`\`jsx
const ParentComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = ['Home', 'Profile', 'Settings'];

    return (
    <div>
      <TabGroup
        tabs={tabs}
        activeColor="#FF5733"
         onTabChange={setActiveIndex}
      />
      <div >
        {activeTab === 0 && <div>Content for Home</div>}
        {activeTab === 1 && <div>Content for Profile</div>}
        {activeTab === 2 && <div>Content for Settings</div>}
      </div>
    </div>
  );
};
\`\`\`
        `,
      },
    },
  },
};

const ControlledTemplate = (args) => {
  const { tabs, activeColor } = args;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <TabGroup
        tabs={tabs}
        activeColor={activeColor}
        activeIndex={activeIndex}
        onTabChange={setActiveIndex}
      />
      <div style={{ padding: '1rem' }}>
        {activeIndex === 0 && <div>Content for Tab One</div>}
        {activeIndex === 1 && <div>Content for Tab Two</div>}
        {activeIndex === 2 && <div>Content for Tab Three</div>}
      </div>
    </>
  );
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  tabs: ['Tab One', 'Tab Two', 'Tab Three'],
  activeColor: '#FF5733',
};
