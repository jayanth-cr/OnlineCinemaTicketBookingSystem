import React, { useState } from 'react'
import Form from './Form'
import Layout from './Layout'
import { GapProvider } from './gapContext'

function TicketPage() {
    const [data, setData] = useState([])
    const [seatGap, setSeatGap] = useState(0)
    const [check, setCheck] = useState(false)
    const sendGapToParent = (gap) => {
        setSeatGap(gap);
    }
    return (
        <div className="App container-fluid ">
            <div className='row'>
                <h1 className='bg-dark text-light p-2 text-center '>Select the Layout</h1>
                <GapProvider value={seatGap}>
                    <Layout setData={setData} datas={data} check={check} setCheck={setCheck}  ></Layout>
                </GapProvider>
                <Form data={data} setData={setData} seatGap={seatGap} sendGapToParent={sendGapToParent} check={check} setCheck={setCheck} ></Form>
            </div>
        </div>
    )
}

export default TicketPage
