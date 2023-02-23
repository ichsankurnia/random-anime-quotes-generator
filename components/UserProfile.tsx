'use client'

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type Props = {};

const UserProfile: React.FC<Props> = () => {
    const { data: session } = useSession()
    return (
        <>
            <div className="backdrop-blur-sm bg-white/30 px-4 py-2 space-x-3 rounded-full rounded-br-xl text-sm flex items-center cursor-pointer hover-duration"
                onClick={() => signOut()}
            >
                <p className='max-w-[200px] sm:max-w-[300px] truncate'>{session?.user?.name}</p>
                <Image src={session?.user?.image!} alt='user-avatar' className='rounded-full hover-rotate transition-all' width={30} height={30} />
            </div>
        </>
    );
}

export default UserProfile;