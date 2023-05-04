import ERChart from "../charts/ERChart";
import { useSelector } from "react-redux";
import Spinner from "../spinner";
import { convertData, formatTable } from "../../utils";
import ERTable from "../tables/ERTable";
import ERHeader from "../headers/ERHeader";

function ExpectedRewards({ interval }) {
  const loading = useSelector((state) => state.loading);
  const response = useSelector((state) => state.data.makers);
  const data = response ? convertData(response, "expected_maker_reward") : null;
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
      <ERHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <ERChart interval={interval} colors={colors} />
            <ERTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpectedRewards;
