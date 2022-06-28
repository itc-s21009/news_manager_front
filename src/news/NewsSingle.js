import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const NewsSingle = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    const url = "http://localhost:8080/news/" + id;
    const getData = () => {
        console.log("URL: " + url)
        axios.get(url)
            .then(res => setData(res.data))
    }
    useEffect(getData, [])
    console.log(data)
    return (
        <>
            <h1>{data["title"]}</h1>
            <h3>by {data["post_by"]}</h3>
        </>)
}

export default NewsSingle