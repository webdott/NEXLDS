import * as React from 'react';

const ButtonSVG: React.FC = (props) => (
	<svg
		width={250}
		height={81}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m249.846 24.842-16 12.308h11.077l1.231 28.308-238.77 14.77-1.23-27.078 14.77-3.692H0v-32h13.539V.228h233.846l2.461 24.614Z'
			fill='#FFDFBF'
		/>
	</svg>
);

export default ButtonSVG;
