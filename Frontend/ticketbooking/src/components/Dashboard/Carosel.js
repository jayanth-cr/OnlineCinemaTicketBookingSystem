import React from 'react'


function Carosel({ urls }) {

    return (
        <div className='row justify-content-center mt-md-5 mt-1 m-0 p-0'>
            <div id="carouselExampleControls" className="carousel slide text-center bg-secondary col-lg-10 col-11" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className=" mini  img-fluid" src={urls[0]} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="mini img-fluid" src={urls[1]} alt="Second slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carosel
