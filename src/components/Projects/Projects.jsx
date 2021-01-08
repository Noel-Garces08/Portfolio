import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project/Project';

import HandHApparel from './../../img/h&h-apparel-project.png';
import TheSocialNetwork from './../../img/the-social-network-project.png';
import DevOutlet from './../../img/dev-outlet-project.png';
import KeyboardFreak from './../../img/keyboard-freak-project.png';
import PrimeBeefSteak from './../../img/prime-beef-steak.png';
import Loruki from './../../img/loruki-project.png';
import LilyPhotography from './../../img/lily-photography-project.png';
import FourCardGridLayout from './../../img/four-card-grid-layout.png';
import ModernTaskTracker from './../../img/modern-task-tracker-project.png';
import SinglePriceGridComponent from './../../img/single-pricd-grid-component-project.png';

const Projects = () => {
	const [hamburgerState, setHamburgerState] = useState('off');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const toggleMenu = () => {
		let hamburger = document.querySelector('.hamburger');
		let overlay = document.querySelector('.overlay');
		if (hamburgerState === 'off') {
			hamburger.classList.add('is-active');
			overlay.classList.remove('hide');
			overlay.classList.add('show');
			setHamburgerState('on');
		} else {
			hamburger.classList.remove('is-active');
			overlay.classList.remove('show');
			overlay.classList.add('hide');
			setHamburgerState('off');
		}
	};

	return (
		<div className='body'>
			<section className='header'>
				<div className='navigation'>
					<div className='anne'>
						<Link to='/' className='active'>
							Noel Garces
						</Link>
					</div>
					<button className='hamburger hamburger--spin mobile' type='button' onClick={toggleMenu}>
						<span className='hamburger-box'>
							<span className='hamburger-inner'></span>
						</span>
					</button>
					<div className='overlay mobile'>
						<div className='submenus'>
							<div className='work-mobile'>
								<Link to='/' className='active'>
									Work
								</Link>
							</div>
							{/* <div className='articles-mobile'>
								<Link to='/articles'>Articles</Link>
							</div> */}
							<div className='about-mobile'>
								<Link to='/about'>About</Link>
							</div>
						</div>
					</div>
					<div className='navigation-sub'>
						<div className='work'>
							<Link to='/' className='active'>
								Work
							</Link>
						</div>
						{/* <div className='articles'>
							<Link to='/articles'>Articles</Link>
						</div> */}
						<div className='about'>
							<Link to='/about'>About</Link>
						</div>
					</div>
				</div>
				<div className='designer'>Web Developer</div>
				<div className='speciality'>
					Front-end / Back-end Development
				</div>
			</section>
			<section className='projects'>
				{/* LEFT SIDE */}
				<div className='left'>
					<p className='projects-intro'>
						I am a technology enthusiast who strives to{' '}
						<span className='bold'>
							develop high-tech products{' '}
						</span>
						that will <span className='bold'>impact </span>
						people's lives for the
						<span className='bold'> better</span>.
					</p>
					<Project
						aos=''
						image={HandHApparel}
						title='H&HAPPAREL (In Progress)'
						category='Web Application'
						githubLink="https://github.com/Noel-Garces08/handh_apparel"
						liveLink="https://keen-aryabhata-7c2854.netlify.app"
						index='0'
					/>
					<Project
						aos=''
						image={DevOutlet}
						title='Dev Outlet'
						category='Web Application'
						githubLink=""
						liveLink=""
						index='1'
					/>
					<Project
						aos=''
						image={PrimeBeefSteak}
						title='Prime Beef Steak'
						category='Static Website'
						githubLink="https://github.com/Noel-Garces08/prime_beef_steak"
						liveLink="https://noel-garces08.github.io/prime_beef_steak/"
						index='2'
					/>
					<Project
						aos=''
						image={LilyPhotography}
						title='Lily Photography'
						category='Static Website'
						githubLink="https://github.com/Noel-Garces08/lily_photography"
						liveLink="https://noel-garces08.github.io/lily_photography/"
						index='3'
					/>
					<Project
						aos=''
						image={ModernTaskTracker}
						title='Modern Task Tracker'
						category='Static Website'
						githubLink="https://github.com/Noel-Garces08/todo_list"
						liveLink="https://noel-garces08.github.io/todo_list/"
						index='4'
					/>
				</div>
				{/* RIGHT SIDE */}
				<div className='right'>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={TheSocialNetwork}
						title='The Social Network (In Progress)'
						category='Web Application'
						githubLink="https://github.com/Noel-Garces08/social_network"
						liveLink="https://thesocialnetwork-master.netlify.app"
						index='5'
					/>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={KeyboardFreak}
						title='Keyboard Freak (In Progress)'
						category='Web Application'
						githubLink=""
						liveLink=""
						index='6'
					/>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={Loruki}
						title='Loruki'
						category='Static Website'
						githubLink="https://github.com/Noel-Garces08/loruki"
						liveLink="https://noel-garces08.github.io/loruki/"
						index='7'
					/>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={FourCardGridLayout}
						title='Four Card Grid Layout'
						category='Static Website'
						githubLink="https://github.com/Noel-Garces08/Four-Card-Feature-Section"
						liveLink="https://noel-garces08.github.io/four-card-feature-section/"
						index='8'
					/>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={SinglePriceGridComponent}
						title='Single Price Grid Component'
						category='Static Website'
						githubLink="https://github.com/Noel-Garces08/Single-Price-Grid-Component"
						liveLink="https://noel-garces08.github.io/Single-Price-Grid-Component/"
						index='9'
					/>
				</div>
			</section>
		</div>
	);
};

export default Projects;
