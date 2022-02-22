import { FC, useEffect, useRef, useState } from 'react';
import useAxios from 'axios-hooks';
//@ts-ignore
import { Link } from 'react-tiger-transition';
import ButtonInverse from '../../assets/svgs/ButtonInverse';
import ArrowDown from '../../assets/svgs/ArrowDown';
import { Footer, FormQuestion, Loader } from '../../components';
import {
	genderOptions,
	LCOptions,
	booleanOptions,
	booleanInverseOptions,
} from '../../data/options';

import './story.styles.scss';
import ROUTES from '../../routes';

const Intro: FC = () => {
	const linkRef = useRef<HTMLLinkElement>(null);
	const [name, setName] = useState<string>('');
	const [dob, setDob] = useState<string>('');
	const [gender, setGender] = useState<string>('male');
	const [nativity, setNativity] = useState<string>('abuja');
	const [leadershipDevTime, setLeadershipDevTime] = useState<string>('');
	const [rank, setRank] = useState<string>('');
	const [isFirstMovie, setIsFirstMovie] = useState<boolean>(true);
	const [email, setEmail] = useState<string>('');
	const [hasAllergies, setHasAllergies] = useState<boolean>(false);
	const [allergies, setAllergies] = useState<string>('');
	const [treatments, setTreatments] = useState<string>('');
	const [moviePlot, setMoviePlot] = useState<string>('');
	const [sameSexRoomie, setSameSexRoomie] = useState<boolean>(true);
	const [emergencyPhone, setEmergencyPhone] = useState<string>('');
	const [emergencyRelation, setEmergencyRelation] = useState<string>('');
	const [aob, setAob] = useState<string>('');
	const [feedbackText, setFeedbackText] = useState<string>('');
	const [scene, setScene] = useState<string>('Act 0, Scene 1');

	const scrollListener = () => {
		const container = document.querySelector('.story__content');
		const formQuestionArr = document.querySelectorAll(`.form__question`);
		const introText = document.querySelector(`.intro__text`);

		if (
			//@ts-ignore
			introText!.offsetTop > container!.scrollTop - 10 &&
			//@ts-ignore
			introText!.offsetTop < container!.scrollTop + 10
		) {
			setScene('Act 0, Scene 1');
			introText!.className = 'intro__text active';
		} else {
			introText!.className = 'intro__text';
		}

		formQuestionArr.forEach((formQuestion, idx) => {
			if (
				//@ts-ignore
				formQuestion!.offsetTop > container!.scrollTop - 10 &&
				//@ts-ignore
				formQuestion!.offsetTop < container!.scrollTop + 10
			) {
				//@ts-ignore
				setScene(formQuestion.dataset.attribute);
				//@ts-ignore
				formQuestion.className = 'form__question active';
			} else {
				formQuestion.className = 'form__question';
			}
		});
	};

	const [{ loading }, createMovie] = useAxios(
		{
			url: '/createStory',
			method: 'post',
		},
		{ manual: true }
	);

	const submitForm = async (e: any) => {
		if (loading) return;
		e.preventDefault();
		const nameArr = name.split(' ');
		const firstname = nameArr[0];
		const lastname = nameArr[nameArr.length - 1];
		const movieData = {
			name,
			dob,
			gender,
			nativity,
			leadershipDevTime,
			rank,
			isFirstMovie,
			email,
			allergies: hasAllergies ? allergies : 'nil',
			treatments: hasAllergies ? treatments : 'nil',
			moviePlot,
			sameSexRoomie,
			emergencyPhone,
			emergencyRelation,
			aob,
		};

		try {
			await createMovie({
				data: movieData,
			});
			linkRef.current!.click();
		} catch (error: any) {
			setFeedbackText(error.response?.data?.errors[0]?.msg);
			setTimeout(() => {
				setFeedbackText('');
			}, 3000);
		}
	};

	useEffect(() => {
		const story = document.querySelector('#story');

		//play background sound on enter of the page
		const audio = story!.querySelector('audio');
		audio!.volume = 0.3;
		setTimeout(() => {
			audio!.play();
		}, 1000);

		const container = document.querySelector('.story__content');
		//@ts-ignore
		container!.focus();
		story!.addEventListener('click', (e) => {
			//@ts-ignore
			if (e.target.id === 'story') container!.focus();
		});

		container!.addEventListener('scroll', scrollListener);

		return () => {
			container!.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<div id='story'>
			<audio src='https://res.cloudinary.com/webdot/video/upload/v1645495718/NEXLDS-Shii/NEXLDS-audio_wdhdml.mp3'></audio>
			<div className='story__content' tabIndex={0}>
				<button className='form__progress'>
					<div className='dot' />
					<div className='dot' />
					<div className='dot' />
					<div className='dot' />
					<p>{scene}</p>
					<ButtonInverse />
				</button>

				<p className='intro__text active'>
					In an ancient land of history, magic, and love (Ile Ife — you get
					it?), the destiny of a great story rests on the shoulders of a young
					person. You are that young person, and this is the beginning of your
					story.{' '}
				</p>

				<form method='post' onSubmit={submitForm}>
					<FormQuestion
						question={`Input your character's name`}
						inputProps={{
							type: 'text',
							required: true,
							onChange: ({ target }: any) => setName(target!.value),
						}}
						placeholder='Input Firstname and Lastname'
					/>

					<FormQuestion
						question={`When was your character born?`}
						inputProps={{
							type: 'date',
							required: true,
							onChange: ({ target }: any) => setDob(target!.value),
							placeholder: 'dd/mm/yyyy',
						}}
						placeholder='Enter D.O.B'
					/>
					<FormQuestion
						question={`Your character's gender?`}
						inputProps={{
							type: 'dropdown',
							options: genderOptions,
						}}
						placeholder='Select Gender'
						onChange={setGender}
					/>
					<FormQuestion
						question={`Your character is a native of what land?`}
						inputProps={{
							type: 'dropdown',
							options: LCOptions,
						}}
						placeholder='Select LC'
						onChange={setNativity}
					/>
					<FormQuestion
						question={`When did your character choose to develop their leadership potentials? `}
						inputProps={{
							type: 'text',
							required: true,
							onChange: ({ target }: any) =>
								setLeadershipDevTime(target!.value),
						}}
						placeholder='What year did you join AIESEC?'
					/>
					<FormQuestion
						question={`What rank is your character?`}
						inputProps={{
							type: 'text',
							required: true,
							onChange: ({ target }: any) => setRank(target!.value),
						}}
						placeholder='Enter Role'
					/>
					<FormQuestion
						question={`Is this your first movie?`}
						inputProps={{
							type: 'dropdown',
							options: booleanOptions,
						}}
						placeholder='Is this your first conference?'
						onChange={setIsFirstMovie}
					/>
					<FormQuestion
						question={`How do you want to be contacted on the great inter webs?`}
						inputProps={{
							type: 'email',
							required: true,
							onChange: ({ target }: any) => setEmail(target!.value),
						}}
						placeholder='Enter AIESEC Email'
					/>
					<FormQuestion
						question={`Does your character have any allergies?`}
						inputProps={{
							type: 'dropdown',
							options: booleanInverseOptions,
						}}
						placeholder='Select Yes/No'
						onChange={setHasAllergies}
					/>
					<FormQuestion
						question={`If yes, what allergy / allergies?`}
						inputProps={{
							type: 'textarea',
							required: hasAllergies,
							onChange: ({ target }: any) => setAllergies(target!.value),
						}}
						placeholder='Enter allergy'
					/>
					<FormQuestion
						question={`What is your character's treatment?`}
						inputProps={{
							type: 'textarea',
							required: hasAllergies,
							onChange: ({ target }: any) => setTreatments(target!.value),
						}}
						placeholder='Enter medication'
					/>
					<FormQuestion
						question={`How do you want your movie to look like? `}
						inputProps={{
							type: 'textarea',
							required: true,
							onChange: ({ target }: any) => setMoviePlot(target!.value),
						}}
						placeholder='Expectations?'
					/>
					<FormQuestion
						question={`Does your character mind staying in a room with characters of the opposite sex?`}
						inputProps={{
							type: 'dropdown',
							options: booleanOptions,
						}}
						placeholder='Select Yes/No'
						onChange={setSameSexRoomie}
					/>
					<FormQuestion
						question={`Emergency contact of your character `}
						inputProps={{
							type: 'tel',
							required: true,
							onChange: ({ target }: any) =>
								setEmergencyPhone(target!.value.replace(/\s+/g, '')),
						}}
						placeholder='Enter Emergency Number'
					/>
					<FormQuestion
						question={`Relationship of your character with the above named person?`}
						inputProps={{
							type: 'text',
							required: true,
							onChange: ({ target }: any) =>
								setEmergencyRelation(target!.value),
						}}
						placeholder='Relationship with above named person?'
					/>
					<FormQuestion
						question={`Does your character have anything else to tell us? `}
						inputProps={{
							type: 'textarea',
							required: true,
							onChange: ({ target }: any) => setAob(target!.value),
						}}
						placeholder='Anything Else?'
					/>

					<div className='end'>
						<div className='arrow'>
							<ArrowDown />
						</div>
						<button className='button'>
							{loading ? <Loader /> : <p>End Scene</p>}
							<ButtonInverse />
						</button>
						<p className='feedback'>{feedbackText}</p>
					</div>
				</form>
				<Link
					className='link'
					to={ROUTES.CHECKOUT}
					transition='custom-glide-left'
					ref={linkRef}
				></Link>
				<Footer light />
			</div>
		</div>
	);
};

export default Intro;
