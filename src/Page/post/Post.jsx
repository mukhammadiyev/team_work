import { useState } from 'react'
import './Post.css'

const Post = ({ openPost, setOpePost, onPostAdded }) => {
	const [title, setTitle] = useState("")
	const [text, setText] = useState("")

	async function heading() {
		const user = {
			userId: 1,
			id: Date.now(), // 🔄 ID unikallik uchun
			title: title,
			body: text,
		}

		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			})

			const result = await response.json()
			console.log("Yuborildi:", result)

			// 🔄 Parentga yangi postni jo‘natamiz
			onPostAdded && onPostAdded(result)

			// Tozalash va modalni yopish
			setTitle("")
			setText("")
			setOpePost(false)
		} catch (error) {
			console.error("Xatolik:", error)
		}
	}

	return (
		<div>
			{openPost && (
				<div className='add_post_backdrop'>
					<div className='add_post'>
						<i
							onClick={() => setOpePost(false)}
							className='close fa-solid fa-close'
						></i>
						<h2>New Post</h2>
						<form>
							<label>
								<span>Title</span>
								<input
									onChange={e => setTitle(e.target.value)}
									value={title}
									required
									type='text'
									name='title'
								/>
							</label>
							<label>
								<span>Body</span>
								<textarea
									onChange={e => setText(e.target.value)}
									value={text}
									required
								></textarea>
							</label>
							<div className='btns'>
								<button onClick={() => setOpePost(false)} type='button'>
									Cancel
								</button>
								<button type='button' onClick={heading}>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default Post
