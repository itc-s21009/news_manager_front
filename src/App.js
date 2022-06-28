import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsList from "./index/NewsList";

const App = () =>
    <BrowserRouter>
        <Routes>
            <Route exact path={"/news"} element={<NewsList />}/>
        </Routes>
    </BrowserRouter>

export default App