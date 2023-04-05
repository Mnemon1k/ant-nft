import { createContext } from 'react';
import { MarketAddress, MarketAddressABI } from './constants';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const appCurrency = 'ETH';

	return <AppContext.Provider value={{ appCurrency }}>{children}</AppContext.Provider>;
};
