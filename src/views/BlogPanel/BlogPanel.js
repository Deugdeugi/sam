import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

const BlogPanel = (props) => {
    const [isTabCollapse, setIsTabCollapse] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const path = useSelector((state) => state.path);
    const post = useSelector((state) => state.post);

    useEffect(() => {
        if (path.param[path.value.length - 1]?.index !== undefined) {
            setTabIndex(path.param[path.value.length - 1]?.index);
        }
    }, [path]);

    const tabCollapse = useCallback((clicked) => {
        if ( ( clicked === 'tab' && !isTabCollapse ) || ( clicked === 'panel' && isTabCollapse ) ) {
            // 아무것도 하지 않음
        } else {
            setIsTabCollapse(prev => !prev);
        }
    }, [isTabCollapse]);

    const handleTabClick = useCallback((data) => {
        setTabIndex(data.selected);
    }, []);

    const handlePanelClick = useCallback((e) => {
        e.stopPropagation();
        tabCollapse('panel');
    }, [tabCollapse]);

    const handleTabLayoutClick = useCallback(() => {
        tabCollapse('tab');
    }, [tabCollapse]);

    const RenderPost = () => {
        return (
            <TabLayout
                index={tabIndex}
                collapsed={isTabCollapse}
                onClick={handleTabLayoutClick}
            >
                {post.value.map((p, index) => (
                    <Tab title={p.itemName} key={index} onTabClick={handleTabClick}>
                        <Panel onClick={handlePanelClick}>
                            {p.data['1']}
                        </Panel>
                    </Tab>
                ))}
            </TabLayout>
        );
    };

    return (
        <Panel {...props}>
            <Header title={post.name} subtitle={post.label} noCloseButton />
            {RenderPost()}
        </Panel>
    );
};

export default BlogPanel;