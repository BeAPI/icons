import React from 'react';
import ReactDOM from 'react-dom/client';
import { accordion, alignWide, anchor, anchorList, bubbleQuestion, bubbles, item, keyFigure, navigation, plus, postList, postListAlt, shape, shapes, tabs, title } from './index';
import IconItem from './icon-item';
import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.StrictMode>
		<div className="grid grid-cols-6 container mx-auto gap-6">
			<IconItem name="Accordion" icon={ accordion } size={ 64 } />
			<IconItem name="Align wide" icon={ alignWide } size={ 64 } />
			<IconItem name="Anchor" icon={ anchor } size={ 64 } />
			<IconItem name="Anchor list" icon={ anchorList } size={ 64 } />
			<IconItem name="Bubble Question" icon={ bubbleQuestion } size={ 64 } />
			<IconItem name="Bubbles" icon={ bubbles } size={ 64 } />
			<IconItem name="Item" icon={ item } size={ 64 } />
			<IconItem name="Key figure" icon={ keyFigure } size={ 64 } />
			<IconItem name="Navigation" icon={ navigation } size={ 64 } />
			<IconItem name="Plus" icon={ plus } size={ 64 } />
			<IconItem name="Post list" icon={ postList } size={ 64 } />
			<IconItem name="Post list alt" icon={ postListAlt } size={ 64 } />
			<IconItem name="Shape" icon={ shape } size={ 64 } />
			<IconItem name="Shapes" icon={ shapes } size={ 64 } />
			<IconItem name="Tabs" icon={ tabs } size={ 64 } />
			<IconItem name="Title" icon={ title } size={ 64 } />
		</div>
	</React.StrictMode>
);
