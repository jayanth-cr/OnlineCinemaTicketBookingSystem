import React from 'react'
import Row from './Row'

function Layout({ datas,setData }) {
    let display
    if (datas.length > 0) {
        display = datas.map(data => <Row setData={setData} datas={datas} key={datas.indexOf(data)} k={data} data={data}></Row>)
    }
    return (
        <div className='col m-1 p-1 rounded-3 minmax border border-2 border-primary'>
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
