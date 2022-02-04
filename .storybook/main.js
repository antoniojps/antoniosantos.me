module.exports = {
  stories: ["../src/**/(*.|)stories.@(js|jsx|ts|tsx)", "../src/**/*.stories.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
