import QSChart from "../charts/QSChart";
import { useSelector } from "react-redux";
import Spinner from "../spinner";
import { convertData, formatTable } from "../../utils";
import QSTable from "../tables/QSTable";
import QSHeader from "../headers/QSHeader";

function QScore({ interval }) {
  const loading = useSelector((state) => state.loading);
  const response = useSelector((state) => state.data.makers);
  const data = response ? convertData(response, "q_score") : null;
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
      <QSHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <QSChart interval={interval} colors={colors} />
            <QSTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default QScore;
