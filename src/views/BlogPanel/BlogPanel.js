import { Panel, Header } from '@enact/sandstone/Panels';
import Image from '@enact/sandstone/Image';
import {TabLayout, Tab} from '@enact/sandstone/TabLayout';
import Button from '@enact/sandstone/Button';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice';

const BlogPanel = (props) => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

	return (
        <Panel {...props} >
            <Header title="BlogPanel?" noCloseButton ></Header>
            <TabLayout>
                <Tab title="Tab One">
                    <Button onClick={() => dispatch(increment())}>
                        +
                    </Button>
                    <Button onClick={() => dispatch(decrement())}>
                        -
                    </Button>
                    {count}
                </Tab>
                <Tab title="Tab Two">
                    sdfsafsaf
                </Tab>
            </TabLayout>
        </Panel>
	);
}

export default BlogPanel;