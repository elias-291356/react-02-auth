

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginThunk } from '../../redux/auth/operations'
import { selectLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom'

 const Login = () => {
	 const dispatch = useDispatch()
	 const isLoggedIn = useSelector(selectLoggedIn)

	const { register, reset, handleSubmit } = useForm()
	const submit = data => {
		console.log(data)

		dispatch(loginThunk(data))

	 }
	 
	 if (isLoggedIn) {
		 return <Navigate to='/'/>
	 }
	return (
		<div className='bg-slate-800 min-h-screen grid place-items-center'>
			<form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 bg-white px-10 py-14 rounded-md shadow-xl'>
		
				<input
					className='border-2 border-black rounded-md px-2 py-2 text-lg'
					placeholder='Enter the email'
					{...register('email', { required: true, minLength: 6 })}
				/>
				<input
					className='border-2 border-black rounded-md px-2 py-2 text-lg'
					placeholder='Enter the password'
					type='password'
					{...register('password', { required: true, minLength: 6 })}
				/>

				<button className='border-2 border-black  px-2 py-3 rounded-md hover:bg-teal-500 hover:text-white transition cursor-pointer'>
					Login
				</button>
				<span>
					You already have account?{' '}
					<Link className='underline text-teal-600' to='/register'>
						Lets Create
					</Link>
				</span>
			</form>
		</div>
	)
}

export default Login;