import { FC } from 'react';
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
	placeholder: string;
	onChange?: any;
}

const FormQuestion: FC<FormQuestionProps> = ({
	question,
	inputProps,
	placeholder,
	onChange,
}) => {
	return (
		<div className={`form__question`} data-attribute={placeholder}>
			<p className='question'>{question}</p>
			{inputProps.type === 'dropdown' ? (
				<Dropdown
					options={inputProps.options}
					value={inputProps.options[0]}
					className={'custom__dropdown'}
					controlClassName='custom__dropdown__control'
					arrowClosed={<FaCaretDown />}
					arrowOpen={<FaCaretUp />}
					onChange={(option: Option) =>
						onChange ? onChange(option.value) : null
					}
				/>
			) : inputProps.type === 'textarea' ? (
				<textarea
					onChange={inputProps.onChange}
					required={inputProps.required}
				/>
			) : (
				<input {...inputProps} />
			)}
		</div>
	);
};

export default FormQuestion;
