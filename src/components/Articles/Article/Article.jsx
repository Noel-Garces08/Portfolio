import React from 'react';

const Article = (props) => {
	const hoverEvent = (index) => {
		let imageList = document.querySelectorAll('.article-image-size');
		imageList[index].classList.add('change-scale');
	};

	const cancelHover = (index) => {
		let imageList = document.querySelectorAll('.article-image-size');
		imageList[index].classList.remove('change-scale');
	};

	return (
		<div
			data-aos={props.aos}
			className='article'
			onMouseOver={() => hoverEvent(props.index)}
			onMouseOut={() => cancelHover(props.index)}
		>
			<a href={props.link} target='_blank' rel='noopener noreferrer'>
				<div className={props.class}>
					<div className='article-image'>
						<img
							src={props.image}
							className='article-image-size'
							alt='Article Thumbnail'
						/>
					</div>
					<div className='article-contents'>
						<div className='article-title'>{props.title}</div>
						<div className='article-subtitle'>{props.subtitle}</div>
						<div className={props.dateClass}>{props.date}</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Article;
