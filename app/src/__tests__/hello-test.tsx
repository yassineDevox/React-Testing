import { render, screen } from "@testing-library/react"
import Hello from "../components/hello/hello"


describe('Hello', () => {

   //only runs this test
   describe('Props', () => {
      test('renders with a name', () => {
         render(<Hello name="yassine" />)
         const textElement = screen.getByText(/hello yassine 😇!/i)
         expect(textElement).toBeInTheDocument()
      })
   })

   test('renders correctly', () => {
      render(<Hello />)
      const textElement = screen.getByText(/hello world 😇!/i)
      expect(textElement).toBeInTheDocument()
   })

})


