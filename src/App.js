import { fetchData } from "./actions";
import BottomDashboard from "./components/bottom-dashboard";
import Header from "./components/header";
import TopDashboard from "./components/top-dashboard";
import { useDispatch } from "react-redux";

function App() {
  //TODO: fetch data
  const dispatch = useDispatch();
  dispatch(fetchData());
  return (
    <div className="mt-10 lg:w-5/6 sm:w-full lg:mx-auto mx-4">
      <Header />
      <TopDashboard />
      <BottomDashboard />
    </div>
  );
}

export default App;
