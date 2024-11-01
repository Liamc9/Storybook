import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light', // Can be 'light' or 'dark'
    brandTitle: 'My App Name', // Your custom app name
    brandUrl: 'https://your-app-url.com', // Link when the logo is clicked
    brandImage: 'https://your-logo-url.com/logo.png', // URL to your logo
    brandTarget: '_self', // Open the link in the same tab
  }),
});
