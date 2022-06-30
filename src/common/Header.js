import './Header.css'
import {useContext} from "react";
import {FlagLoggedIn} from "../App";

const Header = () => {
    const isLoggedIn = useContext(FlagLoggedIn)
    const Menu = () => {
        if (isLoggedIn) {
            return <>
            </>
        } else {
            return <>
                <a href={"/login"} className={"text-decoration-none text-white"}><h5>ログイン</h5></a>
            </>
        }
    }
    return <header>
        <div className={"bg-dark bg-gradient p-2"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <a href={"/"} className={'text-decoration-none text-white'}><h2>サーバーサイド Kotlin 課題</h2></a>
                    </div>
                    <div className={"col-3 offset-3 menu d-flex"}>
                        <a href={"/news"} className={"text-decoration-none text-white"}><h5>ニュース</h5></a>
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header