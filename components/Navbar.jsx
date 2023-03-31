import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';

const Navbar = () => {
	const { theme, setTheme } = useTheme();

	const onThemeChange = () => setTheme(theme === 'light' ? 'dark' : 'light');

	return (
		<nav className="flexBetween w-full fixed z-10 py-4 px-6 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
			<div className="flex flex-1 flex-row justify-start">
				<Link href={'/'}>
					<div className="flexCenter cursor-pointer">
						<div className="w-9">
							<Image src={images.logo1} />
						</div>
						<p className="font-semibold text-lg ml-2 select-none md:hidden">antNFT</p>
					</div>
				</Link>
			</div>
			<div className="flex flex-initial flex-row justify-end">
				<div className="flex items-center mr-2">
					<input type="checkbox" className="checkbox" id="checkbox" onClick={onThemeChange} />
					<label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
						<i className="fas fa-sun"></i>
						<i className="fas fa-moon"></i>
						<div className="absolute ball rounded-full bg-white w-3 h-3"></div>
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
