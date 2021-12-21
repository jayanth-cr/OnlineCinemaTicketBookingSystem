import React, { useState } from 'react'

function Form({ data, setData, sendGapToParent }) {

    const [row, increRow] = useState(65)

    const removeRow = (e) => {
        const newData = []
        for (let i = 0; i < data.length; i++) {
            if (Object.keys(data[i])[0] === e.target.remove.value) {
                let prev = data[i];
                for (let j = i + 1; j < data.length; j++) {
                    let temp = data[j]
                    newData.push({ [Object.keys(prev)[0]]: temp[Object.keys(temp)] });
                    prev = data[j]
                }
                break;
            }
            else {
                newData.push(data[i]);
            }

        }
        setData(newData);
    }

    const updateSeatGap = (e) => {
        sendGapToParent(e.target.gap.value)
    }

    const updateData = (e) => {
        setData([...data, { [String.fromCharCode(row)]: [Number(e.target.seats.value), {} ] }]);
        increRow(row => row + 1)
    }

    return (
        <div className='col m-1 p-1 rounded-3 border border-2 border-primary justify-content-center'>
            <form onSubmit={(e) => { e.preventDefault(); updateData(e); }}>
                <h5>Add New Row : </h5>
                <label htmlFor='seats' >No of Seats : *&nbsp;&nbsp;&nbsp; </label><br /><br />
                <input required style={{ width: '50px' }} id='seats' name='seats'></input><br /><br />
                <button >Submit</button><br /><br />
            </form>

            <form onSubmit={e => { e.preventDefault();  updateSeatGap(e); }}>
                <label htmlFor='seat' >Remove Seats ?  &nbsp;&nbsp;&nbsp; </label><br /><br />
                <label htmlFor='gap' >Fill No of gaps :&nbsp;&nbsp;&nbsp; </label>
                <input required style={{ width: '50px' }} id='gap' name='gap'></input><br /><br />
                <button>Done</button>
            </form><br /><br /><br />
            <button onClick={() => { console.log(data); }}>Final</button>
            <br></br><br></br><br></br>


            <form onSubmit={(e) => { e.preventDefault(); removeRow(e) }}>
                <h5>Remove a Row</h5>
                <label htmlFor='remove'>Remove Row</label>
                <input required style={{ width: '50px' }} id='remove' name='remove'></input><br /><br />
                <button >Submit</button><br /><br />
            </form>
        </div>
    )
}

export default Form
