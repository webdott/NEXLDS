import { FC } from 'react';

import Logo from '../../assets/svgs/Logo';
import './footer.styles.scss';

interface FooterProps {
	light?: boolean;
}

const Footer: FC<FooterProps> = ({ light }) => {
	return (
		<footer id='footer'>
			<div className={`footer__content ${light ? 'light' : ''}`}>
				<Logo />
				<p>Built by B2C</p>
			</div>
		</footer>
	);
};

export default Footer;
