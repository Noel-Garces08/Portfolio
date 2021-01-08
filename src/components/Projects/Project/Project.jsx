import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Project.module.css';

const Project = (props) => {
	const hoverEvent = (index) => {
		let hmwList = document.querySelectorAll('.hmw');
		let imageList = document.querySelectorAll('.project-image-size');

		hmwList[index].classList.add('show-hmw');
		imageList[index].classList.add('change-scale');
	};

	const cancelHover = (index) => {
		let hmwList = document.querySelectorAll('.hmw');
		let imageList = document.querySelectorAll('.project-image-size');

		hmwList[index].classList.remove('show-hmw');
		imageList[index].classList.remove('change-scale');
	};

	return (
		<div
			data-aos={props.aos}
			className='project'
			onMouseOver={() => hoverEvent(props.index)}
			onMouseOut={() => cancelHover(props.index)}
		>
			<div className='hmw'>
				<div className='hmw-background' style={{ backgroundColor: 'rgba(35, 37, 39, .95)' }}>
					<div className='project-title'>{props.title}</div>
					<div className='project-category'>{props.category}</div>
					<div className={styles.links}>
						<a href={props.liveLink} target="_" className={styles.link}>View Live</a>
						<a href={props.githubLink} target="_" className={styles.link}>View Code</a>
					</div>
				</div>
			</div>
			<div className='project-default'>
				<div className='project-image'>
					<img src={props.image} className='project-image-size' alt='Project Thumbnail' />
				</div>
			</div>
		</div>
	);
};

export default Project;
