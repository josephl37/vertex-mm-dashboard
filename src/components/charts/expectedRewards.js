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

function ExpectedRewards({ interval }) {
  const response = useSelector((state) => state.data.makers_statistics);
  const data = response ? convertData(response, "expected_reward") : null;

  console.log(data);

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

  if (data === null) {
    return <div>Loading...</div>;
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
              scale="time"
              type="number"
              domain={["dataMin", "dataMax"]}
              tickFormatter={timeFormat(interval)}
            />
            <YAxis tickFormatter={(c) => c.toString().replace(/000$/, "K")} />
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
        {payload
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
              {entry.name}: {entry.value.toFixed(0)}
            </div>
          ))}
      </div>
    );
  }
  return null;
}

export default ExpectedRewards;
