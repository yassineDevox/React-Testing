import { HelloProp } from "./hello.types"


const Hello =
  ({ name }: HelloProp) => <div>Hello {name ? name : "World"} 😇!</div>

export default Hello
