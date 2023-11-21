/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-create-react-app',
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    postcss: false,
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
