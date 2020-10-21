import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-statement'>Let's work together!</div>
			<div className='social-links'>
				<div className='social'>
					<a
						href='https://github.com/Noel-Garces08'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-github'></i>
					</a>
				</div>
				<div className='social'>
					<a
						href='https://www.linkedin.com/in/noel-garces/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-linkedin-in'></i>
					</a>
				</div>
				<div className='social'>
					<a
						href='https://www.instagram.com/noelgarces_/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-instagram'></i>
					</a>
				</div>
			</div>
			<div className='footer-copyright'>© 2020, Noel Garces</div>
		</div>
	);
};

export default Footer;
