import React from 'react'

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#87ceeb] flex justify-center items-center'>
        <div className='w-[350px] text-[#eee] p-2'>
            <div className='bg-[#0000ff] p-4 rounded-md'>
                <h2 className='text-xl mb-3 font-bold'>Welcome to E-Kom</h2>
                <p className='text-sm mb-3 font-medium'>Please register for your account</p>
                <form>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="name">Name</label>
                        <input className='px-3 py-2 outline-none text-[#111] bg-[#eee] rounded-md' type="text" name='name' placeholder='Name' id='name' required/>
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input className='px-3 py-2 outline-none text-[#111] bg-[#eee] rounded-md' type="text" name='email' placeholder='Email' id='email' required/>
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">Password</label>
                        <input className='px-3 py-2 outline-none text-[#111] bg-[#eee] rounded-md' type="password" name='password' placeholder='Password' id='name' required/>
                    </div>
                    <div className='flex item-center w-full gap-3 mb-3'>
                        <input className='w-4 h-4 text-[#0000ff]overflow-hidden bg-[#ccc] rounded border-[#ccc] focus:ring-[#0000ff]' type='checkbox' name='checkbox' id='checkbox' />
                        <label htmlFor="checkbox">I agree to terms and conditions</label>
                    </div>
                    <button className='bg-[#eee] text-[#111] w-full rounded-md px-7 py-2 hover:bg-[#ccc] mb-3'>Sign Up</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Register
