import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';

const NFTCard = ({ nft }) => {
	// const { nftCurrency } = useContext(NFTContext);

	return (
		<div>
			<Link href={{ pathname: '/nft-details', query: nft }}>
				<div className="p-4 cursor-pointer shadow-md hover:shadow-lg transition-all dark:bg-nft-black-3 bg-white rounded-2xl ">
					<div className="relative w-full h-60 sm:h-52 rounded-2xl overflow-hidden">
						<Image src={nft.image || images[`nft${nft.i}`]} layout="fill" objectFit="cover" />
					</div>
					<div className="mt-4 flex flex-col">
						<p className="font-semibold text-lg md:text-sm">{nft.name}</p>
						<div className="flex-between mt-1 flex-row xs:flex-col xs:items-start xs:mt-3">
							<p className="font-semibold text-md md:text-xs">
								{nft.price} <span className="font-normal">ETH</span>{' '}
							</p>
							{/* <p className="font-semibold text-md md:text-xs">{nft.owner}</p> */}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default NFTCard;
