import * as React from 'react';

const CheckoutTemplate: React.FC = (props) => (
	<svg
		width={257}
		height={153}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M185.337 13.09c7.279 0 13.179-5.86 13.179-13.09H239c9.941 0 18 8.059 18 18v117c0 9.941-8.059 18-18 18h-40.485c0-7.23-5.9-13.091-13.179-13.091s-13.18 5.861-13.18 13.091H18c-9.941 0-18-8.059-18-18V18C0 8.059 8.059 0 18 0h154.157c0 7.23 5.901 13.09 13.18 13.09Z'
			fill='#C4C4C4'
		/>
	</svg>
);

export default CheckoutTemplate;
