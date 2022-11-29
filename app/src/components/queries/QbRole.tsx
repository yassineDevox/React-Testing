import React from 'react'

const QbRole = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="job-location">
                    Job location
                </label>
                <select id="job-location" role="listContries">
                    <option value=""></option>
                    <option value="MA">Morocco</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                </select>
            </div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" id="terms"/>
                    I agree to the terms and conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default QbRole