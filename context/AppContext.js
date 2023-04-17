import { createContext, useEffect, useState } from 'react';
import { MarketAddress, MarketAddressABI } from './constants';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { checkIfUrlValid } from 'utils/checkIfUrlValid';

export const AppContext = createContext();

const fetchContract = (signerOrProvider) =>
	new ethers.Contract(MarketAddress, MarketAddressABI, signerOrProvider);

const getConstact = async () => {
	const web3modal = new Web3Modal();
	const connection = await web3modal.connect();
	const provider = new ethers.providers.Web3Provider(connection);
	const signer = provider.getSigner();

	return fetchContract(signer);
};

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

			const resp = await axios.post('api/upload-img', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			return resp?.data?.link;
		} catch (error) {
			console.log(('Error uploading to IPFS', error));
		}
	};

	const nftTransaction = async (url, formInputPrice, isReselling, id) => {
		const contract = await getConstact();

		const price = ethers.utils.parseUnits(formInputPrice, 'ether');

		const listingPrice = await contract.getListingPrice();

		const transaction = !isReselling
			? await contract.createToken(url, price, { value: listingPrice.toString() })
			: await contract.resellToken(id, price, { value: listingPrice.toString() });

		return await transaction.wait();
	};

	const createNFT = async (data, imgUrl) => {
		const { name, description, price } = data;

		if (!name || !description || !price || !imgUrl) return;

		const requesData = { name, description, image: imgUrl };

		try {
			const resp = await axios.post('api/add-nft-data', requesData);
			const nftPath = resp?.data?.link;
			const transaction = await nftTransaction(nftPath, price);

			console.log(transaction);

			return { status: 'ok', transaction };
		} catch (error) {
			console.log(('Error while updating NFT data', error));
			return { status: 'error', transaction: error };
		}
	};

	const resellNFT = async (price, tokenId) => {
		try {
			const transaction = await nftTransaction('', price, true, tokenId);

			console.log(transaction);

			return { status: 'ok', transaction };
		} catch (error) {
			console.log(('Error while updating NFT data', error));
			return { status: 'error', transaction: error };
		}
	};

	const buyNFT = async (nft) => {
		const contract = await getConstact();
		const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
		const transaction = await contract.createMarketSale(nft.tokenId, { value: price });

		return await transaction.wait();
	};

	const fetchItems = async (data, contract) => {
		let items = await Promise.all(
			data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
				const tokenURI = await contract.tokenURI(tokenId);

				if (!checkIfUrlValid(tokenURI)) {
					return undefined;
				}

				try {
					const {
						data: { image, name, description },
					} = await axios.get(tokenURI);
					const price = ethers.utils.formatUnits(unformattedPrice.toString(), 'ether');

					return {
						price,
						tokenId: tokenId.toNumber(),
						seller,
						owner,
						image,
						name,
						description,
						tokenURI,
					};
				} catch (error) {
					console.log('Error while parsing nft #' + tokenId, error);
				}
			}),
		);

		return items.filter((item) => item !== undefined);
	};

	const fetchAllNFT = async () => {
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = fetchContract(provider);
		const data = await contract.fetchMarketItems();

		return await fetchItems(data, contract);
	};

	const fetchListedNFT = async () => {
		const contract = await getConstact();
		const data = await contract.fetchItemsListed();

		return await fetchItems(data, contract);
	};

	const fetchMyNFT = async () => {
		const contract = await getConstact();
		const data = await contract.fetchMyNFTs();

		return await fetchItems(data, contract);
	};

	return (
		<AppContext.Provider
			value={{
				appCurrency,
				connectWallet,
				currentAccount,
				uploadToIPFS,
				resellNFT,
				createNFT,
				fetchAllNFT,
				fetchMyNFT,
				fetchListedNFT,
				buyNFT,
			}}>
			{children}
		</AppContext.Provider>
	);
};
