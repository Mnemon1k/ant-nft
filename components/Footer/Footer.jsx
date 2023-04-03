import images from '../../assets';
import SocialList from './SocialList';

const Footer = () => {
	return (
		<footer className="flex-center flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 pt-16">
			<div className="flex-center w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm-px-4 px-16">
				<div className="flex-between flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
					<p className="font-semibold">antNFT, Inc. All Rights Reserved.</p>
					<SocialList />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
