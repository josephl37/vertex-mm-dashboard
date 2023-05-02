import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { convertData, timeFormat, getFormattedTime } from "../../utils";
import numeral from "numeral";
import loader from "../../public/spinner.svg";

function MakerFee({ interval }) {
  const response = useSelector((state) => state.data.makers);
  const loading = useSelector((state) => state.loading); 
  const data = response ? convertData(response, "maker_fee") : null;

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
    return (
      <div className="text-gray-1 flex items-center justify-center h-full">
        <div className="animate-spin">
          <img src={loader} alt="loader" />
        </div>
      </div>
    );
  } else if (data === null) {
    return (
      <div className="text-gray-1 flex items-center justify-center h-full">
        <p className="text-center">Data is unavailable</p>
      </div>
    );
  } else {
    return (
      <>
        <ResponsiveContainer>
          <AreaChart
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
            <YAxis
              tickFormatter={(c) => numeral(c).format("0%")}
              domain={[0, 1]}
              ticks={[0, .25, .50, .75, 1]}
            />
            <Tooltip
              content={<CustomTooltip interval={interval} colors={colors} />}
            />
            {keys.map((key, index) => (
              <Area
                key={key}
                dataKey={key}
                stackId="1"
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
              />
            ))}
          </AreaChart>
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
                {entry.name}: {numeral(entry.value).format("0.00%")}
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

export default MakerFee;
