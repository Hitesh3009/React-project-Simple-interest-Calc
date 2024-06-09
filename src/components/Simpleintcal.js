import React, { useState } from "react";
export default function Simpleintcal() {
    const [si, setSi] = useState(0);

    const handleClick = (event) => {
        let principalAmt = document.getElementById('principalAmt').value;
        let rateOfInt = document.getElementById('rateOfInt').value;
        let NumOfYrs = document.getElementById('NumOfYrs').value;

        let SI = (principalAmt * rateOfInt * NumOfYrs) / 100;
        event.preventDefault();
        if (principalAmt && rateOfInt && NumOfYrs) {
            setSi(SI);
        }
    }
    return (
        <>
            <div className="container bg-warning " style={{ paddingLeft: '1.5rem', paddingRight: '5rem', paddingTop: '1rem', paddingBottom: '2rem' }}>
                <h3>Simple Interest Calculator</h3>
                <br />
                <h6>Calculates your simple interest easily</h6>
                <div className="container bg-secondary p-3 text-light my-3">
                    <h4>₹ {si}</h4>
                </div>

                <form action="#">
                    <h4>Principal Amount(₹)</h4>
                    <br />
                    <input type="number" id="principalAmt" placeholder='Enter the amount' style={{ width: '20rem', borderRadius: '0.5rem', height: '2.3rem' }} />
                    <br />
                    <br />
                    <h4>Rate of Interest(%p.a)</h4>
                    <br />
                    <input type="number" id="rateOfInt" placeholder='Enter the rate' style={{ width: '20rem', borderRadius: '0.5rem', height: '2.3rem' }} />
                    <br />
                    <br />
                    <h4>Number of Years(in yrs)</h4>
                    <br />
                    <input type="number" id="NumOfYrs" placeholder='Enter the number of years' style={{ width: '20rem', borderRadius: '0.5rem', height: '2.3rem' }} />
                    <br />
                    <br />
                    <button className="btn btn-primary" id="calculate" onClick={handleClick}>Calculate</button>
                </form>
            </div>
        </>
    )
}
