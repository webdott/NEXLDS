import { FC } from 'react';

import CheckoutTemplate from '../../assets/svgs/CheckoutTemplate';
import { Footer } from '../../components';
import './checkout.styles.scss';

const Checkout: FC = () => {
	return (
		<div id='checkout'>
			<div className='checkout__card__container'>
				<div className='checkout__card'>
                    <div className="checkout__card__text">
                        <p>NEXLDS IFE 2022</p>
                        <p className='delegate'>Curry cook</p>
                        <p>Seated booked</p>
                        <p>Check your mail</p>
                    </div>
					<CheckoutTemplate />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Checkout;
