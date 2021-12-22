import React, { useState } from 'react'
import passwordHook from '../Hooks/passwordHook'
import nameHook from '../Hooks/nameHook'
import addressHook from '../Hooks/addressHook'

function CorporateAccount({ title }) {

    const [name, setName] = useState('')
    const [line1, setLine1] = useState('')
    const [line2, setLine2] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState()

    const fetchData = ()=>{
        if(! nameHook(name.trim())  ){
            setError('Name should contain only characters and should have a length between 4 - 30')
        }
        else if(!( addressHook(line1.trim()) && addressHook(line2.trim())) ){
            setError('Address should have a length between 10 - 40')
        }
        else if( ! nameHook(city.trim()) ){
            setError('City name should contain only characters and should have a length between 4 - 30')    
        }
        else if( ! passwordHook(password) ){
            setError('Password should contain atleast an uppercase alphabet, a special symbol, a number and should have a length between 8-50')
        }
        else if( password !== confirmpassword ){
            setError('Passwords not matching')
        }
        else {
            console.log(name,line1,line2,city,email,password,confirmpassword);
            console.log(email);
            setError('')
        }
    }
    
    return (
        <>
            <div className="row m-0 p-0">
                <h1 className='bg-dark text-light p-1 text-center'>Create Account</h1>
                <div className="col-12">
                    <div className="row px-2 px-sm-5 justify-content-center">
                        <div className="col-lg-6  col-12">
                            <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
                                <div className="row  px-4 justify-content-left">
                                    <label htmlFor="name" className="form-label p-0">Name&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={name} onChange={e => setName(prev => e.target.value)} type="text" className="form-control" id="name" name='name' required />
                                </div>
                                <div className="row mt-2  px-4 justify-content-left">
                                    <label htmlFor="address" className="form-label p-0">Address&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <div className='ms-2 mb-2'>
                                        <label htmlFor="line1" className="form-label p-0">Line 1&nbsp;<span
                                            className="text-danger">*</span></label>
                                        <input value={line1} onChange={e => { setLine1(e.target.value) }} type="text" className="form-control" name="line1" id="line1" required />
                                        <label htmlFor="location" className="form-label p-0">Line 2&nbsp;<span
                                            className="text-danger">*</span></label>
                                        <input value={line2} onChange={e => { setLine2(e.target.value) }} type="text" className="form-control" name="line2" id="line2" required />
                                    </div>
                                </div>
                                <div className="row   px-4 justify-content-left">
                                    <label htmlFor="city" className="form-label p-0">City&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={city} onChange={e => { setCity(e.target.value) }} type="text" className="form-control" name="city" id="city" required />
                                </div>
                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="email" className="form-label p-0">Email&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={email} onChange={e => { setEmail(e.target.value) }} type="email" className="form-control" id="email" required />
                                </div>
                                <div className="row mt-2 px-4 justify-content-left">
                                    <label htmlFor="password" className="form-label p-0">Password&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={password} onChange={e => { setPassword(e.target.value) }} type="password" className="form-control" id="password" required />

                                </div>
                                <div className="row mt-2  px-4 justify-content-left">
                                    <label htmlFor="confirmPassword" className="form-label p-0">Confirm Password&nbsp;<span
                                        className="text-danger">*</span></label>
                                    <input value={confirmpassword} onChange={e => { setConfirmPassword(e.target.value) }} type="password" className="form-control" id="confirmPassword" required />
                                </div>
                                <div className="text-center  p-2">
                                    <div className='row justify-content-center'>
                                        <div className='col-sm-3 m-1'>
                                            <button type='submit' className="btn btn-primary text-center">Sign in</button>
                                        </div>
                                        <div className='col-12 m-1 text-danger' >
                                            {error}
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

export default CorporateAccount
