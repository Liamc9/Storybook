/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  
  staticDirs: ["..\\public"],
  webpackFinal: async (config) => {
    // Remove existing rules for JavaScript files if necessary
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes('jsx'))
    );

    // Add Babel loader for JavaScript and JSX files
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    });

    // Add support for SVG files if needed
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Ensure .js and .jsx extensions are resolved
    config.resolve.extensions.push('.js', '.jsx');

    // Remove React Refresh plugin if causing issues
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'ReactRefreshWebpackPlugin'
    );

    return config;
  },
};
export default config;
