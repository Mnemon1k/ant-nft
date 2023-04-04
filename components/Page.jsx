const Page = ({ children }) => {
	return (
		<div className="flex justify-center sm:px-4 p-12">
			<div className="w-full minmd:w-4/5">{children}</div>
		</div>
	);
};

export default Page;
