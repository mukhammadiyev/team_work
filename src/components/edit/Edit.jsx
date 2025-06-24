import './Edit.css'
function Edit({ setEdit }) {
	return (
		<div className='add_post_backdrop'>
			<div className='add_post'>
				<i
					className=' close fa-solid fa-close'
					onClick={() => setEdit(false)}
				></i>
				<h2>Edit Post</h2>
				<form>
					<label>
						<span>Title</span>
						<input required type='text' name='title' />
					</label>
					<label>
						<span>Body</span>
						<textarea required></textarea>
					</label>
					<div className='btns'>
						<button type='button'>Cancel</button>
						<button type='button'>Save</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Edit
