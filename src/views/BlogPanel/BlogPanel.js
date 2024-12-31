import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import ImageItem from '@enact/sandstone/ImageItem'
import Scroller from '@enact/sandstone/Scroller';
import BodyText from '@enact/sandstone/BodyText';
import css from './BlogPanel.module.less';
import Button from '@enact/sandstone/Button';
import DetailPopup from '../DetailPopup/DetailPopup';

const BlogPanel = (props) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [detail, setDetail] = useState({});
    const [detailOpen, setDetailOpen] = useState(false);
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

    const RenderTechStack = (techStack) => {
        const Component = techStack.map((d, index) => {
            return (
                <Button key={index} size='small'
                    onClick={
                        () => {
                            setDetail(
                                {
                                    subject: d.tech,
                                    detail: d.detail,
                                }
                            );
                            setDetailOpen(true);
                        }
                    }
                >{d.tech}</Button>
            )
        })
        return Component;
    }

    const RenderDetails = (details) => {
        const Component = details.map((d, index) => {
            return (
                <BodyText key={index} className={css.detail}>● {d}</BodyText>
            )
        })
        return Component;
    }

    const RenderPost = () => {
        return (
            <TabLayout
                index={tabIndex}
            >
                {post.value.map((p, index) => (
                    <Tab title={p.itemName} key={index} onTabClick={handleTabClick}>
                        <Panel>
                            <Scroller
                                focusableScrollbar
                            >
                                <div>
                                    <ImageItem
                                        label={p.itemLabel}
                                        orientation="vertical"
                                        src={p.src}
                                        style={{
                                            height: '12.25rem',
                                            width: '16rem'
                                        }}
                                    >
                                        {p.itemName}
                                    </ImageItem>
                                    <div style={{height: "1rem"}} />

                                    <BodyText className={css.subject}>1. 소개</BodyText>
                                    <BodyText className={css.detail}>{p.intro}</BodyText>

                                    <div style={{height: "1.5rem"}} />

                                    <BodyText className={css.subject}>2. 기술 스택</BodyText>
                                    {RenderTechStack(p.techData)}

                                    <div style={{height: "2.5rem"}} />

                                    <BodyText className={css.subject}>3. 기능</BodyText>
                                    {RenderDetails(p.details)}

                                    <div style={{height: "1.5rem"}} />
                                    <DetailPopup
                                        open={detailOpen}
                                        onClose={() => {
                                            setDetail({});
                                            setDetailOpen(false);
                                        }}
                                        {...detail}
                                    />
                                </div>
                            </Scroller>
                        </Panel>
                    </Tab>
                ))}
            </TabLayout>
        );
    };

    return (
        <Panel {...props}>
            <Header title={post.value[tabIndex].itemName} subtitle={post.name} noCloseButton />
            {RenderPost()}
        </Panel>
    );
};

export default BlogPanel;