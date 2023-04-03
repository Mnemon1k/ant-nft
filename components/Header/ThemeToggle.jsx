import { useTheme } from 'next-themes';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const onThemeChange = () => setTheme(theme === 'light' ? 'dark' : 'light');
	return (
		<div className="flex items-center mr-2">
			<input type="checkbox" className="checkbox" id="checkbox" onClick={onThemeChange} />
			<label htmlFor="checkbox" className="flex-between w-8 h-4 bg-black rounded-2xl p-1 relative label">
				<i className="fas fa-sun"></i>
				<i className="fas fa-moon"></i>
				<div className="absolute ball rounded-full bg-white w-3 h-3"></div>
			</label>
		</div>
	);
};

export default ThemeToggle;
