import { useContext, useEffect, useState } from 'react';

import Link from 'next/link';

import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import Menu from './Menu';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const ButtonGroup = () => {
	const hasConnected = true;

	return hasConnected ? (
		<div className="">
			<ButtonLink className={'mr-3'} href="/create">
				Create NFT
			</ButtonLink>
			<Button outlined>Disconnect</Button>
		</div>
	) : (
		<Button>Connect</Button>
	);
};

const Header = () => {
	return (
		<nav className="flex-between w-full fixed top-0 left-0 z-10 sm:py-2 py-4 sm:px-2 px-8 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
			<div className="flex flex-row justify-start">
				<Link href={'/'}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<div className="flex menu">
				<Menu />
			</div>
			<div className="flex flex-initial flex-row justify-end md:ml-0 ml-4">
				<div className="md:mr-6 mr-10">
					<ButtonGroup />
				</div>
				<ThemeToggle />
			</div>
		</nav>
	);
};

export default Header;
