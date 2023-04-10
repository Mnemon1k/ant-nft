import React, { useState, useMemo, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import images from '../assets';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { AppContext } from 'context/AppContext';

const CreateNFT = () => {
	const { uploadToIPFS, appCurrency, createNFT } = useContext(AppContext);

	const [fileUrl, setFileUrl] = useState(null);
	const [formInput, setFormInput] = useState({ name: '', description: '', price: '' });
	const { theme = 'light' } = useTheme();

	const onDrop = useCallback(async (acceptedFile) => {
		const link = await uploadToIPFS(acceptedFile[0]);

		setFileUrl(link);
	}, []);

	const createNFThandler = async () => {
		const { status, transaction } = await createNFT(formInput, fileUrl);

		if (status === 'ok') {
			setFormInput({ name: '', description: '', price: '' });
			setFileUrl(null);
			alert(`NFT created! Tx: ${transaction?.transactionHash}`);
		} else {
			alert(`Error while creating NFT! ${transaction?.message}`);
		}
	};

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
		onDrop,
		accept: 'image/*',
		maxSize: 5000000,
	});

	const fileStyle = useMemo(
		() =>
			`flex sm:flex-col flex-center flex-row text-center dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 items-center px-5 py-14 md:py-10 sm:py-6 rounded-sm border-dashed ${
				isDragActive && 'border-file-active'
			} ${isDragAccept && 'border-file-accept'} ${isDragReject && 'border-file-reject'}`,
		[isDragActive, isDragAccept, isDragReject],
	);

	return (
		<div className="flex justify-center sm:px-4 p-12">
			<form className="lg:w-3/5 w-2/5 md:w-full">
				<h1>Create new NFT</h1>
				<div className="mt-16 md:mt-8">
					<h2 className="mb-4">Upload File</h2>
					<div>
						<div {...getRootProps()} className={fileStyle}>
							<input {...getInputProps()} />
							{!fileUrl && (
								<div>
									<p className="mb-6 font-semibold text-xl">JPG, PNG, GIF, SVG, WEBM Max 100mb.</p>
									<div className="my-12 w-full flex justify-center sm:hidden">
										<Image
											src={images.upload}
											width={70}
											height={70}
											objectFit="contain"
											className={theme === 'light' ? 'filter invert' : ''}
										/>
									</div>
									<p className="text-nft-gray-2 text-sm">Drag and Drop File</p>
									<p className="text-nft-gray-2 text-sm">or Browse media on your device</p>
								</div>
							)}

							{fileUrl && (
								<div className="w-2/3">
									<img src={fileUrl} />
								</div>
							)}
						</div>
					</div>
				</div>
				<Input
					type="input"
					label="Name"
					placeholder="NFT Name"
					className="w-full py-3"
					value={formInput.name}
					onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
				/>
				<Textarea
					label="Description"
					placeholder="NFT Description"
					className="w-full py-3"
					value={formInput.description}
					onChange={(e) => setFormInput({ ...formInput, description: e.target.value })}
				/>
				<Input
					type="number"
					label={`Price (${appCurrency})`}
					placeholder="NFT Price"
					className="w-full py-3"
					value={formInput.price}
					onChange={(e) => setFormInput({ ...formInput, price: e.target.value })}
				/>
				<div className="mt-10 w-full flex justify-center">
					<Button onClick={createNFThandler} size="lg" className="rounded-xl">
						Create NFT
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateNFT;
