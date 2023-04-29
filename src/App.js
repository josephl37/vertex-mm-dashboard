import { useEffect, useState } from "react";
import { fetchData } from "./actions";
import BottomDashboard from "./components/bottom-dashboard";
import Header from "./components/header";
import TopDashboard from "./components/top-dashboard";
import { useDispatch } from "react-redux";
import Signature from "./components/signature";

function App() {
  const [market, setMarket] = useState(1);
  const [interval, setInterval] = useState(900);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(market, interval));
  }, [dispatch, market, interval]);
  return (
    <div className="mt-10 lg:w-5/6 sm:w-full lg:mx-auto mx-4">
      <Header
        interval={interval}
        setInterval={setInterval}
        market={market}
        setMarket={setMarket}
      />
      <TopDashboard />
      <BottomDashboard interval={interval} />
      <Signature />
    </div>
  );
}

export default App;