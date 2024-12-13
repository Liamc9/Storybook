"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8137],{"./src/stories/branding/ColorPalette.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultPalette:()=>DefaultPalette,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ColorPalette_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const PaletteContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,PaletteSection=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,SectionTitle=styled_components_browser_esm.default.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: ${props=>props.neutralDark};
`,ColorsWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,ColorSwatch=styled_components_browser_esm.default.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: ${props=>props.color};
  border: 1px solid ${props=>props.neutralMedium};
`,ColorInfo=styled_components_browser_esm.default.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
`,ColorName=styled_components_browser_esm.default.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${props=>props.neutralDark};
`,ColorHex=styled_components_browser_esm.default.span`
  display: block;
  font-size: 0.9rem;
  color: ${props=>props.neutralDark};
`,Branding_ColorPalette=_ref=>{let{palette}=_ref;const{primary,lightPrimary,veryLightPrimary,darkPrimary,veryDarkPrimary,neutrals}=palette,renderColorSwatch=color=>react.createElement(ColorSwatch,{color:color.hex,neutralMedium:neutrals.mediumGray,key:color.name},react.createElement(ColorInfo,null,react.createElement(ColorName,null,color.name),react.createElement(ColorHex,null,color.hex)));return react.createElement(PaletteContainer,null,react.createElement(PaletteSection,null,react.createElement(SectionTitle,{neutralDark:neutrals.darkGray},"Primary Color and Shades"),react.createElement(ColorsWrapper,null,renderColorSwatch({name:"Primary - Warm Taupe",hex:primary}),renderColorSwatch({name:"Light Warm Taupe",hex:lightPrimary}),renderColorSwatch({name:"Very Light Warm Taupe",hex:veryLightPrimary}),renderColorSwatch({name:"Dark Warm Taupe",hex:darkPrimary}),renderColorSwatch({name:"Very Dark Warm Taupe",hex:veryDarkPrimary}))),react.createElement(PaletteSection,null,react.createElement(SectionTitle,{neutralDark:neutrals.darkGray},"Neutral Colors"),react.createElement(ColorsWrapper,null,Object.entries(neutrals).map((_ref2=>{let[key,hex]=_ref2;return renderColorSwatch({name:key,hex})})))))},Container=styled_components_browser_esm.default.div`
  padding: 2rem;
  background-color: ${props=>props.palette.neutrals.white};
`,ColorPalette_stories={title:"Branding/Color Palette",component:Branding_ColorPalette,tags:["autodocs"],parameters:{docs:{description:{component:"\n# Color Palette\n\n**ColorPalette** component displays the primary color and its shades, along with neutral colors used in our brand.\n\n## Usage\n\nUse this component to ensure consistency in your application's color scheme.\n\n### Example\n\n```jsx\n<ColorPalette palette={palette} />\n```\n        "}}},argTypes:{palette:{control:"object",description:"Defines the color palette including primary color, its shades, and neutral colors."}}},DefaultPalette=(args=>react.createElement(Container,{palette:args.palette},react.createElement(Branding_ColorPalette,{palette:args.palette}))).bind({});DefaultPalette.args={palette:{primary:"#B08B5B",lightPrimary:"#C19B6D",veryLightPrimary:"#D2AD80",darkPrimary:"#9A7D4E",veryDarkPrimary:"#846E41",neutrals:{white:"#FFFFFF",lightGray:"#F0F0F0",mediumGray:"#C0C0C0",darkGray:"#4F4F4F",black:"#000000"}}};const __namedExportsOrder=["DefaultPalette"];DefaultPalette.parameters={...DefaultPalette.parameters,docs:{...DefaultPalette.parameters?.docs,source:{originalSource:"args => <Container palette={args.palette}>\r\n    <ColorPalette palette={args.palette} />\r\n  </Container>",...DefaultPalette.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-branding-ColorPalette-stories.d2c889cc.iframe.bundle.js.map