import UserCard from '@/components/UserCard';
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import Page from '@/components/Page';

import { generateId } from 'utils/generateId';
import images from '../assets';

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
		</Page>
	);
};

export default Home;
