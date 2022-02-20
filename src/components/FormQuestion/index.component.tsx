import { Dispatch, FC, SetStateAction } from 'react';

import './formquestion.styles.scss';

interface FormQuestionProps {
	question: string;
	inputProps: {
		type: string;
		[x: string]: any;
	};
}

const FormQuestion: FC<FormQuestionProps> = ({
	question,
	inputProps,
}) => {
	return (
		<div className={`form__question`}>
			<p className='question'>{question}</p>
			<input {...inputProps} />
		</div>
	);
};

export default FormQuestion;
