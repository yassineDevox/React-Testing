import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./counter"

describe("counter", () => {

  test("renders correctly", () => {
    render(<Counter />)
    const counterValEl = screen.getByRole("heading", { level: 1 })
    expect(counterValEl).toBeInTheDocument()
    const incrementBtn = screen.getByRole("button", { name: /increment/i })
    expect(incrementBtn).toBeInTheDocument()
  })

  test("renders with counter equal to 0", () => {
    render(<Counter />)
    const counterValEl = screen.getByRole("heading", { level: 1 })
    expect(counterValEl).toHaveTextContent("0")
  })

  test("renders with counter val equal to 1 after clicking on increment button", async () => {
    const user = userEvent.setup()
    render(<Counter />)
    const counterValEl = screen.getByRole("heading", { level: 1 })
    const counterBtn = screen.getByRole("button", { name: /increment/i })
    await user.click(counterBtn)
    expect(counterValEl).toHaveTextContent("1")
  })

  test("renders with count of 10 after clicking the set button", async () => {
    const user = userEvent.setup()
    render(<Counter />)
    const amountInpt = screen.getByRole("spinbutton")
    expect(amountInpt).toBeInTheDocument()
    await user.type(amountInpt, "10")
    expect(amountInpt).toHaveValue(10)
    const setCounterBtn = screen.getByRole("button", { name: /set/i })
    await user.click(setCounterBtn)
    const counterValEl = screen.getByRole("heading", { level: 1 })
    expect(counterValEl).toHaveTextContent("10")

  })
})