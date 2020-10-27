import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='nabvar__content'>
				<ul className='navbar__lists'>
					<li>
						<AppleIcon />
					</li>
					<li>Mac</li>
					<li>Ipad</li>
					<li>iPhone</li>
					<li>Watch</li>
					<li>TV</li>
					<li>Music</li>
					<li>Support</li>
					<li>
						<SearchIcon />
					</li>
					<li>
						<LocalMallIcon />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
