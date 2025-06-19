import './Navbar.css'
function Navbar() {
	return (
		<nav>
			<div className='container'>
				<div className='navbar'>
					<h1 className='navbar_logo'>Mini It Blog</h1>
					<div className='navbar_liks_login'>
						<ul>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#'>Add Post</a>
							</li>
						</ul>
						<button>Log in</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
