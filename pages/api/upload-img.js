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

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req, res) {
	const { method } = req;
	const form = new formidable.IncomingForm();

	if (method !== 'POST') {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
		return;
	}

	form.parse(req, async function (err, fields, files) {
		fs.readFile(files.file.filepath, async function (err, data) {
			if (err) throw err;

			const link = await uploadImg(data);

			return res.status(200).json({ link });
		});
	});
}

async function uploadImg(file) {
	try {
		const { path } = await client.add(Buffer.from(file));

		console.log('New image added', path);

		return `https://ant.infura-ipfs.io/ipfs/${path}`;
	} catch (error) {
		console.log(('Error uploading to IPFS', error));
	}
}
