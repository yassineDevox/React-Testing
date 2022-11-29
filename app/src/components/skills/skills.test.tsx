import { screen, render, logRoles } from "@testing-library/react"
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

    test("start learning button is eventually displayed", async () => {
        const view  = render(<Skills items={items} />)
        // print out the list of all the roles 
        logRoles(view.container)
        screen.debug()
        const startLearningBtn = await screen.findByRole(
                "button",
                { name: "Start Learning 😇"},
                { timeout: 3000 }
        )
        screen.debug()
        expect(startLearningBtn).toBeInTheDocument()
    })
    //debuggin is actually getting a glims of what the Dom it looks like 
})

//textmach represents either String or regex or a func
