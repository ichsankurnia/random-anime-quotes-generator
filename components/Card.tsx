'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

const Card: React.FC<Props> = ({ }) => {
    const [loading, setLoading] = useState(false)
    const [quote, setQuote] = useState({
        anime: 'Apple Inc.',
        character: 'Steve Jobs',
        quote: 'Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.'
    })

    async function getQuote() {
        fetch('https://animechan.vercel.app/api/random')
            .then(res => res.json())
            .then(data => {
                setQuote(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getQuote()
    }, [])


    return (
        <>
            <div className='flex flex-col items-start min-w-full md:min-w-[30rem] 2xl:min-w-[35rem] max-w-3xl'>
                <div className="backdrop-blur-sm bg-white/30 p-8 rounded-tl-xl rounded-br-xl text-base 2xl:text-lg w-full">
                    <p>Anime: <span className='font-medium'>{quote.anime}</span></p>
                    <p className="font-medium my-7">“{quote.quote}”</p>
                    <div className="flex item-center space-x-2 font-normal">
                        <p>by {quote.character}</p>
                        <p>|</p>
                        <Link href={`https://twitter.com/intent/tweet?text="${quote.quote} by ${quote.character}"`} target="_blank" rel="noopener noreferrer"
                            className='hover:text-blue-500 duration-300'
                        >
                            Tweet{' '}<i className="fa-brands fa-twitter hover:rotate-[360deg] duration-300"></i>
                        </Link>
                    </div>
                </div>
                <button type="button" className="mt-2 md:mt-3 inline-block px-6 py-3 font-medium text-sm text-center bg-gradient-to-tl from-blue-600 to-cyan-400 align-middle transition-all rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white hover:opacity-80 duration-300"
                    onClick={() => {
                        setLoading(true)
                        getQuote()
                    }} >
                    {loading ? 'Please wait...' : 'New Quote'}
                </button>
            </div>
        </>
    );
}

export default Card;