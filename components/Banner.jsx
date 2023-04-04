const Banner = ({ children, baseStyle = '' }) => {
	return (
		<div
			className={`relative w-full flex items-center  z-0 overflow-hidden bg-nft-gradient
                justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4  xs:h-44 rounded-3xl ${baseStyle}`}>
			<h3 className="font-bold font-poppins text-white md:w-5/6 w-3/5 md:text-4xl sm:text-2xl xs:text-xl text-5xl leading-70">
				{children}
			</h3>
			<div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full bg-white-transparent -top-9 -left-16 -z-5"></div>
			<div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full bg-white-transparent -bottom-24 -right-14 -z-5"></div>
		</div>
	);
};

export default Banner;
