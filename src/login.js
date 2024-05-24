import React from 'react';
import { useFormik} from 'formik'
import * as Yup from 'yup'


function Login() {
  const doSigin = () => {
    setTimeout(() => {
      formik.setSubmitting(false)
      formik.resetForm()
    }, 2000)
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is a required field'),
      password: Yup.string().required('Password is a required field')
    }),
    onSubmit: doSigin
  })

  return (
    <main className="container-sigin bg-slate-800 flex items-center justify-center text-black mt-12">
      <form onSubmit={formik.handleSubmit} className="w-full min-[425px]:w-[425px] bg-white px-4 py-10 min-[425px]:m-12 min-[425px]:rounded" action=''>
        <h1 className="text-xl min-[425px]:text-2xl md:text-3xl mb-6 font-bold text-center">Sign In</h1>
        <div className="mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">Username</label>
          <input name='username' onChange={formik.handleChange} value={formik.values.username} type="text" id="username" className="w-full bg-white focus:outline-none" autoComplete='off'/>
        </div>
        {formik.touched.username && formik.errors.username && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>{formik.errors.username}</small>}
        <div className="mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input name='password' onChange={formik.handleChange} value={formik.values.password} type="password" id="password" className="w-full bg-white focus:outline-none"/>
        </div>
        {formik.touched.password && formik.errors.password && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>{formik.errors.password}</small>}
        <div className="flex justify-center m-6">
          <button disabled={formik.setSubmitting} className="text-white w-40 px-4 py-2 bg-[#5B50E1] hover:bg-[#261D8D] font-medium rounded">
            Sign In
          </button>
        </div>
        <div className="w-full flex flex-row text-xs justify-center items-center">
          <div className=' w-14 h-px bg-slate-800'></div><p className='p-2'>Don't have an account yet?</p><div className='w-14 h-px bg-slate-800'></div>
        </div>
        <div className="flex justify-center m-6">
          <a className="text-white w-40 px-4 py-2 bg-[#EFD700] hover:bg-[#c0af17] font-medium text-center rounded" href='/register'>
            Register
          </a>
        </div>
      </form>
    </main>
  );
}

<div className="flex justify-center">
          <p>Don't have an account yet? <a href="/register" className="text-purple-500 hover:underline">Register here</a></p>
        </div>

export default Login;
