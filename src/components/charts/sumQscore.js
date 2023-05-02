import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import { useSelector } from "react-redux";
import { convertData, timeFormat, getFormattedTime } from "../../utils";
import numeral from "numeral";
import Spinner from "../spinner";
import NoData from "../noData";

function SumQScore({ interval }) {
  const response = useSelector((state) => state.data.makers);
  const loading = useSelector((state) => state.loading); 
  const data = response ? convertData(response, "sum_q_min") : null;

  const keys = data
    ? Object.keys(data[0]).filter((k) => k !== "timestamp")
    : null;
  const colors = [
    "#4C289F",
    "#CDADEF",
    "#E4B50E",
    "#AF5067",
    "#CF96A4",
    "#53AC8C",
  ];

  if (loading) {
    return <Spinner />;
  } else if (data === null) {
    return <NoData />;
  } else {
    return (
      <>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="timestamp"
              scale="auto"
              type="number"
              domain={["dataMin", "dataMax"]}
              tickFormatter={timeFormat(interval)}
            />
            <YAxis tickFormatter={(c) => numeral(c).format("0,0e+0")} />
            <Tooltip
              content={<CustomTooltip interval={interval} colors={colors} />}
            />
            {keys.map((key, index) => (
              <Line
                key={key}
                dataKey={key}
                dot={false}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

function CustomTooltip({ active, payload, label, interval, colors }) {
  if (active) {
    const timeFormat = getFormattedTime(interval);

    return (
      <div
        className="bg-tooltip-gray p-2 text-gray-1"
        style={{
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="font-bold text-white mb-1">
          {timeFormat.format(label)}
        </div>
        {payload && payload.length > 0 ? (
          payload
            .map((entry, index) => ({
              entry,
              color: colors[index % colors.length],
            }))
            .reverse()
            .map(({ entry, color }, index) => (
              <div key={`item-${index}`} className="flex">
                <span
                  className="w-4 h-4 mr-4 mt-1"
                  style={{ backgroundColor: color }}
                ></span>
                {entry.name}: {numeral(entry.value).format("0.00e+0")}
              </div>
            ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    );
  }

  return null;
}

export default SumQScore;