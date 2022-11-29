import { screen, render } from "@testing-library/react"
import React from "react"
import QbRole from "./QbRole"

describe("Query by role component & options", () => {

    test('renders', () => {
        render(<QbRole />)
        //testbox
        const nameEl = screen.getByRole("textbox", { name: "Name" })
        //select
        const selectContriesEl = screen.getByRole("listContries")
        //checkbox 
        const checkboTerms = screen.getByRole("checkbox")
        //btn
        const btnSubmitEl = screen.getByRole("button") as HTMLButtonElement
        //heading h1 & h2
        const h1El = screen.getByRole("heading", { level: 1 })
        const h2El = screen.getByRole("heading", { level: 2 })
        //I agree to the terms and conditions
        const termsEl = screen.getByLabelText("I agree to the terms and conditions",{
            selector:"input"
        })
        //expect
        expect(btnSubmitEl).toHaveTextContent(/submit/i)
        expect(selectContriesEl).toBeInTheDocument()
        expect(checkboTerms).toBeInTheDocument()
        expect(h1El).toBeInTheDocument()
        expect(h2El).toBeInTheDocument()
        expect(nameEl).toBeInTheDocument()
        expect(termsEl).toBeInTheDocument()

    })



})