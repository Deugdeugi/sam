import { useState } from 'react';

import Button from '@enact/sandstone/Button';
import { Panel, Panels, Header } from '@enact/sandstone/Panels';
import Icon from '@enact/sandstone/Icon';
import { Tab, TabLayout } from '@enact/sandstone/TabLayout';
import SwitchItem from '@enact/sandstone/SwitchItem';
import Item from '@enact/sandstone/Item';
import Skinnable from '@enact/sandstone/Skinnable';
import BodyText from '@enact/sandstone/BodyText';
import Scroller from '@enact/sandstone/Scroller';

const MainPanel = (props) => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Panels index={tabIndex}>
			<Panel {...props} >
				<Header title="Hello world!" noCloseButton />
				<TabLayout
					collapsed={false}
				>
					<Tab title="Tab One">
						<Button
							iconPosition="before"
							minWidth
							onClick={() => {
								setTabIndex(1);
							}}
							onTap={() => {
								setTabIndex(1);
							}}
							size="large"
						>
							click me
						</Button>
					</Tab>
					<Tab title="Tab Two">
						<Item>Goodbye</Item>
					</Tab>
				</TabLayout>
			</Panel>
			<Panel
				onBack={() => {
					setTabIndex(tabIndex - 1);
				}}
			>
				<Header
					title="Panel with Items"
				>
					<Button
						icon="arrowlargeright"
						iconFlip="auto"
						onClick={() => {
							setTabIndex(tabIndex + 1);
						}}
						size="small"
						slot="slotAfter"
					/>
				</Header>
				<BodyText>
					Example text inside an Panel Body
				</BodyText>
				<Item>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Item>
				<Item>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Item>
				<Item>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Item>
			</Panel>
			<Panel
				onBack={() => {
					setTabIndex(tabIndex - 1);
				}}
			>
				<Header title="Panel with Scroller" />
				<Scroller>
					<div
						style={{
							height: '41.75rem',
							width: '83.375rem'
						}}
					>
						<BodyText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							<br />
							Aenean id blandit nunc. Donec lacinia nisi vitae mi dictum, eget pulvinar nunc tincidunt. Integer vehicula tempus rutrum. Sed efficitur neque in arcu dignissim cursus.
						</BodyText>
						<div
							style={{
								marginTop: '33.375rem'
							}}
						>
							<BodyText>
								Mauris blandit sollicitudin mattis. Fusce commodo arcu vitae risus consectetur sollicitudin. Aliquam eget posuere orci. Cras pellentesque lobortis sapien non lacinia.
							</BodyText>
						</div>
						<div
							style={{
								marginTop: '33.375rem'
							}}
						>
							<BodyText>
								Mauris blandit sollicitudin mattis. Fusce commodo arcu vitae risus consectetur sollicitudin. Aliquam eget posuere orci. Cras pellentesque lobortis sapien non lacinia.
							</BodyText>
						</div>
					</div>
				</Scroller>
			</Panel>
		</Panels>
	);
}

export default MainPanel;
