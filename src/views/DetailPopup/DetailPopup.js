import { Header } from '@enact/sandstone/Panels';
import { Tab } from '@enact/sandstone/TabLayout';
import BodyText from '@enact/sandstone/BodyText';
import { TabPanel, TabPanels, PopupTabLayout } from '@enact/sandstone/PopupTabLayout';
import Scroller from '@enact/sandstone/Scroller';

const DetailPopup = (props) => {
	return (
        <PopupTabLayout
            open={props.open}
            noAnimation
        >
            <Tab title={props.subject ? props.subject : 'Tab'}>
                <TabPanels
                    noCloseButton={false}
                    onClose={() => props.onClose()}
                >
                    <TabPanel>
                        <Header title={props.subject} type="compact"/>
                        <Scroller>
                                <BodyText>{props.detail}</BodyText>
                        </Scroller>
                    </TabPanel>
                </TabPanels>
            </Tab>
        </PopupTabLayout>
	);
}

export default DetailPopup;
