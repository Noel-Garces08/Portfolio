import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Hamburgers.css';
import { Projects, About, Articles, Footer } from './components/';
import {
	AmazonClone,
	FourCardGridComponent,
	SinglePriceGridComponent,
	LilyPhotography,
} from './projects';
import AOS from 'aos';

const App = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
		script.async = true;
		document.body.appendChild(script);
	}, []);

	AOS.init();

	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={Projects} />
				<Route path='/amazon-clone' component={AmazonClone} />
				<Route
					path='/four-card-grid-component'
					component={FourCardGridComponent}
				/>
				<Route
					path='/single-price-grid-component'
					component={SinglePriceGridComponent}
				/>
				<Route path='/lily-photography' component={LilyPhotography} />
				<Route path='/articles' component={Articles} />
				<Route path='/about' component={About} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
