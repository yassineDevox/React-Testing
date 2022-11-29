import { screen, render } from "@testing-library/react"
import React from "react"
import QbRole from "./QbRole"

describe("Query by role component", () => {

    test('renders', () => {
        render(<QbRole />)
        //select
        const selectContriesEl =  screen.getByRole("listContries")
        //checkbox 
        const checkboTerms =  screen.getByRole("checkbox")
        //btn
        const btnSubmitEl = screen.getByRole("button") as HTMLButtonElement
        //expect
        expect(btnSubmitEl).toHaveTextContent(/submit/i)
        expect(selectContriesEl).toBeInTheDocument()
        expect(checkboTerms).toBeInTheDocument()
    })

})