import React from 'react'
import Row from './Row'

function Layout({ datas, setData }) {
    let display
    if (datas.length > 0) {
        display = datas.map(data => <Row setData={setData} datas={datas} key={datas.indexOf(data)} k={data} data={data}></Row>)
    }
    return (
        <div className='col  p-1 m-1  minmax border border-2 border-dark'>
            {display}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>Screen is Here</center>
        </div>

    )
}

export default Layout
