import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div>
            <ToastContainer position="top-center" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
