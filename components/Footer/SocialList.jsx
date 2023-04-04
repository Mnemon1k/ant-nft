const SocialList = () => {
	return (
		<ul className="flex">
			<li className="m-3">
				<a className="text-lg hover:text-nft-barbi" href="#">
					<i className=" fa-brands fa-instagram"></i>
				</a>
			</li>

			<li className="m-3">
				<a className="text-lg hover:text-nft-barbi" href="#">
					<i className=" fa-brands fa-facebook"></i>
				</a>
			</li>

			<li className="m-3">
				<a className="text-lg hover:text-nft-barbi" href="#">
					<i className=" fa-brands fa-discord"></i>
				</a>
			</li>

			<li className="m-3">
				<a className="text-lg hover:text-nft-barbi" href="#">
					<i className=" fa-brands fa-twitter"></i>
				</a>
			</li>
		</ul>
	);
};

export default SocialList;
