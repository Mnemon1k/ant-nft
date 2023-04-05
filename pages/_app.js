import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Script from 'next/script';

import { AppProvider } from 'context/AppContext';
import { ThemeProvider } from 'next-themes';

import '/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<ThemeProvider attribute="class">
				<div className="dark:bg-nft-dark bg-white  dark:text-white text-nft-black-1 font-poppins">
					<Header />
					<Component {...pageProps} />
					<Footer />
				</div>
				<Script src="https://kit.fontawesome.com/c8ac02dad4.js" crossorigin="anonymous" />
			</ThemeProvider>
		</AppProvider>
	);
}
