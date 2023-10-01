import Logo from "../Logo/Logo.tsx";
import styles from "./Navigation.module.css";
import {NavItem, navItems} from "./navItems.ts";
import Question from "../Svg/Question.tsx";
import World from "../Svg/World.tsx";
import Account from "../Svg/Account.tsx";
type NavigationProps = {
    textBlack?: boolean
}
const Navigation = ({textBlack}:NavigationProps) => {
    return (
        <div className={styles.container}>
            <Logo black={textBlack}/>
            <div className={styles.navItemsWrapper}>
                {navItems.map((item:NavItem, index)=>(
                    <span  style={{color: textBlack ? "black" :"white"}} key={index}>{item.name}</span>
                ))}
            </div>
            <div className={styles.options}>
                <Question black={textBlack}/>
                <World black={textBlack}/>
                <Account black={textBlack}/>
            </div>
        </div>
    )
}

export default Navigation