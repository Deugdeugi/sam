import { useCallback } from 'react';
import { Panels } from '@enact/sandstone/Panels';
import panelMap from '../constants/panelMap';

import { useSelector, useDispatch } from 'react-redux'
import { pop } from '../store/path';

const MainPanel = () => {
	const path = useSelector((state) => state.path.value)
    const dispatch = useDispatch()

	const pathPop = useCallback(() => {
		dispatch(pop());
	}, [dispatch]);

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
			onBack={() => pathPop()}
		>
			{renderChildren()}
		</Panels>
	);
}

export default MainPanel;
