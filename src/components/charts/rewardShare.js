import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { convertData, timeFormat } from "../../utils";

function ExpectedRewards({interval}) {
  const response = useSelector((state) => state.data.makers_statistics);
  const data = response ? convertData(response, "share") : null;

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
              domain={['dataMin', 'dataMax']}
              tickFormatter={timeFormat(interval)}
            />
            <YAxis tickFormatter={(c) => `${c * 100}%`} />
            <Tooltip/>
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

export default ExpectedRewards;