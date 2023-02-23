'use client'

import { signIn } from 'next-auth/react';
import React from 'react';

type Props = {};

const Login: React.FC<Props> = ({ }) => {
    return (
        <>
            <div className='text-white flex flex-col items-center justify-center h-screen overflow-hidden'>
                <h2 className='text-lg'><span className='font-bold animate-pulse'>Sign in</span> to continue</h2>
                <div className='flex flex-col w-[20rem] sm:w-[24rem] mx-auto space-y-5 mt-8'>
                    <button className='flex items-center rounded-full space-x-4 backdrop-blur-sm bg-white/30 px-7 py-3 hover-duration'
                        onClick={() => signIn('google')}
                    >
                        <i className="fa-brands fa-google text-xl hover-rotate animate-pulse"></i>
                        <p>Sign in with Google</p>
                    </button>
                    <button className='flex items-center rounded-full space-x-4 backdrop-blur-sm bg-white/30 px-7 py-3 hover-duration'
                        onClick={() => signIn('github')}
                    >
                        <i className="fa-brands fa-github text-xl hover-rotate animate-pulse"></i>
                        <p>Sign in with Github</p>
                    </button>
                </div>
                {/* <div className='flex items-center justify-center space-x-10 mt-7'>
                    <button onClick={() => signIn('google')} className='bg-white/30 backdrop-blur-sm rounded-full w-24 h-24 animate-pulse'>
                        <i className="fa-brands fa-google text-5xl"></i>
                    </button>
                    <button onClick={() => signIn('github')} className='bg-white/30 backdrop-blur-sm rounded-full w-24 h-24 animate-pulse'>
                        <i className="fa-brands fa-github text-5xl"></i>
                    </button>
                </div> */}
            </div>
        </>
    );
}

export default Login;