import { BrowserRouter as Router } from 'react-router-dom';
//@ts-ignore
import { Navigation, Route, glide } from 'react-tiger-transition';

import ROUTES from './routes';
import { Checkout, Intro, Story } from './pages';
import 'react-tiger-transition/styles/main.min.css';
import './App.scss';

// inject glide styles
glide({
	name: 'custom-glide-top',
	direction: 'bottom',
	enter: {
		duration: 700,
		easing: 'easeInBottom',
		opacity: 0,
		zIndex: 1,
		angle: 90,
		delay: 100,
	},
	exit: {
		duration: 700,
		easing: 'easeInBottom',
		opacity: 0,
		zIndex: 2,
		angle: 90,
	},
});

glide({
	name: 'custom-glide-left',
	direction: 'left',
	enter: {
		duration: 700,
		easing: 'easeOutBottom',
		opacity: 0,
		zIndex: 1,
		angle: 90,
		delay: 100,
	},
	exit: {
		duration: 700,
		easing: 'easeOutBottom',
		opacity: 0,
		zIndex: 2,
		angle: 90,
	},
});

glide({
	name: 'custom-glide-right',
	direction: 'right',
	enter: {
		duration: 700,
		easing: 'easeInBottom',
		opacity: 0,
		zIndex: 1,
		angle: 90,
		delay: 100,
	},
	exit: {
		duration: 700,
		easing: 'easeInBottom',
		opacity: 0,
		zIndex: 2,
		angle: 90,
	},
});

function App() {
	return (
		<Router>
			<Navigation>
				<Route path={ROUTES.INTRO}>
					<Intro />
				</Route>
				<Route path={ROUTES.STORY}>
					<Story />
				</Route>
        <Route path={ROUTES.CHECKOUT}>
					<Checkout />
				</Route>
			</Navigation>
		</Router>
	);
}

export default App;
