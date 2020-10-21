import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import img01 from '../img/project-tn-02-tran.png';

const LilyPhotography = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className='project-content prismlayout'>
			<div className='cover'>
				<ProjectNav
					title='Lily Photography'
					domain='Static Website'
					roles='Developer: Noel Garces'
					technologies={['HTML5, CSS3, JavaScript']}
					githubLink='https://github.com/Noel-Garces08/Photography'
					liveLink='https://lily-photography.imfast.io/'
				/>
				<img src={img01} alt='Cover' className='cover-image' />
			</div>
			<div className='summary'>
				<div className='summary-container'>
					<div className='summary-container-left'>
						<div className='content-title white'>Summary</div>
						<div className='content end white'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quae recusandae, consequatur inventore
							voluptas ipsam saepe non pariatur at sapiente modi
							tempora veniam atque repellat rem tempore reiciendis
							magnam fuga repudiandae. Consectetur consequatur
							neque excepturi placeat, omnis maxime ipsum in
							quibusdam necessitatibus tenetur eos sapiente,
							dolores corrupti alias deleniti.
						</div>
					</div>
				</div>
			</div>

			<div className='bottom-navigation'>
				<Link to='/amazon-clone' className='link link-inactive'>
					Amazon Clone
				</Link>
				<Link
					to='/four-card-grid-component'
					className='link link-inactive'
				>
					Four Card Grid Component
				</Link>
				<Link
					to='/single-price-grid-component'
					className='link link-inactive'
				>
					Single Price Grid Component
				</Link>
				<Link to='/lily-photography' className='link  link-active'>
					Lily Photography
				</Link>
			</div>
		</section>
	);
};

export default LilyPhotography;
