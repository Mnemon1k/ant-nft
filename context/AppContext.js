import { createContext, useEffect, useState } from 'react';
import { MarketAddress, MarketAddressABI } from './constants';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState('');
	const appCurrency = 'ETH';

	const checkIfWalletIsConnected = async () => {
		if (!window.ethereum) {
			return alert('Please install MetaMask');
		}

		const accounts = await window.ethereum.request({ method: 'eth_accounts' });
		if (accounts.length) {
			setCurrentAccount(accounts[0]);
		} else {
			console.log('No accounts found');
		}
		console.log({ accounts });
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	const connectWallet = async () => {
		if (!window.ethereum) {
			return alert('Please install web3 wallet');
		}
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		setCurrentAccount(accounts[0]);
		window.location.reload();
	};

	const uploadToIPFS = async (file) => {
		try {
			let formData = new FormData();
			formData.append('file', file);

			const resp = await axios.post('api/upload-nft', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			return resp?.data?.link || '';
		} catch (error) {
			console.log(('Error uploading to IPFS', error));
		}
	};

	return (
		<AppContext.Provider value={{ appCurrency, connectWallet, currentAccount, uploadToIPFS }}>
			{children}
		</AppContext.Provider>
	);
};
