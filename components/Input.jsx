const Input = ({ type, placeholder, className = '' }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`px-4 py-2 rounded-lg outline-none
						font-normal text-sm
						border dark:border-nft-black-1 border-nft-gray-1
						dark:bg-nft-black-2 bg-white 
						dark:text-white text-nft-black-1 ${className}`}
		/>
	);
};

export default Input;
