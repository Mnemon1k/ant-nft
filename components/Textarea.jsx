const Textarea = ({ placeholder = '', title = '', className = '', label }) => {
	return (
		<div>
			{label && <label className="mt-10 mb-4 md:mt-5 md:mb-2">{label}</label>}
			<textarea
				rows={5}
				title={title}
				placeholder={placeholder}
				className={`px-4 rounded-lg outline-none
						font-normal text-sm
						border dark:border-nft-black-1 border-nft-gray-1
						dark:bg-nft-black-2 bg-white 
						dark:text-white text-nft-black-1 ${className}`}
			/>
		</div>
	);
};

export default Textarea;
