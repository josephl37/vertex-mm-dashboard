import { useEffect, useState } from "react";
import { fetchData } from "./actions";
import BottomDashboard from "./components/bottom-dashboard";
import Header from "./components/header";
import TopDashboard from "./components/top-dashboard";
import { useDispatch, useSelector } from "react-redux";
import Signature from "./components/signature";
import Restricted from "./components/restricted";

function App() {
  const [market, setMarket] = useState(1);
  const [interval, setInterval] = useState(900);
  const restricted = useSelector((state) => state.restrict);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(market, interval));
  }, [dispatch, market, interval]);

  if (!restricted) {
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
  } else {
    return (
      <div className="mx-10">
        <Restricted />
      </div>
    );
  }
}

export default App;