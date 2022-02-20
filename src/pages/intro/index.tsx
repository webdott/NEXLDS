//@ts-ignore
import { Link } from 'react-tiger-transition';

import ButtonSVG from '../../assets/svgs/ButtonSVG';
import QuillIcon from '../../assets/svgs/QuillIcon';
import ROUTES from '../../routes';
import './intro.styles.scss';

const Intro = () => {
	return (
		<div id='intro'>
			<div className='quill'>
				<QuillIcon />
			</div>

			<Link
				to={ROUTES.STORY}
				className='begin__button'
				transition='custom-glide-top'
			>
				<p>Begin your story</p>
				<ButtonSVG />
			</Link>
		</div>
	);
};

export default Intro;
