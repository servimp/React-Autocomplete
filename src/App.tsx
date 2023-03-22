import Heading from "./components/Heading"
import Section from "./components/Section"
import { useState } from "react"

function App() {

  const [count, setCount] = useState<number>(1)

  return (
    <>
    <div className="container">
    <Heading title={"Autocomplete front end"}/>
    <Section title={"Enter the text you want to search"}></Section>
    </div>
    </>
  )
}

export default App
