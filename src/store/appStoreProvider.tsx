'use client';

import { store } from './store';
import { Provider } from 'react-redux';

type Props = {
	children: React.ReactNode;
};

const AppStoreProvider = ({ children }: Props) => {
	return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;
