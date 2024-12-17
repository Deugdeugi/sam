import Button from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';
import Icon from '@enact/sandstone/Icon';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Hello world!" noCloseButton />
			<Button>Click me</Button>
			<Icon size="small">
				plus
			</Icon>
		</Panel>
	)
});

export default MainPanel;
