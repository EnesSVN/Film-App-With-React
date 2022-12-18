import React from 'react'
import { FilmIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='bg-gray-600 my-5 rounded-md flex justify-between items-center p-3 text-white shadow-md'>
            <div className='flex gap-3 font-bold'>
                <FilmIcon className='w-5 h-5 stroke-2' />
                logo
            </div>
            <div className='flex justify-between gap-10'>
                <Link to={"/"} >
                    Home
                </Link>
                <Link to="/film">
                    Film
                </Link>
                <Link to={"/tv"}>
                    Tv
                </Link>
            </div>
            <div className='mr-4'>
                <button className='bg-blue-600 py-3 px-5 rounded-md text-white'>Login</button>
            </div>
        </div>
    )
}

export default Header