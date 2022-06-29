import './Login.css'

const PostLogin = (username, password) => {
    console.log(username, password)
}

const Login = () =>
        <>
            <h1 className={"mt-3 text-center"}>ログイン</h1>
            <div className={"login p-3 mt-3 m-auto"}>
                <div className={"mb-3 row p-3"}>
                    <label htmlFor={"username"}>Username</label>
                    <input type={"text"} id={"username"}/>
                </div>
                <div className={"mb-3 row p-3"}>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"}/>
                </div>
                <button onClick={() => {
                    const username = document.getElementById("username").value
                    const password = document.getElementById("password").value
                    PostLogin(username,password)
                }} className={"btn btn-primary w-100"}>Login
                </button>
            </div>
        </>

export default Login