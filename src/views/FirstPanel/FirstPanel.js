import { useEffect, useState } from 'react';
import { Panel, Header } from '@enact/sandstone/Panels';
import Icon from '@enact/sandstone/Icon';
import {VirtualGridList} from '@enact/sandstone/VirtualList';
import Button from '@enact/sandstone/Button';
import {TooltipDecorator} from '@enact/sandstone/TooltipDecorator';
import ImageItem from '@enact/sandstone/ImageItem';
import { useSelector, useDispatch } from 'react-redux'
import { push, pop, reset } from '../../store/path';
import panelMap from '../../constants/panelMap';

import { add } from '../../store/themelist';
import themeList from '../../assets/builtin_theme.json';

const ToolTipButton = TooltipDecorator(Button);

const FirstPanel = (props) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [items, setItems] = useState([]);
    const themes = useSelector((state) => state.themeList.value);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(add(themeList));
    }, []);

    const renderItem = ({index, ...rest}) => {
        const theme = themes[index];

        return (
            <ImageItem
                key={index}
                index={index}
                label={theme.label}
                orientation="vertical"
                src={'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 300 300\' width=\'300\' height=\'300\'%3E%3Crect width=\'300\' height=\'300\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E300 X 300%3C/text%3E%3C/svg%3E'}
                onClick={
                    () => dispatch(push('BlogPanel'))
                }
                onFocus={
                    () => {
                        setTabIndex(index);
                    }
                }
                {...rest}
                >
                {theme.name}
            </ImageItem>
        )
    } 

	const renderSubItem = ({index, ...rest}) => {
        return (
            <ImageItem
                key={index}
                index={index}
                label={themes[tabIndex]?.info[index]?.itemLabel}
                orientation="vertical"
                src={'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E200 X 200%3C/text%3E%3C/svg%3E'}
                {...rest}
                >
                {themes[tabIndex]?.info[index]?.itemName}
            </ImageItem>
        )
	}

	return (
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
                            dispatch(push('MyInfoPanel'))
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
                    dataSize={themeList.themes.length}
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
                    dataSize={themeList.themes[tabIndex].info.length}
                    itemRenderer={renderSubItem}
                    itemSize={{minWidth: 150, minHeight: 150}}
                    horizontalScrollbar='hidden'
                />
            </div>
        </Panel>
	);
}

export default FirstPanel;