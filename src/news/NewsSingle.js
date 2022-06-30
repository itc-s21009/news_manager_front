import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import './NewsSingle.css'
import {translateDate} from "../common/Utility";
import NotFound from "../common/NotFound";
import Header from "../common/Header";

const NewsSingle = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    const url = "http://localhost:8080/news/" + id;
    const getData = () => {
        axios.get(url, {withCredentials: true})
            .then(res => {
                setData(res.data)
            })
    }
    useEffect(getData, [])
    if (data["body"] === undefined) {
        return <NotFound/>
    }
    return (
        <>
            <Header/>
            <div className={"news p-2"}>
                <div className={"title d-flex align-items-end"}>
                    <h1>{data["title"]}</h1>
                    <h5>by {data["post_by"]}</h5>
                </div>
                <div className={"title d-flex"}>
                    <h6>{data["category"]}</h6>
                    <h6 className={"date"}>{translateDate(data["publish_at"])}</h6>
                </div>
                <hr/>
                <div className={"body bg-light m-auto p-3"}>
                    {String(data["body"]).split("\n").map((line, index) =>
                        <p key={index}>{line}</p>
                    )}
                < /div>
            </div>
        </>)
}

export default NewsSingle