import './App.css'
import Home from './Page/home/Home'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Post from './Page/post/Post'
import { useState } from 'react'


function App() {

	const routes = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<RootLayout />}>
				<Route path='/' element={<Home />} />
			</Route>
		)
	)

	return (
		<div className='App'>
			<RouterProvider router={routes} />
		</div>
	)
}

export default App
