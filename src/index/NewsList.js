import RenderNews from "./RenderNews";
import {useState} from "react";

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
            <div className={"text-center m-0"}>
                <p>{page}ページ目</p>
                <div className={"btn-group"}>
                    <button className={'btn btn-primary'} onClick={prev}>Prev<i
                        className="fa-solid fa-angles-left"></i>
                    </button>
                    <button className={'btn btn-primary'} onClick={next}>Next<i
                        className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
            <RenderNews page={page} key={page} />
        </>
    )
}
export default NewsList