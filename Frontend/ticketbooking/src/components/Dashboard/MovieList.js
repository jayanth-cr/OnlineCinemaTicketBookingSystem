import React from 'react'
import MovieCard from './MovieCard'

function MovieList() {
    let movies = ['Tenet','GOT',"Breaking Bad", 'Virumandi',"Devar Magan","Vikram"]
    const output = movies.map(name=> <MovieCard key={movies.indexOf(name)} title={name}></MovieCard> )
    return (
        <div  className='row mt-3  m-sm-0 m-3 p-0  justify-content-center'>
            {output}
        </div>
    )
}

export default MovieList
