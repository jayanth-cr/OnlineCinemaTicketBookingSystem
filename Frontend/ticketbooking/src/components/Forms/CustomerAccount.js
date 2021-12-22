import React, { useState } from 'react'
import mobileHook from '../Hooks/mobileHook'
import passwordHook from '../Hooks/passwordHook'
import nameHook from '../Hooks/nameHook'

function CustomerAccount({ title }) {

    const [name,setName] = useState('')
    const [gender,setGender] = useState('Male')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [error,setError] = useState()

    const fetchData = ()=>{
        if(! nameHook(name.trim())){
            setError('Name should contain only characters and should have a length between 4 - 30')
        }
        else if( ! mobileHook(mobile) ){
            setError('Invalid Mobile Number')
        }
        else if( ! passwordHook(password) ){
            setError('Password should contain atleast an uppercase alphabet, a special symbol, a number and should have a length between 8-50')
        }
        else if( password !== confirmpassword ){
            setError('Passwords not matching')
        }
        else {
            console.log(name);
            console.log(gender);
            console.log(mobile);
            console.log(email);
            console.log(password);
            console.log(confirmpassword);
            setError('')
        }
    }
    
    return (
        <>
            <div className="row m-0 p-0">
                <h1 className='bg-dark text-light p-2 text-center'>Create Account</h1>
                <div className="col-12">
                    <div className="row px-2 px-sm-5 justify-content-center">
                        <div className="col-lg-6  col-12">
                            <form  onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="name" className="form-label p-0">Name&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={name} onChange={e=>setName(prev=>e.target.value)} type="text" className="form-control" id="name" required />
                                </div>
                                <div className="row mt-2 ps-3   justify-content-left" >
                                    <div className='col-12'>
                                        <label htmlFor="gender" className="form-label p-0">Gender&nbsp;<span
                                            className="text-danger">*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                                        <div className="form-check form-check-inline">
                                            <input value="Male" onClick={e=>setGender(e.target.value)} defaultChecked className="form-check-input" type="radio" name="gender" id="male" />
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input value="Female"  onClick={e=>setGender(e.target.value)} className="form-check-input" type="radio" name="gender" id="female" />
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input value="Prefer not to say"  onClick={e=>setGender(e.target.value)} className="form-check-input" type="radio" name="gender"  id="Prefer not to say" />
                                            <label className="form-check-label" htmlFor="Prefer not to say">
                                                Prefer not to say
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2  px-4 justify-content-left">
                                    <label htmlFor="mobile" className="form-label p-0">Mobile&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={mobile} onChange={e=>{ setMobile(e.target.value) }} type="number" className="form-control" id="mobile" required />
                                </div>

                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="email" className="form-label p-0">Email&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={email} onChange={e=>{ setEmail(e.target.value) }} type="email" className="form-control" id="email" required />
                                </div>
                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="password" className="form-label p-0">Password&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={password} onChange={e=>{ setPassword(e.target.value) }} type="password" className="form-control" id="password" required />

                                </div>
                                <div className="row mt-2  px-4 justify-content-left">
                                    <label htmlFor="confirmPassword" className="form-label p-0">Confirm Password&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={confirmpassword} onChange={e=>{ setConfirmPassword(e.target.value) }} type="password" className="form-control" id="confirmPassword" required />
                                </div>



                                <div className="text-center  p-4">
                                    <div className='row justify-content-center'>
                                        <div className='col-sm-3 m-3'>
                                            <button type='submit' className="btn btn-primary text-center">Sign in</button>
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
            </div >
        </>
    )
}

export default CustomerAccount
