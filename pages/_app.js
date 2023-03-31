import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import '/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<div className="dark:bg-nft-dark bg-white min-h-screen dark:text-white text-nft-black-1">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
			<Script src="https://kit.fontawesome.com/c8ac02dad4.js" crossorigin="anonymous" />
		</ThemeProvider>
	);
}
