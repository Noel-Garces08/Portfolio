import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Article from './Article/Article';
import articleOneImage from './../../img/article-tn-01.png';

const Articles = () => {
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
								<Link to='/articles' className='active'>
									Articles
								</Link>
							</div>
							<div className='about-mobile'>
								<Link to='/about'>About</Link>
							</div>
						</div>
					</div>
					<div className='navigation-sub'>
						<div className='work'>
							<Link to='/'>Work</Link>
						</div>
						<div className='articles'>
							<Link to='/articles' className='active'>
								Articles
							</Link>
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
			<section className='articles'>
				{window.innerWidth <= 1009 ? (
					<div className='left'>
						<p className='articles-intro'>
							I write insightful articles
							<br />
							about <span className='bold'>my journey</span>
							.<br />I share{' '}
							<span className='bold'>unique findings</span> from
							my work,
							<br />
							and introduce{' '}
							<span className='bold'>novel trends</span> and{' '}
							<span className='bold'>ideas</span>.
						</p>
						<Article
							aos=''
							link='#'
							class='article-default'
							image={articleOneImage}
							title={[
								'How to Debug Your CSS',
								<br />,
								'With Just Three Lines',
							]}
							subtitle='Small Trick to Preserve your Hair'
							date='October 5th, 2020'
							dateClass='article-date two-line'
							index='0'
						/>
						{/* <Article
							aos='fade-up'
							link='https://uxplanet.org/30-days-of-framer-x-final-week-d5d1f923cbc1'
							class='article-default'
							image={articleComingSoon}
							title='30 Days of Framer X : Final Week'
							subtitle='30 Prototypes in 30 Days'
							date='November 16th, 2018'
							dateClass='article-date one-line'
							index='1'
						/> */}
						{/* <Article
							aos='fade-up'
							link='https://uxplanet.org/designing-for-pc-apps-4554d8a0aa85'
							class='article-default'
							image={articleComingSoon}
							title='Designing for PC Apps'
							subtitle='4 Concepts for PC App Design'
							date='July 14th, 2018'
							dateClass='article-date one-line'
							index='2'
						/> */}
					</div>
				) : (
					<div className='left'>
						<p className='articles-intro'>
							I write insightful articles about{' '}
							<span className='bold'>my journey</span>
							.<br />I share{' '}
							<span className='bold'>unique findings</span> from
							my work, and introduce{' '}
							<span className='bold'>programming concepts</span>{' '}
							and <span className='bold'>ideas</span> in a simple
							and understanding manner.
						</p>
						<Article
							aos=''
							link='#'
							class='article-default'
							image={articleOneImage}
							title={[
								'How to Debug Your CSS',
								<br />,
								'With Just Three Lines',
							]}
							subtitle='Small Trick to Preserve your Hair'
							date='October 5th, 2020'
							dateClass='article-date two-line'
							index='0'
						/>
						{/* <Article
							aos=''
							link='https://uxplanet.org/30-days-of-framer-x-final-week-d5d1f923cbc1'
							class='article-default'
							image={articleComingSoon}
							title='30 Days of Framer X : Final Week'
							subtitle='30 Prototypes in 30 Days'
							date='November 16th, 2018'
							dateClass='article-date one-line'
							index='1'
						/> */}
						{/* <Article
							aos=''
							link='https://uxplanet.org/designing-for-pc-apps-4554d8a0aa85'
							class='article-default'
							image={articleComingSoon}
							title='Designing for PC Apps'
							subtitle='4 Concepts for PC App Design'
							date='July 14th, 2018'
							dateClass='article-date one-line'
							index='2'
						/> */}
					</div>
				)}
				{window.innerWidth <= 1009 ? (
					<div className='right'>
						<Article
							aos='fade-up'
							link='#'
							class='article-default mobile'
							image={articleOneImage}
							title={[
								'With Great Folder Structure',
								<br />,
								'Comes Great Code-ability',
							]}
							subtitle='React Folder Structure Guide'
							date='May 1st, 2019'
							dateClass='article-date two-line'
							index='1'
						/>
						{/* <Article
							aos='fade-up'
							link='https://medium.com/@annelee_22736/ux-world-2017-fall-conference-summary-3399e847ce52'
							class='article-default'
							image={articleComingSoon}
							title={[
								'UX World 2017 Fall',
								<br />,
								'Conference Summary',
							]}
							subtitle='Insights from Top Tech Companies'
							date='November 22nd, 2017'
							dateClass='article-date two-line'
							index='4'
						/> */}
						{/* <Article
							aos='fade-up'
							link='https://uxplanet.org/how-facebook-designs-for-vr-environments-d566127c11fe'
							class='article-last'
							image={articleComingSoon}
							title={[
								'How Facebook Designs for',
								<br />,
								'VR Environments',
							]}
							subtitle='A Look into the Oculus Design'
							date='December 3rd, 2017'
							dateClass='article-date two-line'
							index='5'
						/> */}
					</div>
				) : (
					<div className='right'>
						<Article
							aos=''
							link='#'
							class='article-default'
							image={articleOneImage}
							title={[
								'With Great Folder Structure',
								<br />,
								'Comes Great Code-ability',
							]}
							subtitle='React Folder Structure Guide'
							date='May 1st, 2019'
							dateClass='article-date two-line'
							index='1'
						/>
						{/* <Article
							aos=''
							link='https://medium.com/@annelee_22736/ux-world-2017-fall-conference-summary-3399e847ce52'
							class='article-default'
							image={articleComingSoon}
							title={[
								'UX World 2017 Fall',
								<br />,
								'Conference Summary',
							]}
							subtitle='Insights from Top Tech Companies'
							date='November 22nd, 2017'
							dateClass='article-date two-line'
							index='4'
						/> */}
						{/* <Article
							aos=''
							link='https://uxplanet.org/how-facebook-designs-for-vr-environments-d566127c11fe'
							class='article-last'
							image={articleComingSoon}
							title={[
								'How Facebook Designs for',
								<br />,
								'VR Environments',
							]}
							subtitle='A Look into the Oculus Design'
							date='December 3rd, 2017'
							dateClass='article-date two-line'
							index='5'
						/> */}
					</div>
				)}
			</section>
		</div>
	);
};

export default Articles;
