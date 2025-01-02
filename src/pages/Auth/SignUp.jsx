import React, { useState } from 'react'
import InputDefault from '../../components/Form/InputDefault'
import DefualtBtn from '../../components/Buttons/DefualtBtn';
import axios from 'axios';

const SignUp = () => {
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetSignUpData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleCreateAccount = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/singup', SignUpData)
        }
        catch(err){
            console.log(err)
        }
    }


  return (
    <div className='bg-gray-200 min-h-screen'>
        <div className="md:grid grid-cols-3 gap-3 py-40">
            <div className="w-full"></div>
            <div className="w-full">
                <div className="bg-white p-4">
                    <h1 className="text-gray-500 text-xl font-semibold uppercase text-center">Create Account</h1>
                    <form action="" method="post">
                        <div className="my-4">
                            <h1 className="py-2">Username: </h1>
                            <InputDefault 
                                type={'text'}
                                name={'username'}
                                value={SignUpData.username}
                                placeholder={"Enter Username"}
                                required={true}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-4">
                            <h1 className="py-2">Email: </h1>
                            <InputDefault 
                                type={'email'}
                                name={'email'}
                                value={SignUpData.email}
                                placeholder={"Enter Email Address"}
                                required={true}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-4">
                            <h1 className="py-2">Password: </h1>
                            <InputDefault 
                                type={'password'}
                                name={'password'}
                                value={SignUpData.password}
                                placeholder={"Enter Password"}
                                required={true}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="my-4">
                            <DefualtBtn btntype={'submit'} btnvalue={'Create New Account'} />
                        </div>
                    </form>

                    <p className="">Already have an Account ? <a href="/" className='text-blue-500 font-semibold'>Login</a></p>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>
  )
}

export default SignUp