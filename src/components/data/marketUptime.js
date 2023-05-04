import UPChart from "../charts/UPChart";
import { useSelector } from "react-redux";
import Spinner from "../spinner";
import { convertData, formatTable } from "../../utils";
import UPTable from "../tables/UPTable";
import UPHeader from "../headers/UPHeader";

function MarketUptime({ interval }) {
  const loading = useSelector((state) => state.loading);
  const response = useSelector((state) => state.data.makers);
  const data = response ? convertData(response, "uptime") : null;
  const lastData = formatTable(data);

  const colors = [
    "#4C289F",
    "#CDADEF",
    "#E4B50E",
    "#AF5067",
    "#CF96A4",
    "#53AC8C",
  ];

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <UPHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <UPChart interval={interval} colors={colors}/>
            <UPTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MarketUptime;