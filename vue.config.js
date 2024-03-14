const { defineConfig } = require('@vue/cli-service');
const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = defineConfig({
  transpileDependencies: true
});
