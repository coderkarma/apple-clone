import React from 'react';
import logo from '../../images/iphone-12-pro/iphone-12-pro-logo_large_2x.png';
import './Iphone12.css';

const Iphone12 = () => {
	return (
		<div className='iphone12pro'>
			<div className='iphone12pro__logo'>
				<img src={logo} alt='iphone12-pro' />
				<h2>It's a leap year</h2>
				<div className='iphone12pro__links'>
					<a href='/'>Learn More</a>
					<a href='/'>Shop</a>
				</div>
			</div>
			<div className='iphone12pro__heroImage'></div>
			<div className='iphone12pro__max'>
				<h1>Iphone 12 pro Max</h1>
				<h4>Pre-order starting at </h4>
				<h4>5.00 a.m. PST on 11.6 </h4>
			</div>
			<div className='iphone12pro__maxavailable'>
				<h4>Available 11.13</h4>
			</div>
		</div>
	);
};

export default Iphone12;
