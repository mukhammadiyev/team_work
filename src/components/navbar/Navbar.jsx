import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar({onOpenPost}) {
	return (
		<nav>
			<div className='container'>
				<div className='navbar'>
					<h1 className='navbar_logo'>Mini It Blog</h1>
					<div className='navbar_liks_login'>
						<ul>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to="" onClick={onOpenPost}>Add Post</NavLink>
							</li>
						</ul>
						<button>Login</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
