// impport outlet per layout
import { Outlet } from "react-router-dom";

// import navbar per averlo nel template(si ripete per ogni sezione)
import Navbar from "../components/Navbar";

function DefaultLayout() {

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
}

export default DefaultLayout