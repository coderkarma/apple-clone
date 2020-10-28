import React from 'react';
import logo from '../../images/iphone-12-pro/iphone-12-pro-logo_large_2x.png';
import './Iphone12.css';

const Iphone12 = () => {
	return (
		<div className='iphone12pro'>
			<div className='iphone12pro__logo'>
				<img src={logo} alt='iphone12-pro' />
			</div>
			<div className='iphone12pro__heroImage'></div>
			<div className='iphone12pro__max'>
				<h1>Iphone 12 pro Max</h1>
			</div>
		</div>
	);
};

export default Iphone12;