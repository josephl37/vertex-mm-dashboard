import MFChart from "../charts/MFChart";
import { useSelector } from "react-redux";
import Spinner from "../spinner";
import { convertData, formatTable } from "../../utils";
import MFTable from "../tables/MFTable";
import MFHeader from "../headers/MFHeader";

function MakerFee({ interval }) {
  const loading = useSelector((state) => state.loading);
  const response = useSelector((state) => state.data.makers);
  const data = response ? convertData(response, "maker_fee") : null;
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
      <MFHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <MFChart interval={interval} colors={colors} />
            <MFTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MakerFee;