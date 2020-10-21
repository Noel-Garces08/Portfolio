import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectNav = (props) => {
	const [hamburgerState, setHamburgerState] = useState('off');

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
		<div className='header-project'>
			<div className='navigation'>
				<div className='anne'>
					<Link to='/' style={{ color: '##E0E0E0' }}>
						Noel Garces
					</Link>
				</div>
				<button
					className='hamburger hamburger--spin mobile'
					type='button'
					onClick={toggleMenu}
				>
					<span className='hamburger-box'>
						<span className='hamburger-inner'></span>
					</span>
				</button>
				<div className='overlay mobile'>
					<div className='submenus'>
						<div className='work-mobile'>
							<Link to='/'>Work</Link>
						</div>
						<div className='articles-mobile'>
							<Link to='/articles'>Articles</Link>
						</div>
						<div className='about-mobile'>
							<Link to='/about'>About</Link>
						</div>
					</div>
				</div>
				<div className='navigation-sub'>
					<div className='work'>
						<Link to='/' style={{ color: '#E0E0E0' }}>
							Work
						</Link>
					</div>
					<div className='articles'>
						<Link to='/articles' style={{ color: '#E0E0E0' }}>
							Articles
						</Link>
					</div>
					<div className='about'>
						<Link to='/about' style={{ color: '#E0E0E0' }}>
							About
						</Link>
					</div>
				</div>
			</div>
			<div className='project-info'>
				<div className='project-title'>{props.title}</div>
				<div className='project-domain'>{props.domain}</div>
				<div className='project-details-top'>
					<div className='project-details-title'>Role(s)</div>
					<div className='project-details-text'>{props.roles}</div>
				</div>
				<div className='project-details project-details-second'>
					<div className='project-details-title'>Technology:</div>
					<div className='project-details-text'>
						{props.technologies}
					</div>
				</div>
				<div className='project-details project-details-third'>
					<div className='project-details-title'>Github</div>
					<a
						className='project-details-text'
						href={props.githubLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						View Code on Github
					</a>
				</div>
				<div className='project-details project-details-bottom'>
					<div className='project-details-title'>Live Demo</div>
					<a
						className='project-details-text'
						href={props.liveLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						View Live Project
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectNav;
