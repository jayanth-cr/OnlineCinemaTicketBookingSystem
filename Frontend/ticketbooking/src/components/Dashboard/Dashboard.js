import React from 'react'
import Carosel from './Carosel'
import MovieList from './MovieList'

function Dashboard() {
    return (
        <div className='p-0 m-0'> 
            <h1 className='p-2 text-center text-light bg-dark'>Navbar</h1>
            <Carosel urls ={[`https://images8.alphacoders.com/110/thumb-1920-1106852.jpg`,`https://images3.alphacoders.com/109/thumb-1920-1095565.jpg`]}></Carosel>
            <MovieList></MovieList>
        </div>
    )
}

export default Dashboard
