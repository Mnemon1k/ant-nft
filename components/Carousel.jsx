import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import images from '../assets';

const Buttons = ({ handleScroll }) => {
	const { theme = 'light' } = useTheme();

	return (
		<>
			<div
				onClick={() => {
					handleScroll('left');
				}}
				className="absolute w-12 h-12 md:w-8 md:h-8 top-45 cursor-pointer left-0">
				<Image
					src={images.left}
					layout="fill"
					objectFit="contain"
					className={theme === 'light' ? 'filter invert' : ''}
				/>
			</div>
			<div
				onClick={() => {
					handleScroll('right');
				}}
				className="absolute w-12 h-12 md:w-8 md:h-8 top-45 cursor-pointer right-0">
				<Image
					src={images.right}
					layout="fill"
					objectFit="contain"
					className={theme === 'light' ? 'filter invert' : ''}
				/>
			</div>
		</>
	);
};

const Carousel = ({ children }) => {
	const [hideButtons, setHideButtons] = useState(false);
	const parentRef = useRef(null);
	const scrollRef = useRef(null);

	const handleScroll = (direction) => {
		const { current } = scrollRef;
		const ascrollAmount = window.innerWidth > 1800 ? 270 : 210;

		if (direction === 'left') {
			current.scrollLeft -= ascrollAmount;
		} else {
			current.scrollLeft += ascrollAmount;
		}
	};
	const isScrollable = () => {
		const { current } = scrollRef;
		const { current: parent } = parentRef;

		if (current?.scrollWidth >= parent?.offsetWidth) {
			setHideButtons(false);
		} else {
			setHideButtons(true);
		}
	};

	useEffect(() => {
		isScrollable();
		window.addEventListener('resize', isScrollable);

		return () => {
			window.removeEventListener('resize', isScrollable);
		};
	});

	return (
		<div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
			<div className="flex flex-rwo w-max no-scrollbar overflow-x-scroll select-none" ref={scrollRef}>
				{children}
			</div>
			{!hideButtons && <Buttons handleScroll={handleScroll} />}
		</div>
	);
};

export default Carousel;
