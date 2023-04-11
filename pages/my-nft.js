import { useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { AppContext } from 'context/AppContext';
import NFTCard from '@/components/NftCard';
import Loader from '@/components/Loader';
import Banner from '@/components/Banner';
import Page from '@/components/Page';
import Image from 'next/image';
import images from '../assets';

import { shortenAddress } from 'utils/shortAdress';

const myNft = () => {
	const [items, setItems] = useState([]);
	const { theme = 'light' } = useTheme();
	const [isLoading, setIsLoading] = useState(true);
	const { fetchMyNFT, currentAccount } = useContext(AppContext);
	let itemsGrid = undefined;

	useEffect(async () => {
		const nfts = await fetchMyNFT();

		setItems(nfts);
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div className="flex-start min-h-screen">
				<Loader />
			</div>
		);
	}

	if (!isLoading && items.length === 0) {
		itemsGrid = (
			<div className="flex-center sm:p-4 p-28">
				<h1>No NFT owned</h1>
			</div>
		);
	}

	if (items.length) {
		itemsGrid = (
			<div
				className="mt-5 grid 
						xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-5
						gap-x-6 gap-y-6
					">
				{items.map((nft) => (
					<div className="group">
						<NFTCard key={nft.tokenId} nft={nft} />
					</div>
				))}
			</div>
		);
	}

	return (
		<Page>
			<Banner baseStyle="text-center">Your NFTs</Banner>
			<div className="flex-center flex-col sm:-mt-20 -mt-24 z-0">
				<div className="flex-center w-40 h-40 sm:w-36 sm:h-36 rounded-full p-1 bg-nft-black-2">
					<Image src={images.creator1} className="rounded-full" />
				</div>
				<p className="font-semibold text-2xl mt-6">{shortenAddress(currentAccount)}</p>
			</div>
			<section className="py-9">{itemsGrid}</section>
		</Page>
	);
};

export default myNft;
