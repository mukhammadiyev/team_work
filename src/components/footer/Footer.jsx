import './Footer.css'
function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='footer'>
					<h1 className='footer_logo'>Mini It Blog</h1>
					<p>
						All rights reserved <a href='#'>IT New Kelajak</a>'s first team work
					</p>
					<div className='socials'>
						<i className='fa-brands fa-telegram'></i>
						<i className='fa-brands fa-github'></i>
						<i className='fa-brands fa-linkedin'></i>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
