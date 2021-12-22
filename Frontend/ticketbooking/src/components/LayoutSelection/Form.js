import React, { useState } from 'react'

function Form({ data, setData, sendGapToParent, check, setCheck }) {

    const [row, increRow] = useState(65)
    const [g, setG] = useState(0)

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
        increRow(prev => prev > 65 ? prev - 1 : 65);
    }
    console.log(row);
    
    const updateData = (e) => {
        setData([...data, { [String.fromCharCode(row)]: [Number(e.target.seats.value), {}] }]);
        increRow(row => row + 1)
    }
    return (
        <div className='col m-1 p-1 3 border border-2 border-dark justify-content-center'>
            
            <form onSubmit={(e) => { e.preventDefault(); updateData(e); }}>
                <h5>Add New Row : </h5>
                <label htmlFor='seats' >No of Seats : *&nbsp;&nbsp;&nbsp; </label><br /><br />
                <input required style={{ width: '50px' }} id='seats' name='seats'></input><br /><br />
                <button className='btn btn-dark' >Submit</button><br /><br />
            </form>

            <form onSubmit={e=>{ e.preventDefault() ; sendGapToParent(g) }}>
                <h5>Remove seats ?  </h5><br></br>
                <label className="switch">
                    <input onChange={e => { setCheck(e.target.checked); check && setG(0);sendGapToParent(0) }} type="checkbox" />
                    <span className="slider round"></span>
                </label>&nbsp;&nbsp;&nbsp;
                <label htmlFor='gap' style={{ visibility: !check ? 'hidden' : 'visible' }} >Fill No of gaps :&nbsp;&nbsp;&nbsp; </label>
                <input required value={g} type='number' onChange={e => { setG(e.target.value) }} style={{ width: '50px', visibility: !check ? 'hidden' : 'visible' }} id='gap' name='gap'></input>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-dark' style={{ visibility: !check ? 'hidden' : 'visible' }} >Done</button>
            </form>
            <br></br>
            <form onSubmit={(e) => { e.preventDefault(); removeRow(e) ; }}>
                <h5>Remove a Row</h5>
                <label htmlFor='remove'>Remove Row</label>
                <input required style={{ width: '50px' }} id='remove' name='remove'></input><br /><br />
                <button className='btn btn-dark' >Submit</button><br /><br />
            </form>
            <br /><br /><br />
            <button className='btn btn-dark' onClick={() => { console.log(data); }}>Final</button>

        </div>
    )
}

export default Form
