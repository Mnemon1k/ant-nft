import { create as ipfsHttpClient } from 'ipfs-http-client';
import formidable from 'formidable';
import fs from 'fs';

const client2 = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const projectId = process.env.INFURA_PROJECT_ID;
const projectSecret = process.env.INFURA_API;
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsHttpClient({
	host: 'ipfs.infura.io',
	port: 5001,
	protocol: 'https',
	path: 'api/v0',
	headers: {
		authorization: auth,
	},
});

export default async function handler(req, res) {
	const { method, body } = req;

	console.log(body);

	if (method !== 'POST') {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
		return;
	}

	const link = await addNFTData(body);

	return res.status(200).json({ link });
}

async function addNFTData(data) {
	try {
		data = JSON.stringify(data);
		const { path } = await client.add(data);

		console.log('Nft data updated', path);

		return `https://ant.infura-ipfs.io/ipfs/${path}`;
	} catch (error) {
		console.log(('Error uploading to IPFS', error));
	}
}
