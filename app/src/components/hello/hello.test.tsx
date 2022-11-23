import { render, screen } from "@testing-library/react"
import Hello  from "./hello"

test('Hello renders correctly',()=>{
   render(<Hello />)
   const textElement = screen.getByText(/hello world 😇!/i)
   expect(textElement).toBeInTheDocument()
})

test('Hello renders with a name',()=>{
   render(<Hello name="yassine"/>)
   const textElement = screen.getByText(/hello yassine 😇!/i)
   expect(textElement).toBeInTheDocument()
})

