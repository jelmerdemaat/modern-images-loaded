const buble = require('@rollup/plugin-buble');
const { terser } = require('rollup-plugin-terser');

module.exports = [
	{
		input: 'src/index.js',
		output: {
			format: 'cjs',
			name: 'modernImagesLoaded',
			file: 'dist/modern-images-loaded.cjs.js'
		}
	},
	{
		input: 'src/index.js',
		output: {
			format: 'umd',
			name: 'modernImagesLoaded',
			file: 'dist/modern-images-loaded.umd.js'
		},
		plugins: [buble()]
	},
	{
		input: 'src/index.js',
		output: {
			format: 'umd',
			name: 'modernImagesLoaded',
			file: 'dist/modern-images-loaded.umd.min.js'
		},
		plugins: [buble(), terser()]
	}
];
