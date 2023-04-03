import images from '../../assets';
import Image from 'next/image';

const Logo = () => {
	return (
		<div className="xs:flex-col flex-center cursor-pointer">
			<div className="w-9">
				<Image src={images.logo1} />
			</div>
			<p className="font-semibold text-lg xs:ml-0 ml-2 xs:-mt-2 select-none">antNFT</p>
		</div>
	);
};

export default Logo;
