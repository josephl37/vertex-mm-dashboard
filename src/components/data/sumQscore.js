import SUMQChart from "../charts/SUMQChart";
import { useSelector } from "react-redux";
import Spinner from "../spinner";
import { convertData, formatTable } from "../../utils";
import SUMQTable from "../tables/SUMQTable";
import SUMQHeader from "../headers/SUMQHeader";

function SUMQscore({ interval }) {
  const loading = useSelector((state) => state.loading);
  const response = useSelector((state) => state.data.makers);
  const data = response ? convertData(response, "sum_q_min") : null;
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
      <SUMQHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <SUMQChart interval={interval} colors={colors} />
            <SUMQTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default SUMQscore;
