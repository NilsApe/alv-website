const config = require('gatsby-plugin-config').default;
let configuration;
switch (config.NODE_ENV) {
  case 'development':
  case 'test':
  case 'production':
  default:
    configuration = {
      SANITY_TOKEN: config.SANITY_TOKEN || process.env.SANITY_TOKEN,
      SANITY_PROJECT_ID: 'mnr37rl0',
      SANITY_DATASET: 'production',
      SANITY_TAG: 'default',
      YT_API: config.YT_API,
    };
    break;
}

module.exports = configuration;
