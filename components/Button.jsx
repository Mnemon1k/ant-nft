const Button = ({ children, outlined, className = '', ...attributes }) => {
	let classNameTemp = `border-2 border-nft-barbi py-2 px-5 sm:px-3 sm:text-xs text-sm font-poppins font-semibold text-white minlg:px-8  minlg:text-lg rounded-xl ${className}`;

	if (outlined) {
		classNameTemp += 'bg-transparent text-nft-barbi';
	} else {
		classNameTemp += 'bg-nft-gradient';
	}

	return (
		<button type="button" className={classNameTemp} {...attributes}>
			{children}
		</button>
	);
};

export default Button;
