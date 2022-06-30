import './Login.css'
import axios from "axios";
import {APIURL} from "../common/Utility";
import {useState} from "react";

const Login = () => {
    const [error, setError] = useState(undefined)

    const PostLogin = (username, password) => {
        if (username === "" || password === "") {
            setError("ユーザーIDとパスワードを入力してください")
            return
        }
        console.log(username, password)
        const params = new URLSearchParams()
        params.append("user", username)
        params.append("pass", password)
        axios.post(`${APIURL}/login`, params, {withCredentials: true})
            .then(res => {
                if (res.status === 200) {
                    window.location.href = "/"
                }
            })
            .catch(({response}) => {
                switch (response.status) {
                    case 401:
                        setError("ユーザーIDまたはパスワードが違います")
                        break
                    default:
                        setError("エラーが発生しました。もう一度お試しください。")
                        break
                }
            })
    }
    const RenderError = () => {
        if (error !== undefined) {
            return <div className={"error text-center p-2"}>
                <p>{error}</p>
            </div>
        }
    }
    return <>
        <h1 className={"mt-3 text-center"}>ログイン</h1>
        <div className={"login p-3 mt-3 m-auto"}>
            {<RenderError/>}
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
}

export default Login