import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon, accordion, alignWide, anchor, anchorList, bubbleQuestion, bubbles, item, keyFigure, navigation, plus, postList, postListAlt, shape, shapes, tabs, title } from './index';
import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.StrictMode>
		<Icon icon={ accordion } size={ 64 } />
		<Icon icon={ alignWide } size={ 64 } />
		<Icon icon={ anchor } size={ 64 } />
		<Icon icon={ anchorList } size={ 64 } />
		<Icon icon={ bubbleQuestion } size={ 64 } />
		<Icon icon={ bubbles } size={ 64 } />
		<Icon icon={ item } size={ 64 } />
		<Icon icon={ keyFigure } size={ 64 } />
		<Icon icon={ navigation } size={ 64 } />
		<Icon icon={ plus } size={ 64 } />
		<Icon icon={ postList } size={ 64 } />
		<Icon icon={ postListAlt } size={ 64 } />
		<Icon icon={ shape } size={ 64 } />
		<Icon icon={ shapes } size={ 64 } />
		<Icon icon={ tabs } size={ 64 } />
		<Icon icon={ title } size={ 64 } />
	</React.StrictMode>
);
