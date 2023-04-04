export const generateId = (length) => {
	let res = '';

	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		res += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return res;
};
