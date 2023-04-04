import SocialList from './SocialList';
import Logo from '../Header/Logo';
import Button from '../Button';
import Input from '../Input';

import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="flex-center flex-col border-t dark:border-nft-black-1 border-nft-gray-1">
			<div className="w-full flex-center flex-row md:flex-col sm:px-4 px-16  sm:py-8 py-14">
				<div className="md:block flex w-full minmd:w-4/5 ">
					<div className="flex-start flex-2 flex-col">
						<div>
							<Link href={'/'}>
								<a>
									<Logo />
								</a>
							</Link>
						</div>
						<p className="font-semibold text-base mt-6">Get latest updates</p>
						<div className="flex-between md:w-full min-lg:w-557 w-357 mt-2">
							<Input className="w-full h-full" type="email" placeholder="Your email" />
							<div className="ml-3">
								<Button size="sm">Send</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-between-center flex-wrap ml-10 md:ml-0 md:mt-8">
						<div className="flex-1 justify-start items-start">
							<h3 className="font-semibold text-lg mb-8">antNFT</h3>
							<ul>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Explore
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										About us
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										How it works
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Contact us
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex-1 justify-start items-start">
							<h3 className="font-semibold text-lg mb-8">Support</h3>
							<ul>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Support
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Help center
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Terms of Service
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Legal
									</Link>
								</li>
								<li>
									<Link href={'/'} className="text-base font-normal my-3 ">
										Privacy policy
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-center w-full py-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
				<div className="flex-between flex-row w-full minmd:w-4/5 sm:flex-col">
					<p className="font-semibold">antNFT, Inc. All Rights Reserved.</p>
					<SocialList />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
