import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsList from "./index/NewsList";
import Header from "./common/Header";

const App = () =>
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route exact path={"/news"} element={<NewsList />}/>
            </Routes>
        </BrowserRouter>
    </>

export default App