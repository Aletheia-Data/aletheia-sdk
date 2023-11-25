const commonjs = require('@rollup/plugin-commonjs');
const pkg = require('./package.json');

module.exports = {
    input: './AletheiaSDK.js',
    output: {
        file: 'dist',
        sourcemap: true,
        file: pkg.module,
        inlineDynamicImports: true,
        format: 'cjs'
    },
    plugins: [commonjs()],
};