import { Icon } from './index';

export default function IconItem( { name, icon, size } ) {
	return <div className="text-center">
		<Icon className="mx-auto" icon={ icon } size={ size } />
		<span className="italic">{ name }</span>
	</div>;
}
