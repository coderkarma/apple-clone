import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CovidLink from './components/Covd-link/CovidLink';
import ShopOnline from './components/ShopOnline/ShopOnline';
import Iphone12pro from './components/Iphone12-section/Iphone12pro';
import Iphone12 from './components/Iphone12-section/Iphone12';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='wrapper'>
				<CovidLink />
				<ShopOnline />
				<Iphone12pro />
				<Iphone12 />
			</div>
		</div>
	);
}

export default App;
