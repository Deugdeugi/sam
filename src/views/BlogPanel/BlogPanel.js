import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import ImageItem from '@enact/sandstone/ImageItem'
import Scroller from '@enact/sandstone/Scroller';

const BlogPanel = (props) => {
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

    console.log("post", post);

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
                                    label={p.itemLabel}
                                    orientation="vertical"
                                    src={p.src}
                                    style={{
                                        height: '12.25rem',
                                        position: 'absolute',
                                        width: '16rem'
                                    }}
                                >
                                    {p.itemName}
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