import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsList from "./news/NewsList";
import Header from "./common/Header";
import Top from "./index/Top";

const App = () =>
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Top />}/>
                <Route exact path={"/news"} element={<NewsList />}/>
            </Routes>
        </BrowserRouter>
    </>

export default App