const { defineConfig } = require('@vue/cli-service');
const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  transpileDependencies: true
});
