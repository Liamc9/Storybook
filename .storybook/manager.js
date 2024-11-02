import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light', // Can be 'light' or 'dark'
    brandTitle: 'CookBook', // Your custom app name
    brandUrl: 'https://your-app-url.com', // Link when the logo is clicked
    brandImage: 'https://firebasestorage.googleapis.com/v0/b/lettz-cd03c.appspot.com/o/Untitled%20(1).png?alt=media&token=299ae189-c143-4d0e-9603-fa7f6ec6c6a0', // URL to your logo
    brandTarget: '_self', // Open the link in the same tab
  }),
});
