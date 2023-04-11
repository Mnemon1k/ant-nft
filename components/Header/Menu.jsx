import Link from 'next/link';
import { useRouter } from 'next/router';

const items = [
	{ title: 'Explore NFTs', href: '/' },
	{ title: 'Listed NFTs', href: '/listed-nft' },
	{ title: 'My NFTs', href: '/my-nft' },
];

const Menu = () => {
	const { pathname } = useRouter();
	const isMobile = false;

	return (
		<div
			className="
				list-none flex-center flex-row 
				md:fixed md:w-screen md:left-0 md:bottom-0 md:border-t 
				dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1
			">
			<ul className={`lint-none w-full justify-around flex flex-row ${isMobile && 'flex-col h-full'}`}>
				{items.map(({ title, href }, index) => (
					<MenuItem key={index} title={title} href={href} active={pathname === href} />
				))}
			</ul>
		</div>
	);
};

const MenuItem = ({ title, href, active }) => {
	return (
		<li
			className={`flex flex-row 
                items-center 
                font-poppins 
                font-semibold 
                sm:text-sm text-base
				md:py-4
				mx-3
                ${!active && 'hover:text-nft-barbi'} 
                ${
									active
										? 'dark:text-white text-nft-barbi'
										: ' text-nft-gray-3 dark:text-nft-gray-2 dark:hover:text-nft-barbi'
								} 
			`}>
			<Link href={href}>{title}</Link>
		</li>
	);
};

export default Menu;
