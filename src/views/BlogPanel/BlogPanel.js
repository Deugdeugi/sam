import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import ImageItem from '@enact/sandstone/ImageItem'
import Scroller from '@enact/sandstone/Scroller';

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

    const handleTabClick = useCallback((data) => {
        setTabIndex(data.selected);
    }, []);

    const RenderPost = () => {
        return (
            <TabLayout
                index={tabIndex}
            >
                {post.value.map((p, index) => (
                    <Tab title={p.itemName} key={index} onTabClick={handleTabClick}>
                        <Panel>
                            <Scroller
                                focusableScrollbar={true}
                            >
                                <ImageItem
                                    label="ImageItem label"
                                    orientation="vertical"
                                    src={{
                                        fhd: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 300 300\' width=\'300\' height=\'300\'%3E%3Crect width=\'300\' height=\'300\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E300 X 300%3C/text%3E%3C/svg%3E',
                                        hd: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E200 X 200%3C/text%3E%3C/svg%3E',
                                        uhd: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 600\' width=\'600\' height=\'600\'%3E%3Crect width=\'600\' height=\'600\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E600 X 600%3C/text%3E%3C/svg%3E'
                                    }}
                                    style={{
                                        height: '12.25rem',
                                        position: 'absolute',
                                        width: '16rem'
                                    }}
                                >
                                    {p.data['1']}
                                </ImageItem>
                            </Scroller>
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