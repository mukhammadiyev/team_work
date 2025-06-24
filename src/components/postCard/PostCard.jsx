import './PostCard.css'

const PostCard = ({ users , setEdit }) => {
	return (
		<div className='container'>
			<div className='cards'>
				{users.map(user => {
					return (
						<div key={user.title} className='card'>
							<h1 className='card-title'>{user.title}</h1>
							<h3 className='card_date'>April 22, 2025</h3>
							<p className='card_info'>{user.body}</p>
							<div className='card_control_btns'>
								<button onClick={()=>setEdit(true)}>Edit</button>
								<button>Delete</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
	// {users.map((user) => {
	//       return (
	//         <div className='cards' key={user.title}>
	//           <div className='card'>
	//             <h1 className='card-title'>{user.title}</h1>
	//             <p>{user.body}</p>
	//             <button>Edi</button>
	//           </div>
	//         </div>
	//       )
	//     })}
}

export default PostCard
