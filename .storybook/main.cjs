module.exports = {
  "stories": [ "../packages/**/src/lib/**/*.stories.@(ts|tsx|svelte)" ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": require("../svelte.config.cjs").preprocess
  }
}