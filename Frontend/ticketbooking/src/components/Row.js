import React, { useContext } from 'react'
import { GapContext } from './gapContext';

function Row({ data, datas, setData }) {
    var seat = [];
    var rows = 20000;
    var unique = 10000;
    var size = data[Object.keys(data)[0]][0];
    var rowName = Object.keys(data)[0];
    var skip = data[Object.keys(data)[0]][1];
    var tempSize = size;
    let count = 0;
    for (let i = 1; i <= tempSize; i++) {
        if (i === 1) {
            if (count <= 50) {
                seat.push([rows, rowName]);
                rows++;
                count++;
            }
        }
        for (const property in skip) {
            if (i === Number(property)) {
                for (let j = 0; j < skip[property]; j++) {
                    if (count <= 50) {
                        seat.push([unique, rowName]); 
                        unique++;
                        count++;
                    }
                }
            }
        }
        if (count <= 50) {
            seat.push([i, rowName])
            count++;
        }

    }

    const seatGap = useContext(GapContext)

    const removeSeats = (e) => {
        let tempData = datas;
        let newObject
        let id = e.target.id.split('-')
        let i = id[0].charCodeAt(0) - 65;
        if (id[1] in datas[id[0].charCodeAt(0) - 65][id[0]][1]) {
            newObject = { [id[0]]: [datas[id[0].charCodeAt(0) - 65][id[0]][0], { ...datas[id[0].charCodeAt(0) - 65][id[0]][1], [id[1]]: (Number(datas[id[0].charCodeAt(0) - 65][id[0]][1][id[1]]) + Number(seatGap)) }] }
        }
        else {
            newObject = { [id[0]]: [datas[id[0].charCodeAt(0) - 65][id[0]][0], { ...datas[id[0].charCodeAt(0) - 65][id[0]][1], [id[1]]: Number(seatGap) }] }
        }
        /*
        let gate = true
        let updatedGapObject = {}
        let count = 0
        let k = 1;
        let seats = 0;
        for (let gap in newObject[id[0]][1]) {
            if (!gate) {
                break;
            }
            count += newObject[id[0]][1][gap]
            while (k < gap) {
                if (!gate) {
                    break;
                }
                count++;
                seats++;
                k++
                if (count === 50) {
                    for (let gap in newObject[id[0]][1]) {
                        if (gap < seats) {
                            updatedGapObject = { [gap]: newObject[id[0]][1][gap] }
                            newObject = { [id[0]]: [datas[id[0].charCodeAt(0) - 65][id[0]][0], updatedGapObject] }
                        }
                        else {
                            gate = false;
                            break;
                        }
                    }
                }
            }
        }
        while (k < 50) {
            if (!gate) {
                break;
            }
            count++;
            seats++;
            k++
            if (count === 50) {
                for (let gap in newObject[id[0]][1]) {
                    if (gap < seats) {
                        updatedGapObject = { [gap]: newObject[id[0]][1][gap] }
                        newObject = { [id[0]]: [datas[id[0].charCodeAt(0) - 65][id[0]][0], updatedGapObject] }
                    }
                    else {
                        gate = false;
                        break;
                    }
                }
            }
        }
        count++;
        */
        tempData[i] = newObject;
        setData([...tempData])
    }

    seat = seat.map(s => s[0] < 10000 ? <div onClick={(e) => { e.preventDefault(); removeSeats(e); }} key={`${s[1]}-${s[0]}`} className="c" id={`${s[1]}-${s[0]}`} >{s[0]}</div> : s[0] < 20000 ? <div key={`${s[1]}${s[0]}`} className="c " style={{ visibility: 'hidden' }} id={`${s[1]}${s[0]}`} >E</div> : <div key={`${s[1]}${s[0]}`} className='r c1' id={`${s[1]}${s[0]}`}>{s[1]}</div>)


    return (
        <div className="r">

            {seat}

        </div>
    )
}

export default Row
