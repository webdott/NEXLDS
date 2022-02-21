import * as React from 'react';

const Scribble: React.FC = (props) => (
	<svg
		width={125}
		height={36}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M123.617 1.498c-19.173.086-107.11 7.138-119.622 8.917-4.844.688-2.85 3.085.081 3.807 56.64-.255 63.422-.576 69.647.515 1.796.314 9.36.924 3.741 3.742-4.207 2.11-33.284 6.748-23.273 8.228 8.495 1.256 10.254 1.154 7.475 7.693'
			stroke='#F2F2F2'
			strokeWidth={2}
			strokeLinecap='round'
		/>
	</svg>
);

export default Scribble;
