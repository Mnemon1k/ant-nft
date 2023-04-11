import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'context/AppContext';
import Loader from '@/components/Loader';
import NFTCard from '@/components/NftCard';
import Page from '@/components/Page';

const listedNft = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { fetchListedNFT } = useContext(AppContext);

	useEffect(async () => {
		const nfts = await fetchListedNFT();

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
		return (
			<div className="flex-center sm:p-4 p-28">
				<h1>No NFT listed for sale</h1>
			</div>
		);
	}

	return (
		<Page>
			<section className="py-9">
				<h1>NFT Listed for sale</h1>
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
			</section>
		</Page>
	);
};

export default listedNft;
