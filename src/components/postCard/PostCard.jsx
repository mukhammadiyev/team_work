import './PostCard.css'

const PostCard = ({ users, setEdit }) => {
	// Cardni o'chirish uchun function
	function handleDeleter(e) {
		e.target.parentElement.parentElement.remove()
	}
	return (
		<div className='container'>
			<div className='cards'>
				{users.map(user => (
					<div key={user.id} className='card'>
						<h1 className='card-title'>{user.title}</h1>
						<h3 className='card_date'>April 22, 2025</h3>
						<p className='card_info'>{user.body}</p>
						<div className='card_control_btns'>
							<button onClick={() => setEdit(true)}>Edit</button>
							<button onClick={e => handleDeleter(e)}>Delete</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PostCard
