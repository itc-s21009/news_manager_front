import RenderNews from "./RenderNews";
import {useState} from "react";
import Header from "../common/Header";

const NewsList = () => {
    const [page, setPage] = useState(1)
    const next = () =>
        setPage(page + 1)
    const prev = () => {
        if (page > 1)
            setPage(page - 1)
    }
    return (
        <>
            <Header/>
            <div className={"text-center mt-3"}>
                <p>{page}ページ目</p>
                <div className={"btn-group"}>
                    <button className={'btn btn-primary'} onClick={prev}>{"<<"}</button>
                    <button className={'btn btn-primary'} onClick={next}>{">>"}</button>
                </div>
            </div>
            <RenderNews page={page} key={page} />
        </>
    )
}
export default NewsList