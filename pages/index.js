import UserCard from '@/components/UserCard';
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import Page from '@/components/Page';

import { generateId } from 'utils/generateId';
import images from '../assets';
import NftCard from '@/components/NftCard';
import Button from '@/components/Button';

const Home = () => {
	return (
		<Page>
			<Banner baseStyle="text-left">Discover, collect and sell awesome NFT`s</Banner>
			<section className="py-9">
				<h1>Best creators</h1>
				<Carousel>
					{[4, 5, 6, 7, 8, 9, 10].map((i) => (
						<UserCard
							key={i}
							rank={i}
							image={images['creator' + i]}
							title={`0x${generateId(2)}...${generateId(4)}`}
							subtitle={10 - i * 0.5}
						/>
					))}
				</Carousel>
			</section>
			<section className="py-9">
				<h1>Hot bids</h1>
				<div
					className="mt-5 grid 
						xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-5
						gap-x-6 gap-y-6
					">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
						<div className="group">
							<NftCard
								key={`nft-${i}`}
								nft={{
									i,
									name: `antNft ${i}`,
									seller: `0x${generateId(2)}...${generateId(4)}`,
									owner: `0x${generateId(2)}...${generateId(4)}`,
									description: 'New NFT on sale',
									price: 10 - i * 0.5,
								}}
							/>
						</div>
					))}
				</div>
				<div className="mt-6 py-5 text-center">
					<Button className="min-w-190" size="lg" outlined>
						Load more
					</Button>
				</div>
			</section>
		</Page>
	);
};

export default Home;
