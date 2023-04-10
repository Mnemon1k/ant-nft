const Input = ({ type = 'text', placeholder = '', title = '', className = '', label, ...attrs }) => {
	return (
		<div>
			{label && <label className="mt-10 mb-4 md:mt-5 md:mb-2">{label}</label>}
			<input
				title={title}
				type={type}
				placeholder={placeholder}
				className={`px-4 rounded-lg outline-none
						font-normal text-sm
						border dark:border-nft-black-1 border-nft-gray-1
						dark:bg-nft-black-2 bg-white 
						dark:text-white text-nft-black-1 ${className}`}
				{...attrs}
			/>
		</div>
	);
};

export default Input;
