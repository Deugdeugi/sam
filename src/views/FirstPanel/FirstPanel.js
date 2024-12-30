import { useCallback, useEffect, useState } from 'react';
import { Panel, Header } from '@enact/sandstone/Panels';
import Icon from '@enact/sandstone/Icon';
import {VirtualGridList} from '@enact/sandstone/VirtualList';
import Button from '@enact/sandstone/Button';
import {TooltipDecorator} from '@enact/sandstone/TooltipDecorator';
import ImageItem from '@enact/sandstone/ImageItem';
import { useSelector, useDispatch } from 'react-redux'
import { push } from '../../store/path';
import { postSet } from '../../store/post';

import { add } from '../../store/themelist';
import themeList from '../../assets/builtin_theme.json';
import flutterLogo from '../../assets/flutter_logo.png';
import css from './FirstPanel.module.less';

const ToolTipButton = TooltipDecorator(Button);

const FirstPanel = (props) => {
    const [themeIndex, setThemeIndex] = useState(0);
    const themes = useSelector((state) => state.themeList.value);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(add(themeList));
    }, [dispatch]);

    const clickItem = useCallback((theme) => {
        dispatch(push({
            panel: 'BlogPanel',
            param: {}
        }));
        dispatch(postSet(theme));
    }, [dispatch]);

    const clickSubItem = useCallback((index, theme) => {
        dispatch(push({
            panel: 'BlogPanel',
            param: {
                index: index
            }
        }));
        dispatch(postSet(theme));
    }, [dispatch]);

    const handleThemeIndex = useCallback((index) => {
        setThemeIndex(index);
    }, [])

    const renderItem = ({index, ...rest}) => {
        const theme = themes[index];

        return (
            <ImageItem
                className={css.item}
                key={index}
                index={index}
                label={theme.label}
                orientation="vertical"
                src={theme.src}
                onClick={() => clickItem(theme)}
                onFocus={() => handleThemeIndex(index)}
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
                label={themes[themeIndex]?.info[index]?.itemLabel}
                orientation="vertical"
                src={themes[themeIndex]?.info[index]?.src}
                onClick={() => clickSubItem(index, themes[themeIndex])}
                {...rest}
                >
                {themes[themeIndex]?.info[index]?.itemName}
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
                            dispatch(push({
                                panel: 'MyInfoPanel',
                                param: {}
                            }));
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
            <div style={{height: "2%"}} />
            <div
                style={{
                    height: "40%",
                    padding: "20px",
                    backgroundColor: '#4C4C4C'
                }}
            >
                <VirtualGridList
                    direction="horizontal"
                    dataSize={themeList.themes[themeIndex].info.length}
                    itemRenderer={renderSubItem}
                    itemSize={{minWidth: 150, minHeight: 150}}
                    horizontalScrollbar='hidden'
                />
            </div>
        </Panel>
	);
}

export default FirstPanel;