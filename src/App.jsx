import Sidebar from "./components/Sidebar";
import skills from "./skills";

export function App() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-11"></div>
        <div className="col-1">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
