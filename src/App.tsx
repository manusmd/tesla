import Navigation from "./components/Navigation/Navigation.tsx";
import {useState} from "react";
import {ProductView} from "./components/ProductView/ProductView.tsx";

function App() {
const [textBlack, _setTextBlack] = useState(false)
  return (
    <>
        <Navigation textBlack={textBlack} />
        <ProductView video={"/Model3Hero.mp4"} textBlack={textBlack} title={"Model 3"} pricing={"From $29,740*"} info={"After Federal Tax Credit & Est. Gas Savings"}/>
        <ProductView image={"/ModelY.avif"} textBlack={true} title={"Model Y"} pricing={"From $39,390*"} info={"After Federal Tax Credit & Est. Gas Savings"}/>
    </>
  )
}

export default App
