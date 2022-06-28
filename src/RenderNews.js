
import axios from "axios";
import {useEffect, useState} from "react";

const RenderNews = ({page}) => {
    const [news, setNews] = useState([])
    const url = "http://localhost:8080/news?page=" + page;
    console.log("URL: " + url)
    const getData = () => {
        axios.get(url)
            .then(res => setNews(res.data))
    }
    useEffect(getData)
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>タイトル</th>
                <th>本文</th>
                <th>投稿者</th>
                <th>投稿日時</th>
                <th>カテゴリ</th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(news).map(d => d[1]).map((d) =>
                <tr>
                    <td>{d["title"]}</td>
                    <td>{d["body"]}</td>
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