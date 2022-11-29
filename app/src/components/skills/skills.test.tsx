import { screen, render } from "@testing-library/react"
import Skills from "./skills"

describe("skills", () => {
    const items = ["hacker", "dev", "designer"]
    test("renders with props ", () => {
        render(<Skills items={items} />)
        const skillsEl = screen.getByRole("list")
        expect(skillsEl).toBeInTheDocument()
    })
    test("renders the list of items ", () => {
        render(<Skills items={items} />)
        const skillsItems = screen.getAllByRole("listitem")
        expect(skillsItems).toHaveLength(items.length)
    })
    test("renders the login button", () => {
        render(<Skills items={items} />)
        const loginBtn = screen.getByRole("button", { name: "login ⚠️" })
        expect(loginBtn).toBeInTheDocument()
    })
    test("not renders the start learning button", () => {
        render(<Skills items={items} />)
        const startLearningBtn = screen.queryByRole("button", { name: "Start Learning 😇" })
        expect(startLearningBtn).not.toBeInTheDocument()
    })
})

//textmach represents either String or regex or a func
