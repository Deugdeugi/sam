import { useState } from 'react';
import { Panels } from '@enact/sandstone/Panels';
import panelMap from '../constants/panelMap';

import { useSelector, useDispatch } from 'react-redux'
import Button from '@enact/sandstone/Button';
import { push, pop, reset } from '../store/path';

const MainPanel = (props) => {
	const path = useSelector((state) => state.path.value)
    const dispatch = useDispatch()

	const renderChildren = () => {
		const children = path.map(p => {
			const Component = panelMap[p];
			return <Component key={p} />;
		});

		return children;
	}

	return (
		<Panels 
			index={path.length - 1} 
			onBack={
				() => {
					dispatch(pop());
				}
			}
		>
			{renderChildren()}
		</Panels>
	);
}

export default MainPanel;
