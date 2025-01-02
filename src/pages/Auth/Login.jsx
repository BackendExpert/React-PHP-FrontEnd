import React, { useState } from 'react'
import InputDefault from '../../components/Form/InputDefault'
import DefualtBtn from '../../components/Buttons/DefualtBtn';

const Login = () => {
    const [LoginData, SetLoginData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetLoginData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

  return (
    <div className='bg-gray-200 min-h-screen'>
        <div className="md:grid grid-cols-3 gap-3 py-40">
            <div className=""></div>
            <div className="">
                <div className="bg-white p-4">
                    <h1 className="text-gray-500 text-center font-semibold text-xl uppercase mb-4">Login Here</h1>

                    <div className="">
                        <form action="" method="post">
                            <div className="py-4">
                                <p className="mb-4">Username: </p>
                                <InputDefault 
                                    type={'text'}
                                    name={'username'}
                                    value={LoginData.username}
                                    onChange={handleInputChange}
                                    required={true}
                                    placeholder={'Enter Username'}
                                />
                            </div>

                            <div className="py-4">
                                <p className="mb-4">Password: </p>
                                <InputDefault 
                                    type={'password'}
                                    name={'password'}
                                    value={LoginData.password}
                                    onChange={handleInputChange}
                                    required={true}
                                    placeholder={'Enter Password'}
                                />
                            </div>

                            <div className="my-2">
                                <DefualtBtn btntype={'submit'} btnvalue={'Login'}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default Login