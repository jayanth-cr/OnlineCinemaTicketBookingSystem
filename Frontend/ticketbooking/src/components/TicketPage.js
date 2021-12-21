import React, { useState } from 'react'
import Form from './Form'
import Layout from './Layout'
import {GapProvider} from './gapContext'

function TicketPage() {
    const [data, setData] = useState([])
    const [seatGap, setSeatGap] = useState(0)
    const sendGapToParent = (gap)=>{
        setSeatGap(gap);
    }   
    console.log(data);
    return (
        <div className="App container-fluid ">
            <div className='row'>
                <GapProvider value={seatGap}>
                <Layout setData={setData} datas={data}  ></Layout>
                </GapProvider>
                <Form data={data} setData={setData} seatGap={seatGap} sendGapToParent={sendGapToParent} ></Form>
            </div>
        </div>
    )
}

export default TicketPage
