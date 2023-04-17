import { useContext, useEffect, useState } from 'react';

import { AppContext } from 'context/AppContext';
import Loader from '@/components/Loader';
import Page from '@/components/Page';
import Image from 'next/image';
import { useRouter } from 'next/router';
import images from '../assets';
import { shortenAddress } from 'utils/shortAdress';
import Button from '@/components/Button';

const NFTDetails = () => {
	const [nft, setNft] = useState({
		image: '',
		tokenId: '',
		name: '',
		description: '',
		price: '',
		owner: '',
		seller: '',
	});
	const [isLoading, setIsLoading] = useState(true);

	const router = useRouter();
	const { currentAccount, appCurrency, buyNFT } = useContext(AppContext);

	const handleBuy = async () => {
		const res = await buyNFT(nft);

		if (res.status === 1) {
			alert('Success');
		}
		router.reload(window.location.pathname);
	};

	useEffect(() => {
		if (!router.isReady) return;
		setNft(router.query);
		setIsLoading(false);
	}, [router.isReady]);

	if (isLoading) {
		return (
			<div className="flex-start min-h-screen">
				<Loader />
			</div>
		);
	}

	return (
		<div className="relative flex justify-center md:flex-col">
			<div className="relative flex-1 flex-center sm:px-4 p-12 border-r md:border-r-0 md:border-b dark:border-nft-black-1 border-nft-gray-1">
				<div className="relative  xs:w-auto w-557 lg:w-auto sm:h-auto md:h-300 lg:h-96">
					<img src={nft.image} objectFit="cover" className="max-h-full rounded-xl shadow-lg" layout="fill" />
				</div>
			</div>
			<div className="lg:flex-2 flex-1 justify-start sm:px-4 p-12 sm:pb-4">
				<div className="flex flex-row md:flex-col">
					<h2 className="font-semibold lg:text-2xl text-3xl">{nft.name}</h2>
				</div>
				<div className="mt-10">
					<p className="lg:text-xs text-base font-normal">Author</p>
					<div className="flex flex-row items-center mt-3">
						<div className="relative lg:w-12 lg:h-12 w-20 h-20 mr-2">
							<Image src={images.creator1} objectFit="cover" className="rounded-full" />
						</div>
						<p className="lg:text-xs text-base font-semibold">{shortenAddress(nft.seller)}</p>
					</div>
				</div>
				<div className="mt-10 flex flex-col">
					<div className="w-full border-b border-nft-black-1 dark:border-nft-gray-1 flex-flex-row">
						<p className="mb-2 text-base font-medium">Details</p>
					</div>
					<div className="mt-3">
						<p className="text-base font-normal">{nft.description}</p>
					</div>
				</div>
				<div className="flex flex-row md:flex-col mt-10">
					{currentAccount === nft.seller.toLowerCase() ? (
						<p className="text-base font-normal border-gray p-2">You cannot buy your own NFT</p>
					) : currentAccount === nft.owner.toLowerCase() ? (
						<Button
							onClick={() => router.push(`/resell-nft?tokenId=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}>
							List on MarketPlace
						</Button>
					) : (
						<Button onClick={handleBuy}>{`Buy for ${nft.price} ${appCurrency}`}</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default NFTDetails;
