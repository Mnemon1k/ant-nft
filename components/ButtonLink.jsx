import Link from 'next/link';
import Button from './Button';

const ButtonLink = ({ children, href, className, ...attributes }) => {
	return (
		<div className={`inline-block ${className}`}>
			<Link href={href}>
				<Button {...attributes}>
					<span className="text-white">{children}</span>
				</Button>
			</Link>
		</div>
	);
};

export default ButtonLink;
