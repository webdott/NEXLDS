import { FC } from 'react';

import Scroll from '../../assets/svgs/Scroll';
import Scribble from '../../assets/svgs/Scribble';
import CheckoutPattern3 from '../../assets/svgs/CheckoutPattern3';
import { Footer } from '../../components';
import './checkout.styles.scss';

const Checkout: FC = () => {
	return (
		<div id='checkout'>
			<CheckoutPattern3 />
			<div className='checkout__card__container'>
				<div className='checkout__card'>
					<div className='checkout__card__text'>
						<p>
							You've created your own story, but your journey has just begun.
						</p>
					</div>
					<Scroll />
				</div>
				<p className='follow__up__text'>
					Check your <span>email</span>, young adventurer, and you'll find a
					ticket to your movie.{' '}
				</p>
				<Scribble />
			</div>
			<Footer />
		</div>
	);
};

export default Checkout;
