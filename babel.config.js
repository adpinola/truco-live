module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['transform-class-properties', ['istanbul', {}, 'jest-ibul']],
};
