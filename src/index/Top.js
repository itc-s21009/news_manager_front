import mezamashikun from '../images/mezamashi.jpg'
import Header from "../common/Header";

const Top = () =>
    <>
        <Header/>
        <h1 className={"text-center mt-3"}>TOP</h1>
        <div className={"position-absolute h-75 w-100 m-0 d-flex align-items-center justify-content-center"}>
            <div className="card text-center">
                <img src={mezamashikun} height={300}
                     className="card-img-top" alt={"めざましくん"}/>
                <div className="card-body">
                    <h5 className="card-title">ニュースを見る</h5>
                    <a href="/news" className="btn btn-primary stretched-link">LET'S GO</a>
                </div>
            </div>
        </div>
    </>

export default Top