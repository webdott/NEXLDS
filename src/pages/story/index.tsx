import { FC, useEffect, useState } from 'react';
//@ts-ignore
import { Link } from 'react-tiger-transition';
import ButtonInverse from '../../assets/svgs/ButtonInverse';
import ArrowDown from '../../assets/svgs/ArrowDown';
import { Footer, FormQuestion } from '../../components';

import './story.styles.scss';
import ROUTES from '../../routes';

const Intro: FC = () => {
	const [scene, setScene] = useState<number>(0);

	const scrollListener = () => {
		const container = document.querySelector('.story__content');
		const formQuestionArr = document.querySelectorAll(`.form__question`);
		const introTextArr = document.querySelectorAll(`.intro__text`);
		introTextArr.forEach((introText) => {
			if (
				//@ts-ignore
				introText!.offsetTop > container!.scrollTop - 10 &&
				//@ts-ignore
				introText!.offsetTop < container!.scrollTop + 10
			) {
				introText!.className = 'intro__text active';
			} else {
				introText!.className = 'intro__text';
			}
		});

		formQuestionArr.forEach((formQuestion, idx) => {
			if (
				//@ts-ignore
				formQuestion!.offsetTop > container!.scrollTop - 10 &&
				//@ts-ignore
				formQuestion!.offsetTop < container!.scrollTop + 10
			) {
				setScene(idx + 1);
				formQuestion.className = 'form__question active';
			} else {
				formQuestion.className = 'form__question';
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

				<p className='intro__text active'>
					In an ancient land of history, magic, and love (Ile Ife — you get
					it?), the destiny of a great story rests on the shoulders of a young
					person. You are that young person, and this is the beginning of your
					story.{' '}
				</p>

				<p className='intro__text'>
					In a land of myth and a time of magic, the destiny of a great story
					rests on your shoulders. It's your turn to take your destiny in your
					own hands and star in your own movie.
				</p>

				<FormQuestion
					question={`Input your character's name`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`When was your character born?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Your character's gender?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Your character is a native of what land?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`When did your character choose to develop their leadership potentials? `}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`What rank is your character?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Is this your first movie?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`What name does your character go by on the great inter webs?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Does your character have any allergies?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`How do you want your movie to look like? `}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Does your character mind staying in a room with characters of the opposite sex?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Emergency contact of your character `}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Relationship of your character with the person above named?`}
					inputProps={{
						type: 'text',
					}}
				/>
				<FormQuestion
					question={`Does your character have anything else to tell us? `}
					inputProps={{
						type: 'text',
					}}
				/>

				<p className='intro__text'>
					The lights are on. The stage is set. The script is written. The camera
					is ready to roll. Your ticket has now been set to your mail, all
					that's left for you is to confirm it.
				</p>

				<p className='intro__text'>
					You've created your own story, but your journey has just begun. Check
					your email, young adventurer, and you'll find a ticket to your movie.
					Confirm your ticket with your LOD, and be prepared to star in your own
					blockbuster.
				</p>

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
