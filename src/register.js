import React from 'react';
import { useFormik} from 'formik'
import * as Yup from 'yup'


function Register() {

  
  const doRegister = () => {

    setTimeout(() => {
      formik.setSubmitting(false)
      formik.resetForm()
    }, 2000)
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone:"",
      password:"",
      confirmpassword:""
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is a required field').min(3, 'Username must be at least 3 characters').matches(/^\S*$/, 'Should not contain space'),
      email: Yup.string().required('Email is a required field').email('Email must be a valid email'),
      phone: Yup.number().required(),
      password: Yup.string().required('Password is a required field').min(8, 'Password must be at least 8 characters').matches(/[a-z]/g, 'should contain at least 1 liwercase').matches(/[A-Z]/g, 'should contain at least 1 uppercase').matches(/[0-9]/g, 'should contain at least 1 number').matches(/^\S*$/, 'should not contain space'),
      confirmpassword: Yup.string().required('Confirm Password is a required field').oneOf([Yup.ref('password')], 'Password must match')
    }),
    onSubmit: doRegister
  })

  return (
    <main className="container-sigin bg-slate-800 flex items-center justify-center text-black mt-12">
      <form onSubmit={formik.handleSubmit} className="w-full min-[425px]:w-[425px] bg-white px-4 py-10 min-[425px]:m-12 min-[425px]:rounded" action=''>
        <h1 className="text-xl min-[425px]:text-2xl md:text-3xl mb-6 font-bold text-center">Create New Account</h1>
        <div className="username mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">Username</label>
          <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white focus:outline-none"autoComplete='off'/>
        </div>
        {formik.touched.username && formik.errors.username && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>{formik.errors.username}</small>}
        <div className="email mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white focus:outline-none" autoComplete='off'/>
        </div>
        {formik.touched.email && formik.errors.email && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>{formik.errors.email}</small>}
        <div className="phone mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone</label>
          <input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white focus:outline-none" autoComplete='off'/>
        </div>
        {formik.touched.phone && formik.errors.phone && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>phone must be a `number` type</small>}
        <div className="password mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white focus:outline-none"/>
        </div>
        {formik.touched.password && formik.errors.password && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>{formik.errors.password}</small>}
        <div className="confirmpassword mt-6 border-slate-700 border-b-2 mx-4">
          <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">Confirm Password</label>
          <input type="password" name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white focus:outline-none"/>
        </div>
        {formik.touched.confirmpassword && formik.errors.confirmpassword && <small className='absolute ml-4 font-semibold mt-[-.2rem] text-red-700'>{formik.errors.confirmpassword}</small>}
        <div className="flex justify-center m-6">
          <button disabled={formik.setSubmitting} className="text-white w-40 px-4 py-2 bg-[#5B50E1] hover:bg-[#261D8D] font-medium rounded" type='submit'>
            Register
          </button>
        </div>
        <div className="w-full flex flex-row text-xs justify-center items-center">
          <div className=' w-14 h-px bg-slate-800'></div><p className='p-2'>Already have an account?</p><div className='w-14 h-px bg-slate-800'></div>
        </div>
        <div className="flex justify-center m-6">
          <a className="text-white w-40 px-4 py-2 bg-[#EFD700] hover:bg-[#c0af17] font-medium text-center rounded" href='/login'>
            Sign In
          </a>
        </div>
      </form>
    </main>
  );
}

export default Register;
