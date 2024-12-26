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
import css from './MainPanel.module.less';
import {VirtualList, VirtualGridList} from '@enact/sandstone/VirtualList';
import ImageItem from '@enact/sandstone/ImageItem';
import ri from '@enact/ui/resolution';
import IconItem from '@enact/sandstone/IconItem';
import KeyGuide from '@enact/sandstone/KeyGuide';

import MyInfoPanel from './MyInfoPanel/MyInfoPanel';
import {ToolTip, TooltipDecorator} from '@enact/sandstone/TooltipDecorator';

const ToolTipButton = TooltipDecorator(Button);

const MainPanel = (props) => {
	const [tabIndex, setTabIndex] = useState(0);
	const [pageIndex, setPageIndex] = useState(0);

	const renderItem = ({index, ...rest}) => {
		return (
			<ImageItem
				index={index}
				label="ImageItem label"
				orientation="vertical"
				src={'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 300 300\' width=\'300\' height=\'300\'%3E%3Crect width=\'300\' height=\'300\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E300 X 300%3C/text%3E%3C/svg%3E'}
				onFocus={
					() => {
						setTabIndex(index % 2);
					}
				}
				{...rest}
				>
				ImageItem Caption
			</ImageItem>
		);
	}

	const renderSubItem = ({index, ...rest}) => {
		return (
			( tabIndex == 0 ) ?
			<ImageItem
				index={index}
				label="ImageItem label"
				orientation="vertical"
				src={'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E200 X 200%3C/text%3E%3C/svg%3E'}
				{...rest}
				>
				ImageItem Caption
			</ImageItem>
			: 
			<ImageItem
			index={index}
				label="ImageItem label"
				orientation="vertical"
				src={'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' width=\'200\' height=\'200\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E200 X 200%3C/text%3E%3C/svg%3E'}
				{...rest}
			>
				ImageItem Caption
			</ImageItem>
		);
	}

	return (
		<Panels 
			index={pageIndex} 
			onBack={
				() => {
					setPageIndex(pageIndex - 1);
				}
			}
		>
			<Panel {...props} >
				<Header title="Hello world!" noCloseButton >
					<slotAfter>
						<ToolTipButton
							backgroundOpacity='transparent'
							style={{
								minWidth: 0,
								lineHeight: 0,
								padding: '0 0.5rem'
							}}
							onClick={() => {
								setPageIndex(pageIndex + 1);
							}}
							tooltipPosition="below center"
							tooltipText="Who am I?"
						>
							
							<Icon size="small">
								info
							</Icon>	
						</ToolTipButton>
					</slotAfter>
				</Header>
				<div
					style={{
						height: "50%"
					}}
				>
					<VirtualGridList
						direction="horizontal"
						dataSize={30}
						itemRenderer={renderItem}
						itemSize={{minWidth: 300, minHeight: 240}}
						horizontalScrollbar='hidden'
					/>
				</div>
				<div style={{height: "2%"}}></div>
				<div
					style={{
						height: "40%",
						padding: "20px",
						backgroundColor: '#4C4C4C'
					}}
				>
					<VirtualGridList
						direction="horizontal"
						dataSize={10}
						itemRenderer={renderSubItem}
						itemSize={{minWidth: 150, minHeight: 150}}
						horizontalScrollbar='hidden'
					/>
				</div>
			</Panel>
			<MyInfoPanel />
		</Panels>
	);
}

export default MainPanel;
