import './Login.css'
import axios from "axios";
import {APIURL} from "../common/Utility";

const PostLogin = (username, password) => {
    console.log(username, password)
    const params = new URLSearchParams()
    params.append("user", username)
    params.append("pass", password)
    axios.post(`${APIURL}/login`, params, {withCredentials: true})
        .then(res => {
            console.log(res)
        })
        .catch(({response}) => {
            console.log(response)
        })
    return <Login/>
}

const Login = () =>
    <>
        <h1 className={"mt-3 text-center"}>ログイン</h1>
        <div className={"login p-3 mt-3 m-auto"}>
            <div className={"mb-3 row p-3"}>
                <label htmlFor={"username"}>ユーザーID</label>
                <input type={"text"} id={"username"}/>
            </div>
            <div className={"mb-3 row p-3"}>
                <label htmlFor={"password"}>パスワード</label>
                <input type={"password"} id={"password"}/>
            </div>
            <button onClick={() => {
                const username = document.getElementById("username").value
                const password = document.getElementById("password").value
                PostLogin(username, password)
            }} className={"btn btn-primary w-100"}>ログイン
            </button>
        </div>
    </>

export default Login