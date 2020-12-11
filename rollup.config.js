import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
// import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
// import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

import config from 'sapper/config/rollup.js';
import sveltePreprocess from 'svelte-preprocess';

import autoprefixer from 'autoprefixer';
// import path from 'path';

import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	(warning.code === 'THIS_IS_UNDEFINED') ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input().replace(/\.js$/, '.ts'),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				},
				preprocess: sveltePreprocess({
					postcss: {
						plugins: [autoprefixer]
					}
				}),
				emitCss: true
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({
				strict: false,
				sourceMap: dev
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: { server: config.server.input().server.replace(/\.js$/, ".ts") },
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				preprocess: sveltePreprocess()
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({
				strict: false,
				sourceMap: dev
			})
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input().replace(/\.js$/, '.ts'),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			typescript({
				strict: false,
				sourceMap: dev
			}),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
