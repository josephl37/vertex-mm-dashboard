import RSChart from "../charts/RSChart";
import { useSelector } from "react-redux";
import Spinner from "../spinner";
import { convertData, formatTable } from "../../utils";
import RSTable from "../tables/RSTable";
import RSHeader from "../headers/RSHeader";

function RewardShare({ interval }) {
  const loading = useSelector((state) => state.loading);
  const response = useSelector((state) => state.data.makers);
  const data = response ? convertData(response, "maker_share") : null;
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
      <RSHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <RSChart interval={interval} colors={colors} />
            <RSTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RewardShare;
