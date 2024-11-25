import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

export default function App() {

    const pages = [
        <Home/>, 
        <About/>, 
        <Resume/>
    ];

    const [activePage, setActivePage] = useState(0);

    const handleChangePage = (page: number) => {

        setActivePage(page);
        // console.log('Page: ' + activePage);

    }

    return(
        <div className={`body-content`}>
            <NavBar changePage={(idx) => handleChangePage(idx)}/>
            {pages[activePage]}
        </div>
    );
}