const Button = ({ children, outlined, size = 'md', className = '', ...attributes }) => {
	let classNameTemp = `transition-all border-2 border-nft-barbi text-sm font-poppins font-semibold text-white rounded-xl ${className}`;

	if (outlined) {
		classNameTemp += ' bg-transparent text-nft-barbi hover:bg-nft-barbi hover:text-white';
	} else {
		classNameTemp += ' bg-nft-gradient';
	}

	if (size === 'sm') {
		classNameTemp += ' py-2 px-5 text-sm';
	} else if (size === 'lg') {
		classNameTemp += ' py-3 px-8 text-base';
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
