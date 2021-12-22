import React from 'react'

function MovieCard({title}) {
    return (
        <div className="card col-lg-2  col-sm-5 m-sm-4 col-sm-5 col-sm-5 col-12 m-5  mt-0  ">
            <img className="img-fluid rounded mt-3 cardmini"  src="https://wallpapershome.com/images/pages/pic_v/22797.jpg" alt=""/>
                <div className="card-body p-0 py-1 m-0 ">
                    <h5 className="card-title my-0 p-0 m-0 ">{title}</h5>
                </div>
        </div>
    )
}

export default MovieCard
