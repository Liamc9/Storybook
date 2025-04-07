"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5384,5975],{"./src/stories/projects/lettz/components/LettzFilterDrawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),liamc9npm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Projects/Lettz/Components/LettzFilterDrawer",component:liamc9npm__WEBPACK_IMPORTED_MODULE_1__.tDO,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `LettzFilterDrawer` component provides a flexible interface for filtering and sorting property listings. Users can filter properties by county, type, rent range, and availability months, as well as sort the listings using predefined options.\n\n### Features\n- **Dynamic Filters**: Supports multiple filtering options, including dropdowns, checkboxes, and range sliders.\n- **Sort Options**: Allows sorting the results with a dropdown menu.\n- **Persistent State**: Reflects and updates local filter state based on props.\n- **Clear and Apply Buttons**: Provides buttons to reset or apply the selected filters and sorting.\n\n### Usage\n\n```jsx\nimport React, { useState } from "react";\nimport LettzFilterDrawer from "../components/LettzFilterDrawer";\n\nconst ExampleComponent = () => {\n  const [filters, setFilters] = useState({});\n  const [sortOption, setSortOption] = useState("");\n\n  const handleFilterChange = (newFilters) => {\n    console.log("Filters applied:", newFilters);\n    setFilters(newFilters);\n  };\n\n  const handleSortChange = (newSortOption) => {\n    console.log("Sort option selected:", newSortOption);\n    setSortOption(newSortOption);\n  };\n\n  const handleCloseDrawer = () => {\n    console.log("Drawer closed");\n  };\n\n  return (\n    <LettzFilterDrawer\n      selectedFilters={filters}\n      onFilterChange={handleFilterChange}\n      closeDrawer={handleCloseDrawer}\n      sortOptions={[\n        { value: "price", label: "Price" },\n        { value: "date", label: "Date Added" },\n      ]}\n      selectedSortOption={sortOption}\n      onSortChange={handleSortChange}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **selectedFilters**: Object containing the current filter selections.\n- **onFilterChange**: Callback function triggered when filters are applied.\n- **closeDrawer**: Callback function triggered when the drawer is closed.\n- **sortOptions**: Array of sorting options, each with value and label properties.\n- **selectedSortOption**: String representing the current sorting option.\n- **onSortChange**: Callback function triggered when the sorting option changes.\n        '}}},argTypes:{selectedFilters:{control:"object"},onFilterChange:{action:"filters applied"},closeDrawer:{action:"drawer closed"},sortOptions:{control:"array"},selectedSortOption:{control:"text"},onSortChange:{action:"sort option changed"}}},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(liamc9npm__WEBPACK_IMPORTED_MODULE_1__.tDO,args)).bind({});Default.args={selectedFilters:{county:"Dublin",startMonth:"jan",endMonth:"dec",rentRange:[500,2500],type:["house","apartment"]},onFilterChange:filters=>console.log("Filters applied:",filters),closeDrawer:()=>console.log("Drawer closed"),sortOptions:[{value:"price",label:"Price"},{value:"date",label:"Date Added"}],selectedSortOption:"price",onSortChange:sortOption=>console.log("Sort option changed:",sortOption)};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <LettzFilterDrawer {...args} />",...Default.parameters?.docs?.source}}}}}]);