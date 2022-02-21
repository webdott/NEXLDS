import { FC } from 'react';
import { RiLoader4Fill } from 'react-icons/ri';

import './loader.styles.scss';

const Loader: FC = () => {
	return (
		<div className='loader__main'>
			<RiLoader4Fill />
		</div>
	);
};

export default Loader;
