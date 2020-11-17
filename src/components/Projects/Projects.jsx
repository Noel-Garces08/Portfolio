import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project/Project';
import ImageOne from './../../img/project-tn-01.png';
import ImageTwo from './../../img/project-tn-02.png';
import ImageThree from './../../img/project-tn-03.png';
import ImageFour from './../../img/project-tn-04.png';
import ImageTodoList from './../../img/project_todo_list.png';

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
								<Link to='/' className='active'>
									Work
								</Link>
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
							<Link to='/' className='active'>
								Work
							</Link>
						</div>
						<div className='articles'>
							<Link to='/articles'>Articles</Link>
						</div>
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
						image={ImageTodoList}
						link='/todo-list'
						title='Todo List'
						category='Web Application'
						index='0'
					/>
					<Project
						aos=''
						image={ImageOne}
						link='/amazon-clone'
						title='Amazon Clone'
						category='Web Application'
						index='1'
					/>
					<Project
						aos=''
						image={ImageTwo}
						link='/four-card-grid-component'
						title='Four Card Grid Component'
						category='Static Website'
						index='2'
					/>
				</div>
				{/* RIGHT SIDE */}
				<div className='right'>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={ImageThree}
						link='/single-price-grid-component'
						title='Single Price Grid Component'
						category='Static Website'
						index='3'
					/>
					<Project
						aos={window.innerWidth <= 1009 ? 'fade-up' : ''}
						image={ImageFour}
						link='/lily-photography'
						title='Lily Photography'
						category='Static Website'
						index='4'
					/>
				</div>
			</section>
		</div>
	);
};

export default Projects;

// Break point 1009
