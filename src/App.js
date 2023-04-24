import { fetchData } from "./actions";
import Header from "./components/header";
import TopDashboard from "./components/top-dashboard";
import { useDispatch } from "react-redux";

function App() {
  //TODO: fetch data
  const dispatch = useDispatch();
  dispatch(fetchData());
  return (
    <div className="mt-10 lg:w-5/6 sm:w-full lg:mx-auto">
      <Header/>
      <div>
        <TopDashboard />
      </div>
    </div>
  );
}

export default App;
