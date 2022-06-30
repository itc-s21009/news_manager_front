import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsList from "./news/NewsList";
import Top from "./index/Top";
import NotFound from "./common/NotFound";
import NewsSingle from "./news/NewsSingle";
import Login from "./login/Login";
import {Logout} from "./logout/Logout";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/logout"} element={<Logout/>}/>
                    <Route exact path={"/"} element={<Top/>}/>
                    <Route exact path={"/news"} element={<NewsList/>}/>
                    <Route exact path={"/news/:id"} element={<NewsSingle/>}/>
                    <Route exact path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App