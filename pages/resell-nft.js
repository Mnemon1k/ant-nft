import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { AppContext } from '../context/AppContext';
import Button from '@/components/Button';
import Input from '@/components/Input';

const ResellNFT = () => {
	const { resellNFT } = useContext(AppContext);
	const router = useRouter();
	const { tokenId, tokenURI } = router.query;
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');

	const fetchNFT = async () => {
		const { data } = await axios.get(tokenURI);

		setPrice(data.price);
		setImage(data.image);
	};

	useEffect(() => {
		if (tokenURI) fetchNFT();
	}, [tokenURI]);

	const resell = async () => {
		await resellNFT(price, tokenId);

		router.push('/');
	};

	return (
		<div className="flex flex-center sm:px-4 p-12">
			<div>
				<h1>Resell NFT</h1>

				<form>
					{image && <img src={image} className="rounded mt-4" width={350} />}

					<Input
						type="number"
						label="Price"
						className="w-full py-3"
						placeholder="NFT Price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<div className="mt-7 w-full flex justify-center">
						<Button onClick={resell}>List NFT</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResellNFT;
