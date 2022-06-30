import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsList from "./news/NewsList";
import Header from "./common/Header";
import Top from "./index/Top";
import NotFound from "./common/NotFound";
import NewsSingle from "./news/NewsSingle";
import Login from "./login/Login";
import {createContext, useState} from "react";

export const FlagLoggedIn = createContext()

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    return <>
        <FlagLoggedIn.Provider value={{isLoggedIn, setLoggedIn}}>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/"} element={<Top/>}/>
                    <Route exact path={"/news"} element={<NewsList/>}/>
                    <Route exact path={"/news/:id"} element={<NewsSingle/>}/>
                    <Route exact path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </FlagLoggedIn.Provider>
    </>
}

export default App