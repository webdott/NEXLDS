import { FC, useEffect, useState } from 'react';
//@ts-ignore
import { Link } from 'react-tiger-transition';
import ButtonInverse from '../../assets/svgs/ButtonInverse';
import ArrowDown from '../../assets/svgs/ArrowDown';
import { Footer, FormQuestion } from '../../components';

import './story.styles.scss';
import ROUTES from '../../routes';

const Intro: FC = () => {
	const [scene, setScene] = useState<number>(1);

	const scrollListener = () => {
		const container = document.querySelector('.story__content');
		const formQuestionArr = document.querySelectorAll(`.form__question`);
		const introText = document.querySelector(`.intro__text`);
		//@ts-ignore
		if (introText?.offsetTop === container?.scrollTop) {
			setScene(1);
			return;
		}

		formQuestionArr.forEach((formQuestion, idx) => {
			//@ts-ignore
			if (formQuestion?.offsetTop === container?.scrollTop) {
				setScene(idx + 2);
				formQuestion.className = 'form__question active'
			} else {
				formQuestion.className = 'form__question'
			}
		});
	};

	useEffect(() => {
		const container = document.querySelector('.story__content');
		container!.addEventListener('scroll', scrollListener);

		return () => {
			container!.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<div id='story'>
			<div className='story__content'>
				<button className='form__progress'>
					<div className='dot' />
					<div className='dot' />
					<div className='dot' />
					<div className='dot' />
					<p>Act 0, Scene {scene}</p>
					<ButtonInverse />
				</button>

				<p className='intro__text'>Welcome to the day before day 0</p>

				<FormQuestion
					question='From a noble  Local committee in the city of'
					inputProps={{
						type: 'text',
					}}
					setScene={setScene}
				/>
				<FormQuestion
					question='From a noble  Local committee in the city of'
					inputProps={{
						type: 'text',
					}}
					setScene={setScene}
				/>
				<FormQuestion
					question='From a noble  Local committee in the city of'
					inputProps={{
						type: 'text',
					}}
					setScene={setScene}
				/>
				<FormQuestion
					question='From a noble  Local committee in the city of'
					inputProps={{
						type: 'text',
					}}
					setScene={setScene}
				/>

				<div className='end'>
					<div className='arrow'>
						<ArrowDown />
					</div>
					<Link
						to={ROUTES.CHECKOUT}
						className='button'
						transition='custom-glide-left'
					>
						<p>End Scene</p>
						<ButtonInverse />
					</Link>
				</div>
				<Footer light />
			</div>
		</div>
	);
};

export default Intro;
