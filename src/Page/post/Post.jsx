import { useState } from 'react'
import './Post.css'
const Post = ({ openPost, setOpePost }) => {


	const [title, setTitle] = useState()
	const [text, setText] = useState()

	function heading() {

		const user = {
			userId: 1,
			id: 1,
			title: title,
			body: text,
		}
	}

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
								<input onInput={(e) => {
									setTitle(e.target.value)
								}} required type='text' name='title' />
							</label>
							<label>
								<span>Body</span>
								<textarea onChange={(e) => {
									setText(e.target.value)
								}} required ></textarea>
							</label>
							<div className='btns'>
								<button onClick={() => setOpePost(false)} type='button'>
									Cancel
								</button>
								<button type='button' onClick={heading}>Save</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default Post
