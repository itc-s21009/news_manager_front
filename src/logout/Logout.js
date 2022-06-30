import Header from "../common/Header";

export const Logout = () => {
    sessionStorage.removeItem("username")
    return (
        <>
            <Header/>
            <h3 className={"text-center mt-5"}>ログアウトしました</h3>
        </>
    )
}