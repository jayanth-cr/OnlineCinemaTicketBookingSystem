import React, { useState } from 'react'
import passwordHook from '../Hooks/passwordHook'

function CorporateLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')

    const fetchData = () => {
        if(passwordHook(password)){
            console.log(email,password);
            setError('')
        }
        else{
            setError('Password should contain atleast an uppercase alphabet, a special symbol, a number and should have a length between 8-50')
        }
        
    }
    const createAccount = ()=>{
        console.log('Create New Account');
    }

    return (
        <>
            <div className="row  m-0 p-0">
            <h1 className='bg-dark text-light p-2 text-center'>Login</h1>
                <div className="col-12   mt-5 ">
                    <div className="row px-2 px-sm-5 justify-content-center ">
                        <div className="col-lg-6 col-md-7 ">
                            <form onSubmit={e=>{ e.preventDefault() ; fetchData() }}>

                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="email" className="form-label p-0">Email&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="email" required />
                                </div>
                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="password" className="form-label p-0">Password&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control" id="password" required />

                                </div>

                                <div className="text-center  p-4">
                                    <div className='row justify-content-center'>
                                        <div className='col-sm-3 m-3'>
                                            <button onClick={(e) => { e.preventDefault(); createAccount() }}  className="btn btn-primary text-center">Signin</button>
                                        </div>
                                        <div className='col-sm-3 m-3 ' >
                                            <button type='submit'  className="btn btn-primary text-center">Login</button>
                                        </div>
                                        <div className='colm-3 text-danger' >
                                            { error }
                                        </div>
                                    </div>
                                </div>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorporateLogin
