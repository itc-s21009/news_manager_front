import axios from "axios";
import {useEffect, useState} from "react";

const RenderNews = ({page}) => {
    const [news, setNews] = useState([])
    const url = "http://localhost:8080/news?page=" + page;
    const getData = () => {
        console.log("URL: " + url)
        axios.get(url)
            .then(res => setNews(res.data))
    }
    useEffect(getData, [])
    const translateDate = (dateStr) => {
        const f = (n) => ("00" + n).slice(-2)
        const date = new Date(Date.parse(dateStr))
        const year = date.getFullYear()
        const month = f(date.getMonth())
        const day = f(date.getDay())
        const hour = f(date.getHours())
        const min = f(date.getMinutes())
        const sec = f(date.getSeconds())
        return `${year}/${month}/${day} ${hour}:${min}:${sec}`
    }
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>タイトル</th>
                <th>投稿者</th>
                <th>公開日時</th>
                <th>カテゴリ</th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(news).map(d => d[1]).map((d, index) =>
                <tr key={index}>
                    <td>{d["title"]}</td>
                    <td>{d["post_by"]}</td>
                    <td>{translateDate(d["publish_at"])}</td>
                    <td>{d["category"]}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
export default RenderNews