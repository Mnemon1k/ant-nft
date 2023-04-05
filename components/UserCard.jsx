import { AppContext } from 'context/AppContext';
import { useContext } from 'react';
import Image from 'next/image';
import images from '../assets';

const UserCard = ({ rank, image, title, subtitle }) => {
	const { appCurrency } = useContext(AppContext);

	return (
		<div className="md:min-w-190 min-w-240 dark:bg-nft-black-3 bg-white border dark: dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4">
			<div className="flex-center w-10 h-10 md:w-8 md:h-8 bg-nft-barbi text-white rounded-full">
				<p className="font-semibold text-base minlg:text-lg">{rank}</p>
			</div>
			<div className="my-2 flex justify-center">
				<div className="relative w-28 h-28 md:w-20 md:h-20">
					<Image src={image} layout="fill" objectFit="cover" className="rounded-full" />
					<div className="absolute w-7 h-7 md:w-4 md:h-4 bottom-2 right-2">
						<Image src={images.tick} layout="fill" objectFit="contain" />
					</div>
				</div>
			</div>
			<div className="mt-5 md:mt-3 text-center flex-center flex-col">
				<p className="font-bold text-base">{title}</p>
				<p className=" text-base mt-1">
					{subtitle.toFixed(2)} {appCurrency}
				</p>
			</div>
		</div>
	);
};

export default UserCard;
