const hre = require('hardhat');

async function main() {
	const Marketplace = await hre.ethers.getContractFactory('Marketplace');
	const market = await Marketplace.deploy();

	await market.deployed();

	console.log('Marketplace deployed to:', market.address);
}

// Run and handle errors
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
