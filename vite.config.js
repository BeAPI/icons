import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig( {
	build: {
		lib: {
			entry: resolve( __dirname, 'src/index.js' ),
			name: '@beapi/icons',
			fileName: 'index',
		},
	},
	plugins: [ react( {
		include: 'src/**/*.js',
		babel: {
			babelrc: true,
		},
	} ) ],
} );
