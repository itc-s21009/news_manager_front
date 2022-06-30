import './Header.css'

const Header = () => {
    const isLoggedIn = sessionStorage.getItem("username") !== null
    const Menu = () =>
        isLoggedIn ?
            <>
                <p>{sessionStorage.getItem("username")}としてログイン中</p>
                <a href={"/news"}><h5>ニュース</h5></a>
                <a href={"/logout"}><h5>ログアウト</h5></a>
            </>
            :
            <>
                <a href={"/news"}><h5>ニュース</h5></a>
                <a href={"/login"}><h5>ログイン</h5></a>
            </>
    return (
        <header>
            <div className={"bg-dark bg-gradient p-2"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <a href={"/"} className={'text-decoration-none text-white'}><h2>サーバーサイド Kotlin 課題</h2></a>
                        </div>
                        <div className={"col-6 menu d-flex justify-content-end"}>
                            <Menu/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header