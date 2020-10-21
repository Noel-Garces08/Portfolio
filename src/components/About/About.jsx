import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from './../../img/profile.JPG';
import resume from './../../Noel_Garces_Resume.pdf';

const About = () => {
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
								<Link to='/'>Work</Link>
							</div>
							<div className='articles-mobile'>
								<Link to='/articles'>Articles</Link>
							</div>
							<div className='about-mobile'>
								<Link to='/about' className='active'>
									About
								</Link>
							</div>
						</div>
					</div>
					<div className='navigation-sub'>
						<div className='work'>
							<Link to='/'>Work</Link>
						</div>
						<div className='articles'>
							<Link to='/articles'>Articles</Link>
						</div>
						<div className='about'>
							<Link to='/about' className='active'>
								About
							</Link>
						</div>
					</div>
				</div>
				<div className='designer'>Web Developer</div>
				<div className='speciality'>
					Front-end / Back-end Development
				</div>
			</section>
			<section className='about'>
				<img src={profile} alt='Profile' className='about-image' />
				<div className='about-content'>
					<div>
						Hi, my name is Noel.
						<br />
						<br />
						I am currently pursuing a Bachelor of Science in
						Computer Science at The University of Texas at El Paso
						(UTEP). Currently, I have classified a junior, and my
						expected graduation date is May 2022. I am a technology
						enthusiast who strives to develop high-tech products
						that will impact people's lives for the better.
						<br />
						<br />
						<br />
					</div>
					<div data-aos={window.innerWidth <= 1009 && 'fade-up'}>
						<span className='about-title'>
							Experience at El Paso Community College as a
							Academic Tutor
						</span>
						<br />
						<br />
						<ul>
							<li>
								Assist students in a non-classroom setting
								either online via a virtual meeting space or
								in-person.
							</li>
							<br />
							<li>
								Tutor students individually or in small groups
								and provide a variety of services from study
								skills, note- taking strategies, test
								preparation and homework assistance.
							</li>
							<br />
							<li>Help improve student’s academic performance</li>
						</ul>
						<br />
						<br />
					</div>
					<div data-aos={window.innerWidth <= 1009 && 'fade-up'}>
						<span className='about-title'>
							Experience at xLearno as a React Developer
						</span>
						<br />
						<br />
						<ul>
							<li>
								Develop electronic learning platform from
								concepts through completion.
							</li>
							<br />
							<li>
								Validate user login, registration, and forgot
								password data through API.
							</li>
							<br />
							<li>
								Request appropriate user data from API based on
								authenticated user.
							</li>
						</ul>
						<br />
						<br />
					</div>
					<div data-aos={window.innerWidth <= 1009 && 'fade-up'}>
						<span className='about-title'>
							Experience at Diversity and Inclusion as a Graphic
							Designer
						</span>
						<br />
						<br />
						<ul>
							<li>
								Successfully manage and coordinate graphic
								design projects from concept through completion.
							</li>
							<br />
							<li>
								Work closely with director to create vision,
								conceive designs, and meet scheduled deadlines
								and requirements.
							</li>
						</ul>
						<br />
						<br />
					</div>
					<div data-aos={window.innerWidth <= 1009 && 'fade-up'}>
						<span className='about-title'>
							Experience at La Familia Del Paso as a Marketer and
							Full-Stack Web Developer
						</span>
						<br />
						<br />
						<ul>
							<li>
								Create and conduct highly persuasive sales and
								marketing presentations to ensure the company’s
								brand is highly visible to the El Paso
								community.
							</li>
							<br />
							<li>
								Utilized multiple software applications
								including Photoshop to design marketing tools
								such as brochures, flyers, and informational
								trifolds.
							</li>
							<br />
							<li>
								Revamped company’s existing website to enhance
								visibility and user friendliness.
							</li>
						</ul>
						<br />
						<br />
						Feel free to contact me for any inquiries about my
						portfolio and work opportunities!
					</div>
				</div>
			</section>
			<div className='about-resume'>
				<a href={resume} download className='about-download-button'>
					DOWNLOAD CV
				</a>
			</div>
		</div>
	);
};

export default About;
