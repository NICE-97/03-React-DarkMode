import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { ThemeContext } from '../App'
import { useContext } from 'react'
const Content = ()=>{
    const {theme} = useContext(ThemeContext);
    return (
        <main className={theme==="dark"?"dark":"light"}>
            <div>
                <h1>Patthanawong Official</h1>
                <p>DarkMode WorkShop</p>
            </div>
            <img src={theme==="dark"?dark:light} alt="logo"></img>
        </main>
    )
}

export default Content