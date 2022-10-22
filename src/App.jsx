import Sidebar from "./components/Sidebar";
import skills from "./skills";

export function App() {
    return (
        <>
            <div className="container">
                <div className="row bg-light shadow ">
                    <div className="col-10 mt-5"></div>
                    <div className="col-2 mt-5">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
}
