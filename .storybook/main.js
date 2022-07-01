module.exports = {
  "stories": [
    "../packages/web-components/**/*.stories.mdx",
    "../packages/web-components/**/*.stories.@(js|ts)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/web-components",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}