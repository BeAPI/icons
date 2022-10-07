import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon, shapes } from './index';
import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.StrictMode>
		<Icon icon={ shapes } />
	</React.StrictMode>
);
