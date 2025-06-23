import React from 'react'
import './Header.css'
function Header() {
	return (
		<header>
			{/* <Navbar /> */}
			<div className='container'>
				<div className='header_content'>
					<h1>IT Blog Platform</h1>
					<p>A simple CRUD application for IT-related blog posts</p>
					<form className='search_form'>
						<input
							className='search_input'
							type='text'
							placeholder='Search posts...'
							required
						/>
						<button className='search_btn' type='submit'>Search</button>
					</form>
				</div>
			</div>
		</header>
	)
}

export default Header
