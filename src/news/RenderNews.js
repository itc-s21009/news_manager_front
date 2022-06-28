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
                    <td>{d["publish_at"]}</td>
                    <td>{d["category"]}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
export default RenderNews