import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsList from "./news/NewsList";
import Header from "./common/Header";
import Top from "./index/Top";
import NotFound from "./common/NotFound";

const App = () =>
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Top />}/>
                <Route exact path={"/news"} element={<NewsList />}/>
                <Route exact path={"*"} element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </>

export default App