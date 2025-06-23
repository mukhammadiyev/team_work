import './Post.css'
const Post = ({ openPost, setOpePost }) => {
	return (
		<div>
			{openPost && (
				<div className='add_post_backdrop'>
					<div className='add_post'>
						<i
							onClick={() => setOpePost(false)}
							className=' close fa-solid fa-close'
						></i>
						<h2>New Post</h2>
						<form>
							<label>
								<span>Title</span>
								<input required type='text' />
							</label>
							<label>
								<span>Body</span>
								<textarea required name='' id=''></textarea>
							</label>
							<div className='btns'>
								<button onClick={() => setOpePost(false)} type='button'>
									Cancel
								</button>
								<button type='button'>Save</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default Post
