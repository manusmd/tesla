import Navigation from "./components/Navigation/Navigation.tsx";
import { useState} from "react";
import {ProductView} from "./components/ProductView/ProductView.tsx";
import styles from "./App.module.css";

function App() {
const [textBlack, _setTextBlack] = useState(false)
    return (
    <div className={styles.container}>
        <Navigation textBlack={textBlack} />
        <div className={styles.productScroll}>
            <ProductView video={"/Model3Hero.mp4"} textBlack={textBlack} title={"Model 3"} pricing={"From $29,740*"} info={"After Federal Tax Credit & Est. Gas Savings"} gradient/>
            <ProductView image={"/ModelY.avif"} textBlack={true} title={"Model Y"} pricing={"From $39,390*"} info={"After Federal Tax Credit & Est. Gas Savings"}/>
        </div>
    </div>
  )
}

export default App
