const { override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(addDecoratorsLegacy(),config => {
  // 修改 publicPath 和输出路径
  config.output.publicPath = './'
  return config
});