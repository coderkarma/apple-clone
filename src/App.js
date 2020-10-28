import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CovidLink from './components/Covd-link/CovidLink';
import ShopOnline from './components/ShopOnline/ShopOnline';
import Iphone12 from './components/Iphone12-section/Iphone12';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<CovidLink />
			<ShopOnline />
			<Iphone12 />
		</div>
	);
}

export default App;
