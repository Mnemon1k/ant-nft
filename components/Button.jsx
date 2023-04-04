const Button = ({ children, outlined, size = 'md', className = '', ...attributes }) => {
	let classNameTemp = `border-2 border-nft-barbi text-sm font-poppins font-semibold text-white rounded-xl ${className}`;

	if (outlined) {
		classNameTemp += ' bg-transparent text-nft-barbi ';
	} else {
		classNameTemp += ' bg-nft-gradient ';
	}

	if (size === 'sm') {
		classNameTemp += ' py-2 px-5 text-sm';
	} else {
		classNameTemp += ' py-2 px-5 sm:text-xs sm:px-3 minlg:px-8 minlg:text-lg ';
	}

	return (
		<button type="button" className={classNameTemp} {...attributes}>
			{children}
		</button>
	);
};

export default Button;
