import React from 'react'

const QbRole = () => {
    return (
        <div>
            <h1>heading level 1 </h1>
            <h2>heading level 2</h2>
            <img src="https://testing-library.com/img/octopus-64x64.png" alt="RTL" />
            <span title="close">X</span>
            <div data-testid="custom-el">custom HTML Element</div>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='fullName' defaultValue="Yassine" />
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
                    <label htmlFor="terms">
                        <input type="checkbox" id="terms" />
                        I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
            <p>I'm here 😇</p>
        </div>
    )
}

export default QbRole