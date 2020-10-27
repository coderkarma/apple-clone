import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CovidLink from './components/Covd-link/CovidLink';
import ShopOnline from './components/ShopOnline/ShopOnline';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<CovidLink />
			<ShopOnline />
		</div>
	);
}

export default App;
