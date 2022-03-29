/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * This file contains the configuration for Apollo client.
 */

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs');

config.transformer.minifierConfig = {
  keep_classnames: true, // Preserve class names
  keep_fnames: true, // Preserve function names
  mangle: {
    keep_classnames: true, // Preserve class names
    keep_fnames: true, // Preserve function names
  },
};

module.exports = config;
