
interface HelloProp {
  name?: string
}

const Hello =
({ name }: HelloProp) => <div>Hello {name ? name : "World"} 😇!</div>

export default Hello
