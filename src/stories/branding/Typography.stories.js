// src/stories/Typography.stories.jsx

import React from 'react';
import { H1, H2, BodyText, Caption } from '../../components/Branding/Typography';

/**
 * Meta configuration for the Typography story.
 */
export default {
  title: 'Branding/Typography',
  component: H1, // Primary component (optional)
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A collection of typography styles used throughout the application, including headings, body text, captions, buttons, and links.',
      },
    },
  },
} /* Removed 'as Meta' for JavaScript compatibility */;

/**
 * Template for the Typography story.
 */
const Template = () => {
  // Styles for the table headers and cells
  const tableHeaderStyle = {
    borderBottom: '2px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
  };

  const tableCellStyle = {
    borderBottom: '1px solid #ddd',
    padding: '8px',
  };

  // Styles for the buttons
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 500,
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <div
      style={{
        padding: '40px',
        fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
        maxWidth: '800px',
      }}
    >
      {/* Typography Styles Table */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Typography Styles</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Element</th>
              <th style={tableHeaderStyle}>Font Size</th>
              <th style={tableHeaderStyle}>Font Weight</th>
              <th style={tableHeaderStyle}>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>H1</td>
              <td style={tableCellStyle}>32px</td>
              <td style={tableCellStyle}>700</td>
              <td style={tableCellStyle}>Primary Page Titles</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>H2</td>
              <td style={tableCellStyle}>24px</td>
              <td style={tableCellStyle}>500</td>
              <td style={tableCellStyle}>Section Headers</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Body Text</td>
              <td style={tableCellStyle}>16px</td>
              <td style={tableCellStyle}>400</td>
              <td style={tableCellStyle}>Main Content</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Caption</td>
              <td style={tableCellStyle}>12px</td>
              <td style={tableCellStyle}>300</td>
              <td style={tableCellStyle}>Supplementary Information</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Button Text</td>
              <td style={tableCellStyle}>16px</td>
              <td style={tableCellStyle}>500</td>
              <td style={tableCellStyle}>Interactive Elements</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Link Text</td>
              <td style={tableCellStyle}>16px</td>
              <td style={tableCellStyle}>400</td>
              <td style={tableCellStyle}>Clickable Links</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Headings Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Headings</h2>
        <H1>H1: Primary Page Title</H1>
        <H2>H2: Section Header</H2>
      </section>

      {/* Body Text Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Body Text</h2>
        <BodyText>
          This is an example of body text using Roboto Regular (400). It is used for main content and should be easily
          readable. Ensure that the text has sufficient line height and contrast against the background.
        </BodyText>
      </section>

      {/* Captions Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Captions</h2>
        <Caption>
          This is a caption using Roboto Light (300). It is used for supplementary information, such as image captions
          or footnotes.
        </Caption>
      </section>

      {/* Buttons Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Buttons</h2>
        <button style={buttonStyle}>Primary Button</button>
        <button style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>Secondary Button</button>
      </section>

      {/* Links Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Links</h2>
        <BodyText>
          Visit our <a href="#!" style={{ color: '#1a73e8', textDecoration: 'none' }}>documentation</a> to learn more.
        </BodyText>
      </section>

      {/* Code Snippets Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Code Snippets</h2>
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '4px',
            fontSize: '14px',
            overflowX: 'auto',
          }}
        >
          <code>{`<H1>Heading 1</H1>
<H2>Heading 2</H2>
<BodyText>This is body text.</BodyText>
<Caption>This is a caption.</Caption>`}</code>
        </pre>
      </section>
    </div>
  );
};

/**
 * Default Typography Story
 */
export const Default = Template.bind({});
Default.storyName = 'Default Typography';
Default.parameters = {
  docs: {
    description: {
      story: 'Displays all the typographic styles used in the application, including headings, body text, captions, buttons, and links. This serves as a reference for designers and developers to maintain consistency across the app.',
    },
  },
};
