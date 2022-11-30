import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./counter"

describe("counter",()=>{
  
  test("renders correctly",()=>{
    render(<Counter />)
    const counterValEl = screen.getByRole("heading",{level:1})
    expect(counterValEl).toBeInTheDocument()
    const incrementBtn = screen.getByRole("button",{name:/increment/i})
    expect(incrementBtn).toBeInTheDocument()
  })

  test("renders with counter equal to 0",()=>{
    render(<Counter/>)
    const counterValEl = screen.getByRole("heading",{level:1})
    expect(counterValEl).toHaveTextContent("0")
  })

  test("renders with counter val equal to 1 after clicking on increment button",async ()=>{
    const user = userEvent.setup()
    render(<Counter/>)
    const counterValEl = screen.getByRole("heading",{level:1})
    const counterBtn = screen.getByRole("button",{name:/increment/i})
    await user.click(counterBtn)
    expect(counterValEl).toHaveTextContent("1")
  })

})