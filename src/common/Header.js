import './Header.css'

const Header = () =>
    <header>
        <div className={"bg-dark bg-gradient p-2"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <a href={"/"} className={'text-decoration-none text-white'}><h1>サーバーサイド Kotlin 課題</h1></a>
                    </div>
                    <div className={"col-3 offset-3 menu d-flex"}>
                        <a href={"/news"} className={"text-decoration-none text-white"}><h5>ニュース</h5></a>
                        <a href={"/login"} className={"text-decoration-none text-white"}><h5>ログイン</h5></a>
                    </div>
                </div>
            </div>
        </div>
    </header>

export default Header