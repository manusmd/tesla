import Navigation from "./components/Navigation/Navigation.tsx";
import {useState} from "react";

function App() {
const [textBlack, _setTextBlack] = useState(true)
  return (
    <>
        <Navigation textBlack={textBlack} />
      <h1>App</h1>
    </>
  )
}

export default App
