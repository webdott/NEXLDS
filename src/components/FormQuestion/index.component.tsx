import { Dispatch, FC, SetStateAction } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import 'react-dropdown/style.css';
import './formquestion.styles.scss';

interface FormQuestionProps {
	question: string;
	inputProps: {
		type: string;
		[x: string]: any;
	};
}

const FormQuestion: FC<FormQuestionProps> = ({ question, inputProps }) => {
	return (
		<div className={`form__question`}>
			<p className='question'>{question}</p>
			{inputProps.type === 'dropdown' ? (
				<Dropdown
					options={inputProps.options}
					value={inputProps.options[0]}
					className={'custom__dropdown'}
					controlClassName='custom__dropdown__control'
					arrowClosed={<FaCaretDown />}
					arrowOpen={<FaCaretUp />}
					// onChange={(option: Option) =>
					// 	onChange ? onChange(option.value) : null
					// }
				/>
			) : (
				<input {...inputProps} />
			)}
		</div>
	);
};

export default FormQuestion;
